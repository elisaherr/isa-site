import { Card, CardContent } from "@/components/ui/card"
import { ReactNode } from "react"

interface PostArticleProps {
  featuredImage?: string
  featuredImageAlt?: string
  children: ReactNode
}

export function PostArticle({ featuredImage, featuredImageAlt, children }: PostArticleProps) {
  return (
    <div className="space-y-8">
      {/* Featured Image */}
      {featuredImage && (
        <Card className="overflow-hidden border-0 shadow-lg">
          <div className="aspect-video md:aspect-[21/9] overflow-hidden">
            <img
              src={featuredImage || "/placeholder.svg"}
              alt={featuredImageAlt || "Featured image"}
              className="w-full h-full object-cover"
            />
          </div>
        </Card>
      )}

      {/* Article Content */}
      <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
        <CardContent className="p-8 md:p-12">
          <div
            className="prose prose-lg max-w-none prose-headings:font-sans prose-headings:text-primary prose-p:text-foreground prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-blockquote:border-primary prose-blockquote:text-muted-foreground"
          >
            {children}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
