import CaseStudyBlock from "@/components/sections/CaseStudyBlock"
import ContactBlock from "@/components/sections/contactBlock"
import { CTABlock } from "@/components/sections/CTABlock"
import Footer from "@/components/sections/Footer"
import { GroupCard } from "@/components/sections/GroupCard"

import Hero from "@/components/sections/Hero"
import ProcessBlock from "@/components/sections/ProcessBlock"
import { ServicesBlock } from "@/components/sections/ServicesBlock"
import SubHeading from "@/components/sections/SubHeading"
import { SubHeading2 } from "@/components/sections/SubHeading2"
import { SubHeading3 } from "@/components/sections/SubHeading3"
import { SubHeading4 } from "@/components/sections/SubHeading4"
import { SubHeading5 } from "@/components/sections/SubHeading5"
import { SubHeading6 } from "@/components/sections/SubHeading6"
import TestimonialsBlock from "@/components/sections/TestimonialsBlock"
export default function Home() {
  return (<>
  <main>

    {/* Hero section */}
    <Hero/>
    {/* Sub Heading  */}
    <SubHeading/>
    {/* Services Block */}
    <ServicesBlock/>
    {/* CTA Blocks */}
    <CTABlock />
    {/* Sub Heading2  */}
    <SubHeading2/>
    {/* Case Studies */}
    <CaseStudyBlock/>
    {/* Sub Heading3  */}
    <SubHeading3/>
    {/* Process Block */}
    <ProcessBlock />
    {/* Sub Heading4  */}
    <SubHeading4/>
    {/* Group Card */}
    <GroupCard/>
    {/* Sub Heading5  */}
    <SubHeading5/>
    {/* Testimonials Block */}
    <TestimonialsBlock />
    {/* Sub Heading6  */}
    <SubHeading6/>
    {/* Contact Block */}
    <ContactBlock />
    {/* Fotter */}
    <Footer />

  </main>


     </>
  )
}