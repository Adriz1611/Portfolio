import React from "react";
import BlurFade from "../magic-ui/blur-fade";
import { NeonGradientCard } from "../magic-ui/neon-gradient-card";
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
                        Reach Out
                    </h2>
                    <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Interested in a conversation? Feel free to send me a direct message{" "}
                        <Link
                            href={`https://www.linkedin.com/in/adrijbhadra/`}
                            className="text-blue-500 hover:underline"
                            target="_blank"
                        >
                            on LinkedIn or via email
                        </Link>{" "}
                        and I will respond at my earliest convenience.
                    </p>
                    <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Things that are not really necessary as they don't mean very much
                    </p>
                    <NeonGradientCard >
                    <div className="flex justify-center">
                        <Link href="/reallyuselessthings.jpeg" target="_blank">
                            <img src="/reallyuselessthings.jpeg" alt="Arrow pointing to link" className="max-w-36 max-h-36" />
                        </Link>
                    </div>
                    </NeonGradientCard>
                </div>
            </BlurFade>
        </div>
    );
};

export default Contact;
