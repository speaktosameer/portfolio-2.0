"use client"

import { useActionState, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { submitContactForm } from "@/app/actions"
import { Loader2, Send, CheckCircle, AlertCircle, User, Mail, MessageSquare, Briefcase } from "lucide-react"

export function EnhancedContactForm() {
  const [state, action, isPending] = useActionState(submitContactForm, null)
  const [selectedService, setSelectedService] = useState("")

  const services = [
    { id: "react", label: "React Development", color: "bg-blue-500" },
    { id: "uiux", label: "UI/UX Design", color: "bg-purple-500" },
    { id: "wordpress", label: "WordPress Development", color: "bg-green-500" },
    { id: "consulting", label: "Technical Consulting", color: "bg-orange-500" },
    { id: "other", label: "Other", color: "bg-gray-500" },
  ]

  return (
    <Card className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-blue-900/20 border-0 shadow-2xl overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      <CardHeader className="text-center pb-6">
        <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center justify-center gap-3">
          <Send className="h-8 w-8 text-blue-600" />
          Let's Start a Conversation
        </CardTitle>
        <CardDescription className="text-lg text-gray-600 dark:text-gray-300">
          Ready to bring your ideas to life? Fill out the form below and I'll get back to you within 24 hours.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-8">
        <form action={action} className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="firstName"
                className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300"
              >
                <User className="h-4 w-4" />
                First Name *
              </label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="John"
                required
                className="border-2 focus:border-blue-500 transition-all duration-300 hover:border-blue-300"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="lastName"
                className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300"
              >
                <User className="h-4 w-4" />
                Last Name *
              </label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Doe"
                required
                className="border-2 focus:border-blue-500 transition-all duration-300 hover:border-blue-300"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300"
            >
              <Mail className="h-4 w-4" />
              Email Address *
            </label>
            <Input
              id="email"
              name="email"
              placeholder="john@example.com"
              type="email"
              required
              className="border-2 focus:border-blue-500 transition-all duration-300 hover:border-blue-300"
            />
          </div>

          {/* Service Selection */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              <Briefcase className="h-4 w-4" />
              Service Interested In
            </label>
            <div className="flex flex-wrap gap-3">
              {services.map((service) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setSelectedService(service.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                    selectedService === service.id
                      ? `${service.color} text-white shadow-lg`
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  {service.label}
                </button>
              ))}
            </div>
            <input type="hidden" name="service" value={selectedService} />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="subject"
              className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300"
            >
              <MessageSquare className="h-4 w-4" />
              Project Subject *
            </label>
            <Input
              id="subject"
              name="subject"
              placeholder="E-commerce Website Development"
              required
              className="border-2 focus:border-blue-500 transition-all duration-300 hover:border-blue-300"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300"
            >
              <MessageSquare className="h-4 w-4" />
              Project Details *
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
              rows={6}
              required
              className="border-2 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={isPending}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {isPending ? (
              <>
                <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                Sending Your Message...
              </>
            ) : (
              <>
                <Send className="mr-3 h-6 w-6" />
                Send Message
              </>
            )}
          </Button>
        </form>

        {/* Success/Error Messages */}
        {state && (
          <div
            className={`p-6 rounded-xl border-l-4 ${
              state.success
                ? "bg-green-50 border-green-500 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                : "bg-red-50 border-red-500 text-red-800 dark:bg-red-900/20 dark:text-red-400"
            } animate-in slide-in-from-bottom duration-500`}
          >
            <div className="flex items-center gap-3">
              {state.success ? (
                <CheckCircle className="h-6 w-6 flex-shrink-0" />
              ) : (
                <AlertCircle className="h-6 w-6 flex-shrink-0" />
              )}
              <div>
                <p className="font-semibold text-lg">
                  {state.success ? "Message Sent Successfully!" : "Oops! Something went wrong"}
                </p>
                <p className="mt-1">{state.message}</p>
              </div>
            </div>
          </div>
        )}

        {/* Contact Information */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Prefer to reach out directly?</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <Mail className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">Email</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">sameer@example.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <MessageSquare className="h-5 w-5 text-green-600" />
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">Response Time</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
