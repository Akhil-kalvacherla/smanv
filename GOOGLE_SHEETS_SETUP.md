# Google Sheets Integration for Contact Form Submissions

This guide will help you set up automatic saving of contact form submissions to a Google Sheet.

## Step 1: Create a Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com)
2. Create a new sheet
3. Name it "Contact Form Submissions" (or any name you prefer)
4. Add the following headers in the first row:
   - Timestamp
   - Name
   - Email
   - Phone
   - Business Type
   - Message
   - Source
   - Status

## Step 2: Create Google Apps Script

1. In your Google Sheet, go to **Extensions > Apps Script**
2. Delete any existing code
3. Paste the following code:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = e.parameter;
    
    // Append the data to the sheet
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.businessType || '',
      data.message || '',
      data.source || '',
      data.status || 'New'
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'success',
      'message': 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    'result': 'active',
    'message': 'Webhook is active'
  })).setMimeType(ContentService.MimeType.JSON);
}
```

## Step 3: Deploy as Web App

1. Click **Deploy > New deployment**
2. Click the gear icon ⚙️ next to "Select type" and choose **Web app**
3. Fill in the details:
   - **Description**: "Contact Form Webhook"
   - **Execute as**: "Me" (your email)
   - **Who has access**: "Anyone" (important for the form to work)
4. Click **Deploy**
5. Copy the **Web app URL** provided

## Step 4: Add URL to Environment Variables

1. Create a `.env.local` file in your project root (if it doesn't exist)
2. Add the Google Sheets URL:

```env
VITE_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/YOUR_WEB_APP_ID/exec
```

Replace `YOUR_WEB_APP_ID` with the actual URL from Step 3.

## Step 5: Test the Integration

1. Restart your development server
2. Submit a test contact form
3. Check your Google Sheet - the submission should appear automatically

## Data Stored

Each form submission will store:
- **Timestamp**: ISO format date/time of submission
- **Name**: Submitter's full name
- **Email**: Email address
- **Phone**: Phone number
- **Business Type**: Selected business type
- **Message**: The message content
- **Source**: URL where the form was submitted
- **Status**: Default "New" (can be manually updated to "Contacted" or "Closed")

## Troubleshooting

**Issue**: Submissions not appearing in Google Sheet
- **Solution**: Make sure the web app is deployed with "Anyone" access
- **Solution**: Check the browser console for errors
- **Solution**: Verify the URL in `.env.local` is correct

**Issue**: CORS errors
- **Solution**: The script uses `mode: 'no-cors'` which should handle this
- **Solution**: If issues persist, the email will still be sent even if sheet fails

**Issue**: Permission errors
- **Solution**: Make sure you're the owner of both the sheet and script
- **Solution**: Re-deploy the web app with correct permissions

## Optional: Add Email Notifications from Google Sheets

If you want additional email notifications from Google Sheets:

1. In the Apps Script, add this function:

```javascript
function sendEmailNotification(data) {
  MailApp.sendEmail({
    to: 'your-email@example.com',
    subject: 'New Contact Form Submission from ' + data.name,
    body: `
      New contact form submission:
      
      Name: ${data.name}
      Email: ${data.email}
      Phone: ${data.phone}
      Business Type: ${data.businessType}
      Message: ${data.message}
    `
  });
}
```

2. Update the `doPost` function to call it:

```javascript
// After appending row, add:
sendEmailNotification(data);
```
