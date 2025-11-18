'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

interface HeroConfig {
  title: string;
  subtitle: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  primaryCtaHref: string;
  secondaryCtaHref: string;
  features: string[];
  videoThumbnail?: string;
}

export default function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const config: HeroConfig = {
    title: 'Build Your Next Project',
    subtitle: 'Website Test Platform',
    description:
      'Create stunning websites with our powerful testing platform. Fast, reliable, and designed for modern development workflows.',
    primaryCta: 'Get Started Free',
    secondaryCta: 'Watch Demo',
    primaryCtaHref: '#pricing',
    secondaryCtaHref: '#demo',
    features: ['Lightning fast deployment', 'Advanced testing tools', '24/7 support included'],
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handlePrimaryCta = () => {
    const element = document.querySelector(config.primaryCtaHref);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSecondaryCta = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className={`inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span data-editable="subtitle">{config.subtitle}</span>
          </div>

          {/* Main heading */}
          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span data-editable="title">{config.title}</span>
          </h1>

          {/* Description */}
          <p
            className={`text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span data-editable="description">{config.description}</span>
          </p>

          {/* Feature list */}
          <div
            className={`flex flex-wrap justify-center gap-6 mb-10 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {config.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span data-editable={`feature${index + 1}`}>{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button
              onClick={handlePrimaryCta}
              data-editable-href="primaryCtaHref"
              data-href={config.primaryCtaHref}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              <span data-editable="primaryCta">{config.primaryCta}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            <button
              onClick={handleSecondaryCta}
              data-editable-href="secondaryCtaHref"
              data-href={config.secondaryCtaHref}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold text-lg hover:bg-secondary/80 transition-all duration-200 hover:scale-105 border border-border"
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span data-editable="secondaryCta">{config.secondaryCta}</span>
            </button>
          </div>

          {/* Demo video placeholder */}
          <div
            className={`relative max-w-4xl mx-auto transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="relative aspect-video bg-card rounded-2xl border border-border overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              {!isVideoPlaying ? (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                  <button
                    onClick={handleSecondaryCta}
                    className="group flex items-center justify-center w-20 h-20 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-200 hover:scale-110 shadow-lg hover:shadow-xl"
                  >
                    <Play className="w-8 h-8 ml-1 group-hover:scale-110 transition-transform duration-200" />
                  </button>
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-muted">
                  <div className="text-center">
                    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-muted-foreground">Loading demo...</p>
                  </div>
                </div>
              )}

              {/* Video overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-primary rounded-full animate-pulse opacity-60" />
      <div className="absolute top-1/3 right-16 w-3 h-3 bg-secondary rounded-full animate-pulse opacity-40 delay-1000" />
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-accent rounded-full animate-pulse opacity-50 delay-500" />
    </section>
  );
}
