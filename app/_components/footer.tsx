'use client'
import React, { ReactNode } from "react";
import Image from "next/image";
import {
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaChevronRight,
  FaSitemap,
} from "react-icons/fa6";
import Link from "next/link";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

type ButtonSize = "sm" | "md" | "lg" | undefined;

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  size: ButtonSize;
}

function SocialLink({ href, icon, size }: SocialLinkProps) {
  return (
    <Link href={href} target="_blank">
      <Button variant={"ghost"} size={"icon"}>
        {icon}
      </Button>
    </Link>
  );
}

interface FooterLinkProps {
  text: string;
}

function FooterLink({ text }: FooterLinkProps) {
  return (
    <p className="group flex cursor-pointer items-center justify-center gap-1">
      <span
        className="hidden group-hover:block group-hover:animate-spin"
        style={{ animationIterationCount: 1, animationDuration: "0.3s" }}
      >
        <FaChevronRight size={12} className="text-primary" />
      </span>
      {text}
    </p>
  );
}

export default function Footer() {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  const departments = [
    "Home",
    "About",
    "Testimonials",
    "Blogs",
    "FAQ",
    "Contact Us"
  ];

  const institucionals = [
    "Computer Repair",
    "Mobile Repair",
    "Dummy text",
    "Dummy text",
    "Dummy text",
    "Dummy text",
    "Dummy text"
  ];

  const helps = [
    "535 Griswold St",
    "(+1) 873-687-2628",
    "dummyText@gmaiil.com"
  ];

  return (
    <footer className="mx-auto w-full cursor-default items-center justify-center   bg-gray-200 pt-8 shadow-xl dark:bg-[#2b2b2b] md:px-0">
      <section className="flex flex-col items-center justify-around gap-y-4 px-4 pb-8 shadow-xl md:flex-row md:gap-y-0">
        <p className="text-center text-sm">
          &copy; {currentYear} TaskeNow - all rights reserved.
        </p>
      </section>

      <div className=" px-4 py-6 dark:bg-transparent">
        <section className="mx-auto flex flex-col items-center justify-center gap-3 text-center text-xs md:flex-row">
          <Link href="/">
          <div className="flex w-full flex-col gap-1">
              <Image
                src="/bg.png"
                alt="TaskeNow"
                height={0}
                width={0}
                sizes="100vw"
                priority
                className="h-auto w-full  w-80  object-cover"
              />
            </div>
          </Link>
          <div className="flex w-full flex-col gap-1">
            <h3 className="text-base font-medium uppercase">Quick links</h3>
            {departments.map((department, index) => (
              <FooterLink key={index} text={department} />
            ))}
          </div>

          <div className="flex w-full flex-col gap-1">
            <h3 className="text-base font-medium uppercase">Services</h3>
            {institucionals.map((institucional, index) => (
              <FooterLink key={index} text={institucional} />
            ))}
          </div>

          <div className="flex w-full flex-col gap-1">
            <h3 className="text-base font-medium uppercase">Contact</h3>
            {helps.map((help, index) => (
              <FooterLink key={index} text={help} />
            ))}
          </div>
        </section>

      </div>
    </footer>
  );
}
