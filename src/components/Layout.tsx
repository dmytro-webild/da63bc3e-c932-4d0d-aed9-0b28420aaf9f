import FooterSimpleMedia from '@/components/sections/footer/FooterSimpleMedia';
import NavbarDropdown from '@/components/ui/NavbarDropdown';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Work",
    "href": "#work"
  },
  {
    "name": "Testimonials",
    "href": "#testimonials"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "Proof",
    "href": "#proof"
  },
  {
    "name": "Faq",
    "href": "#faq"
  },
  {
    "name": "Contact",
    "href": "#contact"
  }
];

  return (
    <StyleProvider buttonVariant="default" siteBackground="floatingGradient" heroBackground="cornerGlow">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarDropdown
      logo="Almē"
      ctaButton={{
        text: "Lets talk",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimpleMedia
      imageSrc="https://storage.googleapis.com/webild/default/no-image.jpg?id=8x9r20"
      brand="Almē Agency"
      columns={[
        {
          title: "Studio",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Portfolio",
              href: "#work",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "hello@alme.agency",
              href: "mailto:hello@alme.agency",
            },
            {
              label: "LinkedIn",
              href: "https://linkedin.com",
            },
          ],
        },
      ]}
      copyright="© 2024 Almē Agency. All rights reserved."
      links={[
        {
          label: "Privacy Policy",
          href: "#",
        },
        {
          label: "Terms of Service",
          href: "#",
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
