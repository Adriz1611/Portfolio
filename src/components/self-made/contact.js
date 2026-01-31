import React from "react";
import BlurFade from "../magic-ui/blur-fade";
import { NeonGradientCard } from "../magic-ui/neon-gradient-card";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-background flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <BlurFade>
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
              <span className="text-2xl">💬</span>
              <span className="text-sm font-medium text-muted-foreground">
                Get In Touch
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
              Let's Create Something Amazing Together
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              I'm always excited to discuss new opportunities, collaborate on
              projects, or simply chat about technology and innovation.
            </p>
          </div>

          <NeonGradientCard className="border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden">
            <div className="p-12 text-center space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">
                  Ready to Start a Conversation?
                </h3>
                <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
                  Whether you have a project in mind, want to discuss
                  opportunities, or just want to connect, I'd love to hear from
                  you.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="https://www.linkedin.com/in/adrijbhadra/"
                  target="_blank"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200 min-w-[160px] font-medium"
                >
                  <div className="w-5 h-5">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <span>LinkedIn</span>
                </Link>

                <Link
                  href="mailto:adrijbhadra@gmail.com"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-3 rounded-xl bg-foreground hover:bg-foreground/90 text-background transition-all duration-200 min-w-[160px] font-medium"
                >
                  <div className="w-5 h-5">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span>Email</span>
                </Link>
              </div>

              <div className="pt-6 text-sm text-muted-foreground">
                I typically respond within 24 hours
              </div>
            </div>
          </NeonGradientCard>
        </BlurFade>
      </div>
    </div>
  );
};

export default Contact;
