# Gmail Setup Instructions for Contact Form

Your contact form is already fully implemented and ready to receive messages at **malekfazilkhan07@gmail.com**. 

## Current Status
✅ **Email functionality is coded and ready**
✅ **Gmail recipient email is configured: malekfazilkhan07@gmail.com**
✅ **Professional email template is implemented**
✅ **Form validation and error handling is complete**

## Required: Gmail App Password Setup

To enable email sending, you need to set up a Gmail App Password:

### Step 1: Enable 2-Factor Authentication
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Factor Authentication if not already enabled

### Step 2: Generate App Password
1. Go to [App Passwords](https://support.google.com/accounts/answer/185833)
2. Select "Mail" as the app
3. Select "Other (custom name)" as the device
4. Enter "Portfolio Contact Form" as the name
5. Click "Generate"
6. **Copy the 16-character password** (example: `abcd efgh ijkl mnop`)

### Step 3: Set Environment Variable
After getting your App Password, use this tool command:

```
DevServerControl -> set_env_variable -> ["GMAIL_APP_PASSWORD", "your-16-character-password-here"]
```

Replace `your-16-character-password-here` with the actual password from step 2.

### Step 4: Restart Server
After setting the password, restart the dev server using DevServerControl.

## What Happens When Working:
1. ✉️ Client fills out contact form on your portfolio
2. 📤 Form data is validated and sent to your server
3. 📧 Professional email is sent to **malekfazilkhan07@gmail.com**
4. ✅ Client sees success message
5. 📱 You receive notification in Gmail with client's message and contact info

## Email Template Features:
- 🎨 Professional design with your brand colors
- 📋 Client's name, email, and message clearly displayed
- 📅 Timestamp of when message was sent
- 💬 Reply-to address set to client's email for easy response
- 🔒 Secure HTML sanitization to prevent spam/malicious content

## Test the Setup:
Once configured, visit your portfolio contact form and send a test message to verify everything works correctly.
