import { MailService } from '@sendgrid/mail';

interface ContactFormEmail {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactFormEmail(data: ContactFormEmail): Promise<boolean> {
  // If SendGrid is not configured, log the message and return true
  if (!process.env.SENDGRID_API_KEY) {
    console.log('SendGrid not configured, skipping email send. Would have sent:', {
      to: 'tiffini@mjvoice.com',
      from: 'no-reply@mjvoice.com',
      subject: `New Contact Form Submission: ${data.subject}`,
      data
    });
    return true;
  }

  try {
    const mailService = new MailService();
    mailService.setApiKey(process.env.SENDGRID_API_KEY);

    await mailService.send({
      to: 'tiffini@mjvoice.com',
      from: 'no-reply@mjvoice.com', // This should be a verified sender in SendGrid
      subject: `New Contact Form Submission: ${data.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${data.name} (${data.email})</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
    });
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}