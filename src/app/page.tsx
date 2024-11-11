import CaseStudyBlock from "@/components/sections/CaseStudyBlock"
import { CTABlock } from "@/components/sections/CTABlock"
import Hero from "@/components/sections/Hero"
import ProcessBlock from "@/components/sections/ProcessBlock"
import { ServicesBlock } from "@/components/sections/ServicesBlock"
import SubHeading from "@/components/sections/SubHeading"
import { SubHeading2 } from "@/components/sections/SubHeading2"
import { SubHeading3 } from "@/components/sections/SubHeading3"
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
  </main>


     </>
  )
}