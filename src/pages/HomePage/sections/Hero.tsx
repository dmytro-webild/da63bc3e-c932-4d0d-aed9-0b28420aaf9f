// Created by add_section_from_catalog (HeroBrand).

import React from 'react';
import HeroBrand from '@/components/sections/hero/HeroBrand';

export default function HeroSection(): React.JSX.Element {
  return (
    <div data-webild-section="hero" data-section="hero" id="hero">
      <HeroBrand
        primaryButton={{"text":"Let's talk about your project","href":"#contact"}}
        description="Everyone can make videos. Not everyone has the eye. Almē Agency creates social and video content for luxury hotels and brands."
        brand="ALMĒ AGENCY"
        secondaryButton={{"text":"Our Approach","href":"#about"}}
        imageSrc="https://storage.googleapis.com/webild/users/user_3K3cTDwgNJ0swIfdJnpRtXZIbFT/uploaded-1791725802520-31l5y7mr.png"
        textAnimation="fade-blur"
      />
    </div>
  );
}
