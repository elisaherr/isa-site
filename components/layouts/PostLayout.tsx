"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import Link from "next/link"
import type { ReactNode } from "react"

interface PostLayoutProps {
  children: ReactNode
  title?: string
  subtitle?: string
  date?: string
  readTime?: string
  tags?: string[]
  type: "gallery" | "article"
}

export function PostLayout({ children, title, subtitle, date, readTime, tags = [], type }: PostLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6 hover:bg-primary/10 transition-colors" asChild>
          <Link href="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to home
          </Link>
        </Button>

        {/* Post Header - Only show for article type or when title exists */}
        {(type === "article" || title) && (
          <Card className="mb-8 border-0 shadow-lg bg-card/80 backdrop-blur-sm">
            <CardHeader className="text-center space-y-4">
              {title && (
                <CardTitle className="font-sans text-3xl md:text-4xl lg:text-5xl text-primary">{title}</CardTitle>
              )}
              {subtitle && <p className="text-lg md:text-xl text-muted-foreground font-medium">{subtitle}</p>}

              {/* Meta Information */}
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                {date && (
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {date}
                  </div>
                )}
                {readTime && (
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {readTime}
                  </div>
                )}
              </div>

              {/* Tags */}
              {tags.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2">
                  {tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </CardHeader>
          </Card>
        )}

        {/* Post Content */}
        <div className={type === "gallery" ? "space-y-6" : "prose prose-lg max-w-none"}>{children}</div>
      </div>
    </div>
  )
}
