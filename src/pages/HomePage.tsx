import AboutTextSplit from '@/components/sections/about/AboutTextSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeaturesBentoGrid from '@/components/sections/features/FeaturesBentoGrid';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import TestimonialQuoteCards from '@/components/sections/testimonial/TestimonialQuoteCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroOverlay
      tag="EHL Alumni Studio"
      title="Everyone can make videos. Not everyone has the eye."
      description="Almē Agency creates social and video content for luxury hotels and brands. We studied hospitality before we picked up a camera—so we know what works before we film."
      primaryButton={{
        text: "Lets talk about your project",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Our Approach",
        href: "#about",
      }}
      imageSrc="https://storage.googleapis.com/webild/default/no-image.jpg?id=87lkq6"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutTextSplit
      title="Authenticity in Luxury"
      descriptions={[
        "Founded by EHL graduates, we combine academic hospitality expertise with a razor-sharp creative eye. We understand the unspoken expectations of affluent guests, allowing us to capture luxury as it truly feels.",
        "We move beyond cookie-cutter agency approaches. Our content is human-made, strategy-led, and meticulously crafted to resonate with the high-net-worth audiences you serve.",
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="work" data-section="work">
    <SectionErrorBoundary name="work">
          <FeaturesBentoGrid
      tag="Our Portfolio"
      title="Curated Excellence"
      description="From boutique hotels to heritage brands."
      features={[
        {
          title: "Luxury Hospitality",
          description: "Storytelling that highlights the elegance of guest experiences.",
          imageSrc: "https://storage.googleapis.com/webild/users/user_3K3cTDwgNJ0swIfdJnpRtXZIbFT/uploaded-1791725802520-31l5y7mr.png",
        },
        {
          title: "Lifestyle Brands",
          description: "High-converting content for discerning lifestyle consumers.",
          imageSrc: "https://storage.googleapis.com/webild/default/no-image.jpg?id=vsurpm",
        },
        {
          title: "Behind-the-scenes",
          description: "Authentic content that builds genuine brand trust.",
          imageSrc: "https://storage.googleapis.com/webild/default/no-image.jpg?id=ttdr9s",
        },
        {
          title: "Paid Social Strategy",
          description: "Results-driven assets optimized for affluent engagement.",
          imageSrc: "https://storage.googleapis.com/webild/default/no-image.jpg?id=sr7ala",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialQuoteCards
      tag="Client Voices"
      title="Proven by Experience"
      description="See why market leaders choose Almē."
      testimonials={[
        {
          name: "Sarah Miller",
          role: "Hotel GM",
          quote: "The eye for detail is unmatched.",
          imageSrc: "https://storage.googleapis.com/webild/default/no-image.jpg?id=t5tbed",
        },
        {
          name: "James Chen",
          role: "Brand Director",
          quote: "They finally understand what luxury really means.",
          imageSrc: "https://storage.googleapis.com/webild/default/no-image.jpg?id=g8o627",
        },
        {
          name: "Elise Dubois",
          role: "Hotel Owner",
          quote: "Professional, strategic, and incredibly creative.",
          imageSrc: "https://storage.googleapis.com/webild/default/no-image.jpg?id=aj9ttm",
        },
        {
          name: "Markus Weber",
          role: "Marketing Head",
          quote: "The only team that truly gets it.",
          imageSrc: "https://storage.googleapis.com/webild/default/no-image.jpg?id=niarhy",
        },
        {
          name: "Chloe Vance",
          role: "Brand Communications",
          quote: "Refreshing content that converts.",
          imageSrc: "https://storage.googleapis.com/webild/default/no-image.jpg?id=cfbqu0",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="proof" data-section="proof">
    <SectionErrorBoundary name="proof">
          <SocialProofMarquee
      tag="Partnerships"
      title="Aligned with Global Leaders"
      names={[
        "LVMH",
        "Four Seasons",
        "Aman",
        "Peninsula",
        "Chanel",
        "Rolex",
        "Hermès",
      ]}
      textAnimation="fade"
      description="Trusted by the world's most prestigious names."
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSplitMedia
      tag="Expertise"
      title="Frequently Asked Questions"
      description="Understanding how we work."
      items={[
        {
          question: "What is your approach to luxury?",
          answer: "We focus on authenticity and human-made aesthetics rather than over-produced corporate content.",
        },
        {
          question: "Do you work with global teams?",
          answer: "Yes, our team is equipped to operate seamlessly across European and APAC regions.",
        },
        {
          question: "Why hire Almē?",
          answer: "Our EHL background means we have industry insight no other studio possesses.",
        },
      ]}
      imageSrc="https://storage.googleapis.com/webild/default/no-image.jpg?id=twtafp"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Start Your Project"
      text="Ready to redefine your visual presence?"
      primaryButton={{
        text: "Contact Almē Agency",
        href: "mailto:hello@alme.agency",
      }}
      secondaryButton={{
        text: "See Portfolio",
        href: "#work",
      }}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
