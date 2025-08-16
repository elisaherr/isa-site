'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import {
  ArrowRight,
  Award,
  Brain,
  Guitar,
  Mail,
  Microscope,
  Music,
  Palette,
  RectangleGoggles,
  Theater,
  Trophy,
  Users,
} from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between">
          <div className="font-heading text-primary text-xl font-bold">Elisa Sara Herr</div>
          <nav className="hidden items-center space-x-6 md:flex">
            <a href="#dance" className="hover:text-accent text-sm font-medium transition-colors">
              Dance
            </a>
            <a href="#theater" className="hover:text-accent text-sm font-medium transition-colors">
              Theater
            </a>
            <a href="#music" className="hover:text-accent text-sm font-medium transition-colors">
              Music
            </a>
            <a href="#art" className="hover:text-accent text-sm font-medium transition-colors">
              Art
            </a>
            <a href="#research" className="hover:text-accent text-sm font-medium transition-colors">
              Research
            </a>
            <a href="#contact" className="hover:text-accent text-sm font-medium transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20">
        <div className="from-primary/15 via-background absolute inset-0 bg-gradient-to-br to-rose-500/10"></div>
        <div className="container relative z-10 mx-auto text-center">
          <div className="mx-auto max-w-4xl">
            <h1 className="font-heading from-primary to-accent mb-6 bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
              Dancer. Artist. Researcher.
            </h1>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed md:text-xl">
              Competitive dancer exploring the intersection of movement, art, and neuroscience.
              Passionate about therapeutic applications of dance in spinal and cognitive
              rehabilitation.
            </p>
            <div className="mb-8 flex flex-wrap justify-center gap-4">
              <Badge
                variant="secondary"
                className="bg-primary/10 hover:bg-primary/20 px-4 py-2 transition-colors"
              >
                <Award className="mr-2 h-4 w-4" />
                National Champion
              </Badge>
              <Badge
                variant="secondary"
                className="bg-rose-500/10 px-4 py-2 transition-colors hover:bg-rose-500/20"
              >
                <Theater className="mr-2 h-4 w-4" />
                Regina George
              </Badge>
              <Badge
                variant="secondary"
                className="bg-purple-500/10 px-4 py-2 transition-colors hover:bg-purple-500/20"
              >
                <Music className="mr-2 h-4 w-4" />
                Vocalist & Bassist
              </Badge>
              <Badge
                variant="secondary"
                className="bg-accent/10 hover:bg-accent/20 px-4 py-2 transition-colors"
              >
                <Palette className="mr-2 h-4 w-4" />
                Visual Artist
              </Badge>
              <Badge
                variant="secondary"
                className="bg-teal-500/10 px-4 py-2 transition-colors hover:bg-teal-500/20"
              >
                <Brain className="mr-2 h-4 w-4" />
                NHS Founder
              </Badge>
            </div>
            <Button size="lg" className="group transition-transform hover:scale-105">
              Explore My Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-muted/20 px-4 py-16">
        <div className="container mx-auto">
          <div className="flex justify-center gap-8 md:gap-12">
            <div className="group">
              <div className="from-primary/20 to-accent/20 h-24 w-24 overflow-hidden rounded-full bg-gradient-to-br transition-transform hover:scale-105 md:h-32 md:w-32">
                <img
                  src="/placeholder.svg?height=128&width=128"
                  alt="Performance headshot"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-muted-foreground mt-2 text-center text-sm">Performance</p>
            </div>
            <div className="group">
              <div className="h-24 w-24 overflow-hidden rounded-full bg-gradient-to-br from-rose-500/20 to-purple-500/20 transition-transform hover:scale-105 md:h-32 md:w-32">
                <img
                  src="/placeholder.svg?height=128&width=128"
                  alt="Theater headshot"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-muted-foreground mt-2 text-center text-sm">Theater</p>
            </div>
            <div className="group">
              <div className="to-primary/20 h-24 w-24 overflow-hidden rounded-full bg-gradient-to-br from-teal-500/20 transition-transform hover:scale-105 md:h-32 md:w-32">
                <img
                  src="/placeholder.svg?height=128&width=128"
                  alt="Research headshot"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-muted-foreground mt-2 text-center text-sm">Research</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dance Section */}
      <section id="dance" className="px-4 py-20">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-primary mb-4 text-3xl font-bold md:text-4xl">Dance</h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              National champion and competitive dancer at Inspiration Dance Academy, exploring
              therapeutic movement and spinal rehabilitation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-primary/20 group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="from-primary/20 to-accent/20 relative aspect-video bg-gradient-to-br">
                <img
                  src="/competitive-dance.png"
                  alt="Competitive dance performance"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="transition-transform hover:scale-110"
                  >
                    View Performance
                  </Button>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-primary text-lg">The Dance Awards 2025</CardTitle>
                <CardDescription>
                  Convention Class Scholarship & Solo Competition Palladium Award
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-accent/20 group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="from-accent/20 relative aspect-video bg-gradient-to-br to-rose-500/20">
                <div className="from-accent/30 flex h-full w-full items-center justify-center bg-gradient-to-br to-rose-500/30">
                  <Trophy className="text-accent h-16 w-16" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="transition-transform hover:scale-110"
                  >
                    View Awards
                  </Button>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-accent text-lg">Regional Championships</CardTitle>
                <CardDescription>
                  KAR Dance Competition Title Winner, Edge Talent Judge's Award & Scholarship
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group overflow-hidden border-teal-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="to-primary/20 relative aspect-video bg-gradient-to-br from-teal-500/20">
                <div className="to-primary/30 flex h-full w-full items-center justify-center bg-gradient-to-br from-teal-500/30">
                  <Users className="h-16 w-16 text-teal-500" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="transition-transform hover:scale-110"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg text-teal-500">IDA Dance Teacher</CardTitle>
                <CardDescription>
                  Teaching Hip-2-Flip classes while developing therapeutic movement protocols
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Theater Section */}
      <section id="theater" className="bg-rose-500/5 px-4 py-20">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="font-heading mb-4 text-3xl font-bold text-rose-500 md:text-4xl">
              Theater
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              From Regina George to Jasmine, bringing complex characters to life through acting and
              storytelling.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="group overflow-hidden border-rose-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative aspect-video bg-gradient-to-br from-rose-500/20 to-purple-500/20">
                <img
                  src="/dramatic-theater-performance.png"
                  alt="Theater performance"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="transition-transform hover:scale-110"
                  >
                    Watch Clips
                  </Button>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg text-rose-500">Mean Girls - Regina George</CardTitle>
                <CardDescription>
                  Lead role in 2025 production, showcasing complex character development
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group overflow-hidden border-purple-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative aspect-video bg-gradient-to-br from-purple-500/20 to-orange-500/20">
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-purple-500/30 to-orange-500/30">
                  <Theater className="h-16 w-16 text-purple-500" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="transition-transform hover:scale-110"
                  >
                    View Portfolio
                  </Button>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg text-purple-500">Leading Roles</CardTitle>
                <CardDescription>
                  Jasmine (Aladdin), Morticia (Addams Family), Olivia (Twelfth Night), Abigail
                  (Crucible)
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group overflow-hidden border-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative aspect-video bg-gradient-to-br from-orange-500/20 to-purple-500/20">
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-orange-500/30 to-purple-500/30">
                  <Users className="h-16 w-16 text-orange-500" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="transition-transform hover:scale-110"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg text-orange-500">Director & Co-Director</CardTitle>
                <CardDescription>
                  Leading theater productions and mentoring fellow performers
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="music" className="px-4 py-20">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="font-heading mb-4 text-3xl font-bold text-purple-500 md:text-4xl">
              Music
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Vocalist and bassist performing in school bands and choir, bringing musical
              storytelling to life.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="group overflow-hidden border-purple-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative aspect-video bg-gradient-to-br from-purple-500/20 to-orange-500/20">
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-purple-500/30 to-orange-500/30">
                  <div className="flex gap-4">
                    <Music className="h-12 w-12 text-purple-500" />
                    <Guitar className="h-12 w-12 text-orange-500" />
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="transition-transform hover:scale-110"
                  >
                    Listen
                  </Button>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg text-purple-500">PRISMS Bands</CardTitle>
                <CardDescription>
                  Bass guitarist in Wallflower and Afterthought bands, plus choir performances
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group overflow-hidden border-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative aspect-video bg-gradient-to-br from-orange-500/20 to-purple-500/20">
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-orange-500/30 to-purple-500/30">
                  <Music className="h-16 w-16 text-orange-500" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="transition-transform hover:scale-110"
                  >
                    View Performances
                  </Button>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg text-orange-500">Vocal Performances</CardTitle>
                <CardDescription>
                  Solo and ensemble singing in theater productions and school choir
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Art Section */}
      <section id="art" className="px-4 py-20">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-accent mb-4 text-3xl font-bold md:text-4xl">Art</h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Visual expressions inspired by movement, emotion, and the beauty of human resilience.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Dialog>
              <Card className="border-accent/20 group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="from-accent/20 to-primary/20 relative aspect-square bg-gradient-to-br">
                  <img
                    src="/vibrant-abstract.png"
                    alt="Abstract art piece"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                    <DialogTrigger asChild>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="transition-transform hover:scale-110"
                      >
                        View Artwork
                      </Button>
                    </DialogTrigger>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-accent text-lg">Movement in Color Series</CardTitle>
                  <CardDescription>
                    Abstract paintings capturing the essence of dance movements
                  </CardDescription>
                </CardHeader>
              </Card>
              <DialogContent className="max-h-[90vh] max-w-4xl">
                <div className="aspect-square max-h-[70vh] overflow-hidden rounded-lg">
                  <img
                    src="/vibrant-abstract.png"
                    alt="Movement in Color Series"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="pt-4">
                  <h3 className="font-heading text-accent mb-2 text-2xl font-bold">
                    Movement in Color Series
                  </h3>
                  <p className="text-muted-foreground">
                    Abstract paintings capturing the essence of dance movements through vibrant
                    colors and flowing forms.
                  </p>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <Card className="group overflow-hidden border-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-square bg-gradient-to-br from-orange-500/20 to-rose-500/20">
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-orange-500/30 to-rose-500/30">
                    <Palette className="h-16 w-16 text-orange-500" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                    <DialogTrigger asChild>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="transition-transform hover:scale-110"
                      >
                        View Gallery
                      </Button>
                    </DialogTrigger>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg text-orange-500">Digital Illustrations</CardTitle>
                  <CardDescription>
                    Character designs and concept art for theater productions
                  </CardDescription>
                </CardHeader>
              </Card>
              <DialogContent className="max-h-[90vh] max-w-4xl">
                <div className="aspect-square max-h-[70vh] overflow-hidden rounded-lg">
                  <img
                    src="/placeholder.svg?height=600&width=600"
                    alt="Digital Illustrations"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="pt-4">
                  <h3 className="font-heading mb-2 text-2xl font-bold text-orange-500">
                    Digital Illustrations
                  </h3>
                  <p className="text-muted-foreground">
                    Character designs and concept art created for theater productions, bringing
                    characters to life through digital artistry.
                  </p>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <Card className="group overflow-hidden border-teal-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="to-accent/20 relative aspect-square bg-gradient-to-br from-teal-500/20">
                  <div className="to-accent/30 flex h-full w-full items-center justify-center bg-gradient-to-br from-teal-500/30">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-8 w-8 rounded bg-teal-500"></div>
                      <div className="bg-accent h-8 w-8 rounded"></div>
                      <div className="bg-accent h-8 w-8 rounded"></div>
                      <div className="h-8 w-8 rounded bg-teal-500"></div>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                    <DialogTrigger asChild>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="transition-transform hover:scale-110"
                      >
                        View Process
                      </Button>
                    </DialogTrigger>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg text-teal-500">Mixed Media</CardTitle>
                  <CardDescription>
                    Experimental pieces combining traditional and digital techniques
                  </CardDescription>
                </CardHeader>
              </Card>
              <DialogContent className="max-h-[90vh] max-w-4xl">
                <div className="aspect-square max-h-[70vh] overflow-hidden rounded-lg">
                  <img
                    src="/placeholder.svg?height=600&width=600"
                    alt="Mixed Media"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="pt-4">
                  <h3 className="font-heading mb-2 text-2xl font-bold text-teal-500">
                    Mixed Media
                  </h3>
                  <p className="text-muted-foreground">
                    Experimental pieces combining traditional and digital techniques, exploring the
                    intersection of analog and digital artistic expression.
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="bg-teal-500/5 px-4 py-20">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="font-heading mb-4 text-3xl font-bold text-teal-500 md:text-4xl">
              Research & Innovation
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Exploring biomedical engineering applications in spinal and cognitive rehabilitation,
              as well as studies on the relationship between social media and attention.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <CardHeader>
                <div className="mb-2 flex items-center gap-3">
                  <RectangleGoggles className="h-6 w-6 text-orange-500" />
                  <CardTitle className="text-orange-500">
                    Movement and Cognitive Rehabilitation
                  </CardTitle>
                </div>
                <CardDescription>
                  Creating VR applications to facilitate both motor and cognitive recovery in spinal
                  cord injury patients.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Steven's Institute MOCORE Lab</span>
                    <Badge className="border-orange-500/20 bg-orange-500/5 text-orange-500">
                      Mentee
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Focus</span>
                    <span className="text-muted-foreground text-sm">Cognitive rehabilitation</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4 w-full border-orange-500/20 bg-transparent hover:border-orange-500/40 hover:bg-orange-500/10"
                    asChild
                  >
                    <a href="/posts/research-article">
                      <Microscope className="mr-2 h-4 w-4" />
                      View research
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-teal-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <CardHeader>
                <div className="mb-2 flex items-center gap-3">
                  <Brain className="h-6 w-6 text-teal-500" />
                  <CardTitle className="text-teal-500">Neuroscience Research</CardTitle>
                </div>
                <CardDescription>
                  Studying the effect of social media on different aspects of teenager's attention
                  spans.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Research Status</span>
                    <Badge className="border-teal-500/20 bg-teal-500/10 text-teal-500">
                      Active
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Focus</span>
                    <span className="text-muted-foreground text-sm">Attention and memory</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="mt-4 w-full border-teal-500/20 bg-transparent hover:border-teal-500/40 hover:bg-teal-500/10"
                  >
                    <a href="/posts/research-article">
                      <Microscope className="mr-2 h-4 w-4" />
                      View research
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-orange-500/20">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Trophy className="w-6 h-6 text-orange-500" />
                  <CardTitle className="text-orange-500">STEM Competitions</CardTitle>
                </div>
                <CardDescription>
                  MIT Zero Robotics National Winner, ACSL All Stars qualification, FTC and FLL robotics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Recognition</span>
                    <Badge className="bg-orange-500/10 text-orange-500 border-orange-500/20">National</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Focus</span>
                    <span className="text-sm text-muted-foreground">Robotics & CS</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-4 bg-transparent hover:bg-orange-500/10 border-orange-500/20 hover:border-orange-500/40"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Projects
                  </Button>
                </div>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </section>

      {/* Performance Timeline */}
      <section id="performances" className="px-4 py-20">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="font-heading mb-4 text-3xl font-bold md:text-4xl">
              Performance Highlights
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Key performances and achievements across dance and theater.
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-8">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="bg-primary h-3 w-3 rounded-full"></div>
                <div className="bg-border h-full w-px"></div>
              </div>
              <div className="flex-1 pb-8">
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-primary text-sm font-medium">2024</span>
                  <Badge variant="outline">Dance</Badge>
                </div>
                <h3 className="font-heading mb-1 text-lg font-semibold">
                  National Dance Competition - 1st Place
                </h3>
                <p className="text-muted-foreground text-sm">
                  Contemporary solo performance, "Healing Through Movement"
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="bg-accent h-3 w-3 rounded-full"></div>
                <div className="bg-border h-full w-px"></div>
              </div>
              <div className="flex-1 pb-8">
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-accent text-sm font-medium">2024</span>
                  <Badge variant="outline">Theater</Badge>
                </div>
                <h3 className="font-heading mb-1 text-lg font-semibold">
                  Hamilton - Eliza Schuyler
                </h3>
                <p className="text-muted-foreground text-sm">
                  Lead role in school's spring musical production
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="bg-primary h-3 w-3 rounded-full"></div>
                <div className="bg-border h-full w-px"></div>
              </div>
              <div className="flex-1 pb-8">
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-primary text-sm font-medium">2023</span>
                  <Badge variant="outline">Research</Badge>
                </div>
                <h3 className="font-heading mb-1 text-lg font-semibold">
                  Regional Science Fair - Gold Medal
                </h3>
                <p className="text-muted-foreground text-sm">
                  Research on dance therapy for spinal rehabilitation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-muted/30 px-4 py-20">
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading mb-4 text-3xl font-bold md:text-4xl">Let's Connect</h2>
            <p className="text-muted-foreground mb-8">
              Interested in collaboration, performances, or discussing research opportunities? I'd
              love to hear from you.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" className="group transition-transform hover:scale-105">
                <Mail className="mr-2 h-4 w-4" />
                Send Message
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent transition-transform hover:scale-105"
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t px-4 py-8">
        <div className="text-muted-foreground container mx-auto text-center text-sm">
          <p>&copy; 2024 Elisa Sara Herr. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
