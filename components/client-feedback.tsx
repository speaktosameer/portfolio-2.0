"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Star, MessageSquare, User, Mail } from "lucide-react"
import { useActionState } from "react"

// Mock Google OAuth login (in production, use NextAuth.js)
function useGoogleAuth() {
  const [user, setUser] = useState<{ name: string; email: string; picture: string } | null>(null)

  const signIn = () => {
    // Mock sign in - in production, implement actual Google OAuth
    setUser({
      name: "John Doe",
      email: "john.doe@example.com",
      picture: "/placeholder.svg?height=40&width=40",
    })
  }

  const signOut = () => {
    setUser(null)
  }

  return { user, signIn, signOut }
}

async function submitFeedback(prevState: any, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const rating = formData.get("rating") as string
  const feedback = formData.get("feedback") as string

  if (!rating || !feedback) {
    return {
      success: false,
      message: "Please provide both rating and feedback.",
    }
  }

  // In production, save to database
  console.log("Feedback submitted:", { rating, feedback })

  return {
    success: true,
    message: "Thank you for your feedback! It helps me improve my services.",
  }
}

export function ClientFeedback() {
  const { user, signIn, signOut } = useGoogleAuth()
  const [selectedRating, setSelectedRating] = useState(0)
  const [state, action, isPending] = useActionState(submitFeedback, null)

  const feedbacks = [
    {
      name: "Sarah Johnson",
      email: "sarah@techstart.com",
      rating: 5,
      feedback:
        "Exceptional work on our React application. Sameer's attention to detail and code quality exceeded our expectations.",
      date: "2024-01-15",
      project: "E-commerce Platform",
    },
    {
      name: "Michael Brown",
      email: "michael@designco.com",
      rating: 5,
      feedback:
        "Outstanding UI/UX design work. Really understood our brand and delivered designs that perfectly captured our vision.",
      date: "2024-01-10",
      project: "Brand Identity Design",
    },
    {
      name: "Emily Davis",
      email: "emily@localbistro.com",
      rating: 5,
      feedback: "Our WordPress site is now faster, more secure, and looks amazing. Highly recommend Sameer's services!",
      date: "2024-01-05",
      project: "Restaurant Website",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Client Feedback
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your feedback helps me improve and deliver better services. Share your experience working with me.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Feedback Form */}
          <Card className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-blue-900/20 border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-2">
                <MessageSquare className="h-6 w-6 text-blue-600" />
                Leave Feedback
              </CardTitle>
              <CardDescription className="text-lg">
                {user ? `Welcome back, ${user.name}!` : "Sign in with Google to leave feedback"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {!user ? (
                <div className="text-center py-8">
                  <Button
                    onClick={signIn}
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-red-500 hover:from-blue-600 hover:to-red-600 text-white font-semibold px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Sign in with Google
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    Secure authentication to prevent spam and ensure authentic feedback
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg border">
                    <img src={user.picture || "/placeholder.svg"} alt={user.name} className="w-10 h-10 rounded-full" />
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                    <Button variant="outline" size="sm" onClick={signOut} className="ml-auto">
                      Sign Out
                    </Button>
                  </div>

                  <form action={action} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-3">Rating *</label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setSelectedRating(star)}
                            className="transition-all duration-200 hover:scale-110"
                          >
                            <Star
                              className={`h-8 w-8 ${
                                star <= selectedRating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300 hover:text-yellow-400"
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                      <input type="hidden" name="rating" value={selectedRating} />
                    </div>

                    <div>
                      <label htmlFor="feedback" className="block text-sm font-medium mb-2">
                        Your Feedback *
                      </label>
                      <Textarea
                        id="feedback"
                        name="feedback"
                        placeholder="Share your experience working with me..."
                        rows={5}
                        required
                        className="border-2 focus:border-blue-500 transition-colors resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isPending || selectedRating === 0}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 text-lg transition-all duration-300 transform hover:scale-105"
                    >
                      {isPending ? "Submitting..." : "Submit Feedback"}
                    </Button>
                  </form>

                  {state && (
                    <div
                      className={`p-4 rounded-lg border-l-4 ${
                        state.success
                          ? "bg-green-50 border-green-500 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                          : "bg-red-50 border-red-500 text-red-700 dark:bg-red-900/20 dark:text-red-400"
                      }`}
                    >
                      <p className="font-medium">{state.message}</p>
                    </div>
                  )}
                </>
              )}
            </CardContent>
          </Card>

          {/* Recent Feedback */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Recent Feedback</h3>
            {feedbacks.map((feedback, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-gray-800 border-0 shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">{feedback.name}</p>
                        <p className="text-sm text-muted-foreground">{feedback.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(feedback.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {feedback.project}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">"{feedback.feedback}"</p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(feedback.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
