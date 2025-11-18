import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const footerData = {
    company: {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    legal: {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
      ],
    },
    copyright: '© 2024 Website Test. All rights reserved.',
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              <span data-editable="companyTitle">{footerData.company.title}</span>
            </h3>
            <ul className="space-y-3">
              {footerData.company.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    data-editable-href={`companyLink${index}Href`}
                    data-href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <span data-editable={`companyLink${index}Label`}>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              <span data-editable="legalTitle">{footerData.legal.title}</span>
            </h3>
            <ul className="space-y-3">
              {footerData.legal.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    data-editable-href={`legalLink${index}Href`}
                    data-href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <span data-editable={`legalLink${index}Label`}>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Spacer for larger screens */}
          <div className="hidden lg:block"></div>
          <div className="hidden lg:block"></div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              <span data-editable="copyright">{footerData.copyright}</span>
            </p>

            {/* Back to top button */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center space-x-1 group"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <svg
                className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
