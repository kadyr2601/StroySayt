import type { Metadata } from "next"
import AboutHero from "@/components/about-hero"
import AboutHistory from "@/components/about-history"
import AboutValues from "@/components/about-values"
import AboutTeam from "@/components/about-team"
import AboutAchievements from "@/components/about-achievements"
import AboutPartners from "@/components/about-partners"
import AboutCta from "@/components/about-cta"

export const metadata: Metadata = {
  title: "About Us | Construction Company",
  description: "Learn about our history, values, team, and achievements in the construction industry.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AboutHero />
      <AboutHistory />
      <AboutValues />
      <AboutTeam />
      <AboutAchievements />
      <AboutPartners />
      <AboutCta />
    </div>
  )
}
