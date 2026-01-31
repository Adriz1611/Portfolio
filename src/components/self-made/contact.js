"use client";
import React, { memo } from "react";
import BlurFade from "../magic-ui/blur-fade";
import { NeonGradientCard } from "../magic-ui/neon-gradient-card";
import { NumberTicker } from "../magic-ui/number-ticker";
import { MessageCircle, Sparkles } from "lucide-react";

const Contact = memo(function Contact() {
  return (
    <div className="relative min-h-fit bg-gradient-to-br from-background via-muted/10 to-background flex items-center justify-center overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 py-12">
        <BlurFade>
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
              <MessageCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">
                Get In Touch
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Let's Create Something
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
              I'm always excited to discuss new opportunities, collaborate on
              projects, or simply chat about technology and innovation.
            </p>
          </div>

          <NeonGradientCard
            className="border-2 border-border/50 bg-card/40 backdrop-blur-xl overflow-hidden shadow-2xl"
            borderRadius={24}
            borderSize={2}
          >
            <div className="relative p-8 md:p-12">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-2xl" />

              <div className="relative space-y-8">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center gap-2 mb-2">
                    <Sparkles className="w-6 h-6 text-amber-500 animate-pulse" />
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      Ready to Start a Conversation?
                    </h3>
                    <Sparkles className="w-6 h-6 text-amber-500 animate-pulse" />
                  </div>
                  <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed text-base md:text-lg">
                    Whether you have a project in mind, want to discuss
                    opportunities, or just want to connect, I'd love to hear
                    from you.
                  </p>
                </div>

                {/* Response time badge */}
                <div className="flex justify-center pt-6">
                  <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-muted/50 border border-border/50 backdrop-blur-sm">
                    <div className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">
                      Usually responds within{" "}
                      <span className="text-foreground font-semibold">
                        24 hours
                      </span>
                    </span>
                  </div>
                </div>

                {/* Additional info */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6 border-t border-border/30">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">
                      <NumberTicker value={100} />%
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Response Rate
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">
                      Open
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      To Collaborate
                    </div>
                  </div>
                  <div className="text-center col-span-2 md:col-span-1">
                    <div className="text-2xl font-bold text-foreground">
                      <NumberTicker value={24} />
                      /7
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Available Online
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NeonGradientCard>
        </BlurFade>
      </div>
    </div>
  );
});

export default Contact;
