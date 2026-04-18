/* ============================================================
   Google Apps Script — Portfolio Form Handler
   ============================================================
   Handles both Contact (index.html) and Inquiry (work.html)
   submissions. Writes to separate sheets in one Spreadsheet.

   SETUP:
   1. Open Google Sheets → Extensions → Apps Script
   2. Paste this entire file
   3. Deploy → New deployment → Web app
      - Execute as: Me
      - Who has access: Anyone
   4. Copy the URL and paste into your HTML files
   ============================================================ */

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var type = data.type || 'contact';
    var now = new Date();
    var timestamp = Utilities.formatDate(now, Session.getScriptTimeZone(), 'yyyy-MM-dd HH:mm:ss');

    if (type === 'inquiry') {
      /* ----- Inquiry (work.html) ----- */
      var sheet = ss.getSheetByName('Inquiry');
      if (!sheet) {
        sheet = ss.insertSheet('Inquiry');
        sheet.appendRow(['Timestamp', 'Template', 'Images', 'Timeline', 'Name', 'Email', 'Message']);
        sheet.getRange(1, 1, 1, 7).setFontWeight('bold');
        sheet.setFrozenRows(1);
      }
      sheet.appendRow([
        timestamp,
        data.template || '',
        data.images   || '',
        data.timeline  || '',
        data.name      || '',
        data.email     || '',
        data.message   || ''
      ]);
    } else {
      /* ----- Contact (index.html) ----- */
      var sheet = ss.getSheetByName('Contact');
      if (!sheet) {
        sheet = ss.insertSheet('Contact');
        sheet.appendRow(['Timestamp', 'Name', 'Email', 'Message']);
        sheet.getRange(1, 1, 1, 4).setFontWeight('bold');
        sheet.setFrozenRows(1);
      }
      sheet.appendRow([
        timestamp,
        data.name    || '',
        data.email   || '',
        data.message || ''
      ]);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/* Allow GET for testing (optional) */
function doGet() {
  return ContentService
    .createTextOutput('Form handler is running.')
    .setMimeType(ContentService.MimeType.TEXT);
}
