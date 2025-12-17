import React from 'react';
import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'motion/react';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from "@/assets/altuni-labs-logo-white.png";

interface FooterLink {
  title: string;
  href: string;
  isExternal?: boolean;
}

interface FooterLinkGroup {
  label: string;
  links: FooterLink[];
}

type StickyFooterProps = React.ComponentProps<'footer'>;

export function StickyFooter({ className, ...props }: StickyFooterProps) {
  return (
    <footer
      className={cn('bg-black', className)}
      {...props}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="py-12 md:py-20">
          <AnimatedContainer delay={0.1}>
            <div className="flex flex-col gap-10">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                {/* Logo and tagline */}
                <div className="col-span-2 md:col-span-1">
                  <img src={logo} alt="AltUni Labs" className="h-8 md:h-10 mb-4" />
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    Making AI that makes humans better. Training humans who make AI better.
                  </p>
                  <div className="flex gap-3">
                    {socialLinks.map((link) => (
                      <a
                        key={link.title}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/50 hover:text-white transition-colors"
                      >
                        <link.icon className="size-5" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Link groups */}
                {footerLinkGroups.map((group, index) => (
                  <AnimatedContainer key={group.label} delay={0.15 + index * 0.05}>
                    <div className="flex flex-col gap-4">
                      <h4 className="text-white/40 text-xs font-medium uppercase tracking-wider">
                        {group.label}
                      </h4>
                      <ul className="flex flex-col gap-2">
                        {group.links.map((link) => (
                          <li key={link.title}>
                            {link.isExternal ? (
                              <a
                                href={link.href}
                                className="text-white/70 hover:text-white text-sm transition-colors"
                              >
                                {link.title}
                              </a>
                            ) : (
                              <Link
                                to={link.href}
                                className="text-white/70 hover:text-white text-sm transition-colors"
                              >
                                {link.title}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AnimatedContainer>
                ))}
              </div>

              {/* Copyright */}
              <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-white/40 text-sm">
                  © 2024 AltUni Labs. All rights reserved.
                </p>
                <p className="text-white/40 text-sm">
                  Powering the future of talent
                </p>
              </div>
            </div>
          </AnimatedContainer>
        </div>
      </div>
    </footer>
  );
}

const socialLinks = [
  { title: 'LinkedIn', href: 'https://www.linkedin.com/company/insideiim/', icon: LinkedinIcon },
  { title: 'Facebook', href: 'https://www.facebook.com/insideiim/', icon: FacebookIcon },
  { title: 'Instagram', href: 'https://www.instagram.com/insideiim/', icon: InstagramIcon },
  { title: 'Youtube', href: 'https://www.youtube.com/@InsideIIMKonversations', icon: YoutubeIcon },
];

const footerLinkGroups: FooterLinkGroup[] = [
  {
    label: 'About Us',
    links: [
      { title: 'Our Story', href: '/our-story' },
      { title: 'Our Platforms', href: '/our-platforms' },
      { title: 'Our Team', href: '/our-team' },
      { title: 'Our Investors', href: '/our-investors' },
    ],
  },
  {
    label: 'Solutions',
    links: [
      { title: 'For Universities', href: '/for-universities' },
      { title: 'For Corporates', href: '/for-corporates' },
    ],
  },
  {
    label: 'Partner',
    links: [
      { title: 'Partner With Us', href: '/partner-with-us' },
      { title: 'Contact Us', href: '/#contact', isExternal: true },
    ],
  },
];

type AnimatedContainerProps = React.ComponentProps<typeof motion.div> & {
  children?: React.ReactNode;
  delay?: number;
};

function AnimatedContainer({
  delay = 0.1,
  children,
  ...props
}: AnimatedContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      {...props}
    >
      {children}
    </motion.div>
  );
}