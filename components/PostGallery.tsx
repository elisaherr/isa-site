import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, ExternalLink } from "lucide-react"

interface MediaItem {
  type: "image" | "youtube"
  src: string
  alt?: string
  caption?: string
  youtubeId?: string
}

interface PostGalleryProps {
  items: MediaItem[]
  title?: string
  description?: string
}

export function PostGallery({ items, title, description }: PostGalleryProps) {
  const getYouTubeEmbedUrl = (videoId: string) => {
    return `https://www.youtube.com/embed/${videoId}`
  }

  const getYouTubeThumbnail = (videoId: string) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  }

  return (
    <div className="space-y-6">
      {title && (
        <div className="text-center space-y-2">
          <h2 className="font-sans text-2xl md:text-3xl text-primary">{title}</h2>
          {description && <p className="text-muted-foreground text-lg">{description}</p>}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <Card
            key={index}
            className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="relative aspect-video overflow-hidden">
              {item.type === "image" ? (
                <img
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt || `Gallery image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="relative w-full h-full">
                  <img
                    src={getYouTubeThumbnail(item.youtubeId!) || "/placeholder.svg"}
                    alt={item.alt || `Video thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                    <div className="bg-red-600 rounded-full p-3 group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-white fill-white" />
                    </div>
                  </div>
                  <Badge className="absolute top-2 right-2 bg-red-600 hover:bg-red-700">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    YouTube
                  </Badge>
                </div>
              )}
            </div>

            {item.caption && (
              <div className="p-4">
                <p className="text-sm text-muted-foreground text-center">{item.caption}</p>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}
