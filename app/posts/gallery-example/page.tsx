import { PostGallery } from '@/components/PostGallery';
import { PostLayout } from '@/components/layouts/PostLayout';

export default function GalleryExamplePage() {
  const galleryItems = [
    {
      type: 'image' as const,
      src: '/contemporary-dance-performance.png',
      alt: 'Contemporary dance performance',
      caption: 'Regional Contemporary Dance Competition - First Place',
    },
    {
      type: 'youtube' as const,
      src: '',
      youtubeId: 'dQw4w9WgXcQ',
      alt: 'Dance performance video',
      caption: 'Solo Performance - State Championships',
    },
    {
      type: 'image' as const,
      src: '/ballet-dancer-practice.png',
      alt: 'Ballet practice session',
      caption: 'Daily practice session at the studio',
    },
    {
      type: 'image' as const,
      src: '/dramatic-theater-stage.png',
      alt: 'Theater performance',
      caption: 'Lead role in "Romeo and Juliet" - Spring Production',
    },
  ];

  return (
    <PostLayout type="gallery">
      <PostGallery
        items={galleryItems}
        title="Performance Highlights"
        description="A collection of my recent performances across dance and theater"
      />
    </PostLayout>
  );
}
