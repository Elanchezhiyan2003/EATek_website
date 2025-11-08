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
    <section className="bg-accent/30 px-8 py-12">
      <div>
        <h2 className="text-center text-4xl font-semibold">Community Testimonials</h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-sm text-muted-foreground">
          Hear from our community members about their transformative experiences with EAtek's programs and initiatives.
        </p>
      </div>
      <ContainerScroll className="container h-[300vh]">
        <div className="sticky left-0 top-0 h-svh w-full py-12">
          <CardsContainer className="mx-auto size-full h-[450px] w-[350px]">
            {TESTIMONIALS.map((testimonial, index) => (
              <CardTransformed
                arrayLength={TESTIMONIALS.length}
                key={testimonial.id}
                variant="light"
                index={index + 2}
                role="article"
                aria-labelledby={`card-${testimonial.id}-title`}
                aria-describedby={`card-${testimonial.id}-content`}
              >
                <div className="flex flex-col items-center space-y-4 text-center">
                  <ReviewStars
                    className="text-primary"
                    rating={testimonial.rating}
                  />
                  <div className="mx-auto w-4/5 text-lg">
                    <blockquote cite="#">"{testimonial.description}"</blockquote>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Avatar className="!size-12 border border-stone-300">
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
                  <div>
                    <span className="block text-lg font-semibold tracking-tight md:text-xl">
                      {testimonial.name}
                    </span>
                    <span className="block text-sm text-muted-foreground">
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
    </section>
  )
}
