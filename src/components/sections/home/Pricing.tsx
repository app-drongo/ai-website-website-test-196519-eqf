'use client';

import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  notIncluded?: string[];
  popular?: boolean;
  ctaText: string;
  ctaHref: string;
}

interface PricingConfig {
  title: string;
  subtitle: string;
  billingToggle: {
    monthly: string;
    yearly: string;
    yearlyDiscount: string;
  };
  tiers: PricingTier[];
}

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const config: PricingConfig = {
    title: 'Simple, transparent pricing',
    subtitle: 'Choose the perfect plan for your needs. No hidden fees, no surprises.',
    billingToggle: {
      monthly: 'Monthly',
      yearly: 'Yearly',
      yearlyDiscount: 'Save 20%',
    },
    tiers: [
      {
        name: 'Starter',
        price: isYearly ? '$8' : '$10',
        period: isYearly ? '/month' : '/month',
        description: 'Perfect for individuals and small projects',
        features: [
          'Up to 5 projects',
          '10GB storage',
          'Basic support',
          'Core features',
          'Mobile app access',
        ],
        notIncluded: ['Advanced analytics', 'Priority support', 'Custom integrations'],
        ctaText: 'Get Started',
        ctaHref: '#signup',
      },
      {
        name: 'Professional',
        price: isYearly ? '$24' : '$30',
        period: isYearly ? '/month' : '/month',
        description: 'Ideal for growing teams and businesses',
        features: [
          'Unlimited projects',
          '100GB storage',
          'Priority support',
          'Advanced analytics',
          'Team collaboration',
          'API access',
          'Custom integrations',
        ],
        popular: true,
        ctaText: 'Start Free Trial',
        ctaHref: '#trial',
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        description: 'For large organizations with specific needs',
        features: [
          'Everything in Professional',
          'Unlimited storage',
          '24/7 dedicated support',
          'Custom development',
          'SLA guarantee',
          'Advanced security',
          'On-premise deployment',
        ],
        ctaText: 'Contact Sales',
        ctaHref: '#contact',
      },
    ],
  };

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-16">
          <div className="bg-muted rounded-lg p-1 flex items-center">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                !isYearly
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <span data-editable="monthlyLabel">{config.billingToggle.monthly}</span>
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                isYearly
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <span data-editable="yearlyLabel">{config.billingToggle.yearly}</span>
              <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                <span data-editable="yearlyDiscount">{config.billingToggle.yearlyDiscount}</span>
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {config.tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-2xl border transition-all duration-300 hover:shadow-lg ${
                tier.popular
                  ? 'border-primary shadow-lg scale-105'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Tier Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    <span data-editable={`tier${index}Name`}>{tier.name}</span>
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    <span data-editable={`tier${index}Description`}>{tier.description}</span>
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-foreground">
                      <span data-editable={`tier${index}Price`}>{tier.price}</span>
                    </span>
                    {tier.period && (
                      <span className="text-muted-foreground ml-1">
                        <span data-editable={`tier${index}Period`}>{tier.period}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">
                        <span data-editable={`tier${index}Feature${featureIndex}`}>{feature}</span>
                      </span>
                    </div>
                  ))}
                  {tier.notIncluded?.map((feature, featureIndex) => (
                    <div key={`not-${featureIndex}`} className="flex items-start gap-3">
                      <X className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <span data-editable={`tier${index}NotIncluded${featureIndex}`}>
                          {feature}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => {
                    const element = document.querySelector(tier.ctaHref);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  data-editable-href={`tier${index}CtaHref`}
                  data-href={tier.ctaHref}
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                    tier.popular
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border hover:border-primary/50'
                  }`}
                >
                  <span data-editable={`tier${index}CtaText`}>{tier.ctaText}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            <span data-editable="bottomText">Need a custom solution?</span>
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            data-editable-href="bottomCtaHref"
            data-href="#contact"
            className="text-primary hover:text-primary/80 font-medium transition-colors duration-200"
          >
            <span data-editable="bottomCtaText">Contact our sales team</span>
          </button>
        </div>
      </div>
    </section>
  );
}
