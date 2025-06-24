"use client"

import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { submitContactForm } from "@/app/actions"
import { Loader2 } from "lucide-react"

export function ContactForm() {
  const [state, action, isPending] = useActionState(submitContactForm, null)

  return (
    <Card className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Send Me a Message
        </CardTitle>
        <CardDescription className="text-lg">
          Fill out the form below and I'll get back to you within 24 hours.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={action} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                First Name *
              </label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="John"
                required
                className="border-2 focus:border-blue-500 transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Last Name *
              </label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Doe"
                required
                className="border-2 focus:border-blue-500 transition-colors"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Email Address *
            </label>
            <Input
              id="email"
              name="email"
              placeholder="john@example.com"
              type="email"
              required
              className="border-2 focus:border-blue-500 transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Subject *
            </label>
            <Input
              id="subject"
              name="subject"
              placeholder="Project Discussion"
              required
              className="border-2 focus:border-blue-500 transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Your Message *
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell me about your project..."
              rows={5}
              required
              className="border-2 focus:border-blue-500 transition-colors resize-none"
            />
          </div>
          <Button
            type="submit"
            disabled={isPending}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 text-lg transition-all duration-300 transform hover:scale-105"
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
        {state && (
          <div
            className={`mt-6 p-4 rounded-lg border-l-4 ${
              state.success
                ? "bg-green-50 border-green-500 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                : "bg-red-50 border-red-500 text-red-700 dark:bg-red-900/20 dark:text-red-400"
            }`}
          >
            <p className="font-medium">{state.message}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
