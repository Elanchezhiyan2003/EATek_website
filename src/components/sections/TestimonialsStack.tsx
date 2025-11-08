"use client"

import * as React from "react"
import {
  CardTransformed,
  CardsContainer,
  ContainerScroll,
  ReviewStars,
} from "@/components/ui/animated-cards-stack"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const TESTIMONIALS = [
  {
    id: "testimonial-1",
    name: "Arjun Patel",
    profession: "ELAN 20 Alumni",
    company: "Software Engineer at TechCorp",
    rating: 5,
    description:
      "The ELAN fellowship transformed my understanding of technology. The mentorship and real-world projects prepared me for my career in ways I never expected.",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60",
  },
  {
    id: "testimonial-2",
    name: "Priya Sharma",
    profession: "Startup Founder",
    company: "CEO at InnovateLab",
    rating: 5,
    description:
      "EAtek's approach to bridging education and technology is revolutionary. Their programs don't just teach skills - they inspire innovation.",
    avatarUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60",
  },
  {
    id: "testimonial-3",
    name: "Rahul Kumar",
    profession: "Design Student",
    company: "BuildVerse Participant",
    rating: 5,
    description:
      "The hands-on experience and mentorship I received helped me land my dream internship. EAtek truly cares about student success.",
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60",
  },
  {
    id: "testimonial-4",
    name: "Ananya Reddy",
    profession: "Full Stack Developer",
    company: "Tech Innovator",
    rating: 4.5,
    description:
      "Working with EAtek was a game-changer for my career. Their expertise and professionalism exceeded my expectations.",
    avatarUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=60",
  },
]

export function TestimonialsStack() {
  return (
   <section className="bg-accent/30 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
  <div className="max-w-7xl mx-auto text-center">
    {/* Heading Section */}
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 sm:mb-5">
      Community Testimonials
    </h2>
    <p className="mx-auto max-w-2xl text-sm sm:text-base text-muted-foreground mb-10 sm:mb-12 px-4 sm:px-0">
      Hear from our community members about their transformative experiences
      with <span className="font-semibold text-primary">EAtek’s</span> programs
      and initiatives.
    </p>
  </div>

  {/* Testimonials Scroll Section */}
  <div className="max-w-6xl mx-auto relative">
    <ContainerScroll className="container h-[300vh]">
      <div className="sticky top-10 flex justify-center items-center h-[100vh] sm:h-[80vh]">
        <CardsContainer className="flex justify-center items-center mx-auto w-[90%] sm:w-[340px] md:w-[360px] lg:w-[400px] h-[380px] sm:h-[420px] md:h-[450px]">
          {TESTIMONIALS.map((testimonial, index) => (
            <CardTransformed
              key={testimonial.id}
              variant="light"
              index={index + 2}
              arrayLength={TESTIMONIALS.length}
              role="article"
              aria-labelledby={`card-${testimonial.id}-title`}
              aria-describedby={`card-${testimonial.id}-content`}
            >
              {/* Review Content */}
              <div className="flex flex-col items-center text-center space-y-4 sm:space-y-5">
                <ReviewStars
                  className="text-primary scale-90 sm:scale-100"
                  rating={testimonial.rating}
                />
                <blockquote
                  id={`card-${testimonial.id}-content`}
                  className="text-base sm:text-lg italic text-muted-foreground px-3 sm:px-0"
                >
                  “{testimonial.description}”
                </blockquote>
              </div>

              {/* Avatar + Details */}
              <div className="flex items-center justify-center gap-3 sm:gap-4 mt-5">
                <Avatar className="!size-10 sm:!size-12 border border-stone-300">
                  <AvatarImage
                    src={testimonial.avatarUrl}
                    alt={`Portrait of ${testimonial.name}`}
                  />
                  <AvatarFallback>
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <span
                    id={`card-${testimonial.id}-title`}
                    className="block text-base sm:text-lg font-semibold tracking-tight md:text-xl"
                  >
                    {testimonial.name}
                  </span>
                  <span className="block text-xs sm:text-sm text-muted-foreground">
                    {testimonial.profession}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </CardTransformed>
          ))}
        </CardsContainer>
      </div>
    </ContainerScroll>
  </div>
</section>

  )
}
