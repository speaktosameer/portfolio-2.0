"use server"

export async function submitContactForm(formData: FormData) {
  // Simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string
  const service = formData.get("service") as string

  // Here you would typically send an email or save to database
  console.log("Contact form submission:", {
    firstName,
    lastName,
    email,
    subject,
    message,
    service,
    timestamp: new Date().toISOString(),
  })

  // Simulate success/error
  if (!email || !message || !firstName || !lastName) {
    return {
      success: false,
      message: "Please fill in all required fields to proceed.",
    }
  }

  // Simulate email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    }
  }

  return {
    success: true,
    message: `Thank you ${firstName}! Your message about "${subject}" has been sent successfully. I'll review your ${service ? service.toLowerCase() : "project"} requirements and get back to you within 24 hours.`,
  }
}
