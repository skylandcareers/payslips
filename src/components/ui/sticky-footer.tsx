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
import logo from "@/assets/altuni-labs-logo-new.png";

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
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="py-12 md:py-20">
          <AnimatedContainer delay={0.1}>
            <div className="flex flex-col gap-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 justify-items-center md:justify-items-start">
                {/* Logo and tagline */}
                <div className="col-span-2 md:col-span-1 text-center md:text-left">
                  <img src={logo} alt="Document Generators" className="h-14 md:h-20 mb-4 mx-auto md:mx-0" />
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    Making AI that makes humans better. Training humans who make AI better.
                  </p>
                  <div className="flex gap-3 justify-center md:justify-start">
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
                    <div className="flex flex-col gap-4 text-center md:text-left">
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
                  © 2025 Document Generators. All rights reserved.
                </p>
                    <div className="flex items-center gap-4">
                  <div className="flex flex-col text-right sm:text-left">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                      Quality & Security
                    </span>
                    <span className="text-xs font-medium text-white dark:text-gray-200">
                      ISO Certified
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-8 px-1.5 flex items-center justify-center rounded bg-white/70 dark:bg-white/5 border border-red-100 dark:border-gray-800 group-hover:bg-white dark:group-hover:bg-white/10 group-hover:border-red-200 dark:group-hover:border-gray-700 transition-all">
                      <img
                        src="/uaf-9001-logo-AQC.jpg"
                        alt="ISO 9001:2015"
                        width={180}
                        height={72}
                        className="h-6 w-auto object-contain transition-all duration-300"
                      />
                    </div>
                    <div className="h-8 px-1.5 flex items-center justify-center rounded bg-white/70 dark:bg-white/5 border border-red-100 dark:border-gray-800 group-hover:bg-white dark:group-hover:bg-white/10 group-hover:border-red-200 dark:group-hover:border-gray-700 transition-all">
                      <img
                        src="/uaf-27001-logo-AQC.jpg"
                        alt="ISO 27001:2022"
                        width={180}
                        height={72}
                        className="h-6 w-auto object-contain transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>
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
      { title: 'Our People', href: '/our-team' },
      { title: 'Our Investors', href: '/our-investors' },
    ],
  },
  {
    label: 'Solutions',
    links: [
      { title: 'For Employers', href: '/for-employers' },
      { title: 'For Universities', href: '/for-universities' },
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