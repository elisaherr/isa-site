import { PostArticle } from '@/components/PostArticle';
import { PostLayout } from '@/components/layouts/PostLayout';

export default function ResearchArticlePage() {
  return (
    <PostLayout
      type="article"
      title="Dance as Neurological Therapy"
      subtitle="Exploring the intersection of movement, healing, and cognitive rehabilitation"
      date="March 15, 2024"
      readTime="8 min read"
      tags={['Research', 'Neuroscience', 'Dance Therapy', 'Rehabilitation']}
    >
      <PostArticle
        featuredImage="/dance-therapy-session.png"
        featuredImageAlt="Dance therapy session"
      >
        <>
          <p>
            Dance injuries, particularly those affecting the spine and cognitive function, represent
            a significant challenge in the performing arts community. Through my research, I've been
            investigating the intersection of neurological rehabilitation and dance therapy.
          </p>

          <h2>The Connection Between Movement and Healing</h2>

          <p>
            Recent studies have shown that structured dance movements can significantly improve
            cognitive function in patients recovering from neurological injuries. The combination of
            physical coordination, memory recall, and emotional expression creates a unique
            therapeutic environment.
          </p>

          <blockquote>
            "Dance is not just movement—it's a language that speaks directly to our neurological
            pathways, creating new connections and strengthening existing ones."
          </blockquote>

          <h3>Key Findings</h3>

          <p>My preliminary research has identified several important factors:</p>

          <ul>
            <li>
              <strong>Rhythm and Timing:</strong> Consistent rhythmic patterns help rebuild neural
              pathways
            </li>
            <li>
              <strong>Spatial Awareness:</strong> Dance movements improve proprioception and balance
            </li>
            <li>
              <strong>Emotional Processing:</strong> Creative expression aids in psychological
              recovery
            </li>
          </ul>

          <p>
            This research has personal significance as well—understanding injury prevention and
            recovery helps me maintain my own performance career while contributing to the broader
            dance and medical communities.
          </p>

          <h3>Future Directions</h3>

          <p>
            Moving forward, I plan to collaborate with local rehabilitation centers to develop
            structured dance therapy programs. The goal is to create evidence-based protocols that
            can be implemented in clinical settings.
          </p>
        </>
      </PostArticle>
    </PostLayout>
  );
}
