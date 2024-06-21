import TitleSection from "@/components/landing-page/title-section";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Banner from "../../public/Banner.png";
import Banner2 from "../../public/Banner2.png";
import CheckIcon from "../../public/icons/check.svg";
import { CLIENTS, PRICING_CARDS, PRICING_PLANS, USERS } from "@/lib/constants";
import { v4 as uuidv4 } from "uuid"; // Import uuidv4 for generating unique keys
import { randomUUID } from "crypto";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import CustomCard from "@/components/landing-page/custom-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import Footer from "@/components/landing-page/footer";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <section className="overflow-hidden px-4 sm:px-6 mt-10 sm:flex sm:flex-col gap-4 md:justify-center md:items-center">
        <TitleSection
          pill="⭐ Your Finances, Perfected"
          title="Effortless Tracking, For Smarter Financial Management"
        />
        <div className="bg-white p-[2px] mt-6 rounded-xl bg-gradient-to-r from-emerald-500 to-rose-500 sm:w-[300px]">
          <Link href="/basic-plan">
          <Button
            variant={"secondary"}
            className="w-full rounded-xl p-6 text-2xl bg-background cursor-pointer"
          >
            Get Started
          </Button>
          </Link>
        </div>
        <div className="sm:w-full w-[750px] flex justify-center items-center relative sm:ml-0 ml-[-50px]">
          <Image src={Banner} alt="Application Banner" />
        </div>
      </section>
      <section className="relative">
        <div
          className="
      overflow-hidden
      flex
      after:content['']
      after:dark:from-brand-dark
      after:to-transparent
      after:from-background
      after:bg-gradient-to-l
      after:right-0
      after:bottom-0
      after:top-0
      after:w-20
      after:z-10
      after:absolute

      before:content['']
      before:dark:from-brand-dark
      before:to-transparent
      before:from-background
      before:bg-gradient-to-r
      before:left-0
      before:top-0
      before:bottom-0
      before:w-20
      before:z-10
      before:absolute
    "
        >
          {[...Array(2)].map(
            (
              _,
              index // Use index here
            ) => (
              <div
                key={uuidv4()} // Use uuidv4() to generate unique keys
                className="flex flex-nowrap animate-slide"
              >
                {CLIENTS.map((client) => (
                  <div
                    key={client.alt}
                    className="relative w-[200px] m-20 shrink-0 flex items-center"
                  >
                    <Image
                      src={client.logo}
                      alt={client.alt}
                      width={200}
                      height={100}
                      className="object-contain max-w-none"
                    />
                  </div>
                ))}
              </div>
            )
          )}
        </div>
      </section>
      <section id="features" className="px-4 sm:px-6 flex justify-center items-center flex-col relative">
        <div className="w-[30%] blur-[120px] rounded-full h-32 absolute bg-emerald-800 -z-10 top-22" />
        <TitleSection
          title="Keep track of all your finances in one place"
          subheading="Capture your incomes, expenses in a structured and organized manner"
          pill="Features"
        />
        <div className="mt-10 max-w-[450px] flex justify-center items-center relative sm:ml-0 rounded-2xl border-8 border-emerald-300 border-opacity-10">
          <Image src={Banner2} alt="Banner" className="rounded-2xl" />
        </div>
      </section>
      <section id="testimonials" className="relative">
        <div className="w-full blur-[120px] rounded-full h-32 absolute bg-emerald-800 -z-10 top-56" />
        <div className="mt-20 px-4 sm:px-6 flex flex-col overflow-x-hidden overflow-visible">
          <TitleSection
            title="Trusted by all"
            subheading="Join hundreds of satisfied users with personal and professional productivity needs"
            pill="Testimonials"
          />
          {[...Array(2)].map((arr, index) => (
            <div
              key={randomUUID()}
              className={twMerge(
                clsx("mt-10 flex flex-nowrap gap-6 self-start", {
                  "flex-row-reverse": index === 1,
                  "animate-[slide_250s_linear_infinite]": true,
                  "animate-[slide_250s_linear_infinite_reverse]": index === 1,
                  "ml-[100vw]": index === 1,
                }),
                "hover:paused"
              )}
            >
              {USERS.map((testimonial, index) => (
                <CustomCard
                  key={testimonial.name}
                  className="w-[500px] shrink-0 rounded-xl dark:bg-gradient-to-t dark:from-border dark:to-background"
                  cardHeader={
                    <div className="flex items-center gap-4 ">
                      <Avatar>
                        <AvatarImage src={`/avatars/${index + 1}.png`} />
                        <AvatarFallback>AV</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-foreground">
                          {testimonial.name}
                        </CardTitle>
                        <CardDescription className="dark:text-white/60">
                          {testimonial.name.toLocaleLowerCase()}
                        </CardDescription>
                      </div>
                    </div>
                  }
                  cardContent={
                    <p className="dark:text-white/60">{testimonial.message}</p>
                  }
                ></CustomCard>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section id="pricing" className="mt-20 px-4 sm:px-6 ">
        <TitleSection
          title="The Perfect Plan For You"
          subheading="Experience all benefits of the plartform. Select a plan and take your financial management to new heights"
          pill="Pricing"
        />
        <div className="flex flex-col-reverse sm:flex-row gap-4 justify-center sm:items-stretch items-center mt-10">
          {PRICING_CARDS.map((card) => (
            <CustomCard
              key={card.planType}
              className={clsx(
                "w-[300px] rounded-2xl dark:bg-black/40 backdrop-blur-3xl relative",
                {
                  "border-emerald-500/70":
                    card.planType === PRICING_PLANS.proplan,
                }
              )}
              cardHeader={
                <CardTitle className="text-2xl font-semibold">
                  {card.planType === PRICING_PLANS.proplan && (
                    <>
                      <div className="hidden dark:block w-full blur-[120px] rounded-full h-32 absolute bg-emerald-500/80 -z-10 top-0" />
                    </>
                  )}
                  {card.planType}
                </CardTitle>
              }
              cardContent={
                <CardContent className="p-0">
                  <span className="font-normal text-3xl">${card.price}</span>
                  {+card.price > 0 ? (
                    <span className="dark:text-white/60 ml-1">
                      (one time payment)
                    </span>
                  ) : (
                    ""
                  )}
                  <p className="dark:text-white/80 mt-2" >{card.description}</p>
                  <Link href={card.planType === PRICING_PLANS.proplan ? "/pro-plan" : "/basic-plan"}>
                  <Button variant={"default"} className="whitespace-nowrap w-full mt-4">
                    {card.planType === PRICING_PLANS.proplan ? "Go Pro" : "Get Basic"}
                  </Button>
                  </Link>
                </CardContent>
              }
              cardFooter={
                <ul className="font-normal flex mb-2 flex-col gap-4">
                  <small>{card.highlightFeature}</small>
                  {card.freatures.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Image src={CheckIcon} alt="Check Icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
              }
            ></CustomCard>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
