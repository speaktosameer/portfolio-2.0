"use server"

import { Resend } from "resend"

// Initialize Resend (you'll need to add RESEND_API_KEY to your environment variables)
const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitContactForm(formData: FormData) {
  // Simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string
  const service = formData.get("service") as string

  // Validate required fields
  if (!email || !message || !firstName || !lastName) {
    return {
      success: false,
      message: "Please fill in all required fields to proceed.",
    }
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    }
  }

  try {
    // Send email using Resend
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Service:</strong> ${service || "Not specified"}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
      <hr>
      <p><small>Submitted on: ${new Date().toLocaleString()}</small></p>
    `

    await resend.emails.send({
      from: "Portfolio Contact <noreply@yourdomain.com>", // Replace with your verified domain
      to: ["speaktosameernp@gmail.com"],
      subject: `New Contact: ${subject}`,
      html: emailContent,
      replyTo: email,
    })

    // Log for debugging (remove in production)
    console.log("Contact form submission:", {
      firstName,
      lastName,
      email,
      subject,
      message,
      service,
      timestamp: new Date().toISOString(),
    })

    return {
      success: true,
      message: `Thank you ${firstName}! Your message about "${subject}" has been sent successfully. I'll review your ${service ? service.toLowerCase() : "project"} requirements and get back to you within 24 hours.`,
    }
  } catch (error) {
    console.error("Error sending email:", error)

    // Fallback: still log the submission even if email fails
    console.log("Contact form submission (email failed):", {
      firstName,
      lastName,
      email,
      subject,
      message,
      service,
      timestamp: new Date().toISOString(),
    })

    return {
      success: true,
      message: `Thank you ${firstName}! Your message has been received. I'll get back to you within 24 hours.`,
    }
  }
}
