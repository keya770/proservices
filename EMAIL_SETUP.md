# Email Configuration Setup

All form submissions (Contact Form and Service Enquiry Form) are configured to send emails to: **keyamehra770@gmail.com**

## Setup Instructions

### Option 1: Gmail SMTP (Recommended for Testing)

1. **Enable 2-Factor Authentication** on your Gmail account
   - Go to: https://myaccount.google.com/security
   - Enable 2-Step Verification

2. **Generate an App Password**
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Enter "HCT Services Website" as the name
   - Copy the generated 16-character password

3. **Create `.env.local` file** in the root directory:
   ```
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-16-character-app-password
   ```

4. **Restart your development server** after adding the environment variables

### Option 2: Custom SMTP Server

Create `.env.local` file with:
```
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@example.com
SMTP_PASS=your-password
```

## Testing

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the Contact page or any Service page

3. Fill out and submit a form

4. Check the email inbox at **keyamehra770@gmail.com**

5. You should receive a formatted email with all the form data

## Troubleshooting

- **"Authentication failed"**: Check that your Gmail app password is correct
- **"Connection timeout"**: Verify your SMTP settings
- **"Email not received"**: Check spam folder, verify recipient email is correct
- **Console errors**: Check server logs for detailed error messages

## Production Deployment

For production, make sure to:
1. Set environment variables in your hosting platform (Vercel, Netlify, etc.)
2. Use a reliable email service (SendGrid, Mailgun, AWS SES, etc.)
3. Update SMTP credentials in production environment variables

