import Image from "next/image";
import React from "react";

function Testimonials() {
  return (
    <section id="testimonials" className="relative max-w-7xl mx-auto mb-3 mt-32">
        <div className="p-4 text-4xl break-words bg-linear-to-r from-white to-slate-500 inline-block text-transparent bg-clip-text">
          Testomonials
        </div>
        <div className="grid grid-cols-2 border-light">
            <div className="flex items-center justify-start gap-4 p-6 mt-5">
                <div className="shrink-0">
                    <Image
                        alt=""
                        src="/mary-ann-soliguen.jpg"
                        width={900}
                        height={900}
                        className="size-12 shrink-0 rounded-full bg-gray-950/5 outline -outline-offset-1 outline-gray-950/10 dark:outline-white/10"
                    />
                </div>
                <div className="flex flex-col truncate">
                    <p className="truncate text-xl font-medium text-gray-950 dark:text-white">
                        Mary-Ann Soliguen, CPA, CTT
                    </p>
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                        Corporate Secretary, Rizal Modern Materials
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-end gap-4 p-6 mt-5 text-white text-sm">
                <p className="">
                    We are Satisfied with your work. You were very Reachable, and you really customized our website in accordance with our preferences. Thank you! Keep it going.
                </p>
            </div>
        </div>
        <div className="grid grid-cols-2 border-light">
            <div className="flex items-center justify-start gap-4 p-6 mt-5">
                <div className="shrink-0">
                    <Image
                        alt=""
                        src="/wis-garcia.jpeg"
                        width={900}
                        height={900}
                        className="size-12 shrink-0 rounded-full bg-gray-950/5 outline -outline-offset-1 outline-gray-950/10 dark:outline-white/10"
                    />
                </div>
                <div className="flex flex-col truncate">
                    <p className="truncate text-xl font-medium text-gray-950 dark:text-white">
                        Wis Garcia
                    </p>
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                        Digital Marketing Specialist, fäm Properties
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-end gap-4 p-6 mt-5 text-white text-sm">
                <p className="">
                    An incredible asset to our team! His positive attitude and dedication made a real difference. I truly appreciated his support and innovative ideas!
                </p>
            </div>
        </div>
    </section>
  );
}

export default Testimonials;
