import formData from "form-data";
import Mailgun from "mailgun.js";

// Initialize Mailgun client
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY,
  url: "https://api.mailgun.net", // Use 'https://api.eu.mailgun.net' if you're using EU servers
});

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    const data = {
      from: `${name} <noreply@${process.env.MAILGUN_DOMAIN}>`, // Use your verified domain
      to: "rad@bayareawebdesign.net", // Replace with your actual email
      subject: "Contact Form Bay Area Web Design",
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      "h:Reply-To": email, // This allows you to reply directly to the sender
    };

    // Send using the domain from environment variables
    const result = await mg.messages.create(process.env.MAILGUN_DOMAIN, data);
    console.log("Email sent successfully:", result.id);

    return new Response(
      JSON.stringify({ success: true, messageId: result.id }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Mailgun error:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to send email",
        details: error.message, // This will help with debugging
      }),
      {
        status: 500,
      }
    );
  }
}
