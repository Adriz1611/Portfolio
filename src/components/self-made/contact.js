import React from "react";
import BlurFade from "../magic-ui/blur-fade";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="grid items-center justify-center gap-4 px-4 pb-32 text-center md:px-6 w-full py-12">
      <BlurFade>
        <div className="space-y-3">
          <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
            Contact
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Get in Touch
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Want to chat? Just shoot me a dm{" "}
            <Link
              href={`https://www.linkedin.com/in/adrijbhadra/`}
              className="text-blue-500 hover:underline"
              target="_blank"
            >
              with a direct question on Linkedin / Mail
            </Link>{" "}
            and I&apos;ll respond whenever I can. I will ignore all soliciting.
          </p>
        </div>
      </BlurFade>
    </div>
  );
};

export default Contact;
