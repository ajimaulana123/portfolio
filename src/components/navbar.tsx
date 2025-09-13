'use client'

import { useState } from "react";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isSocialMenuOpen, setIsSocialMenuOpen] = useState(false);

  const toggleSocialMenu = () => {
    setIsSocialMenuOpen(!isSocialMenuOpen);
  };

  const handleSocialLinkClick = () => {
    setIsSocialMenuOpen(false); // Close dropdown after clicking a link
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex h-full max-h-14 origin-bottom">
      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
      <Dock className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
        {DATA.navbar.map((item) => (
          <DockIcon key={item.href}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-10 sm:size-12"
                  )}
                >
                  <item.icon className="size-4 sm:size-5" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-full" />
        {/* Show social icons only on larger screens */}
        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social]) => (
            <DockIcon key={name} className="hidden sm:block">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-10 sm:size-12"
                    )}
                  >
                    <social.icon className="size-4 sm:size-5" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        {/* Mobile-only "More" icon */}
        <DockIcon className="sm:hidden">
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={toggleSocialMenu}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "size-10"
                )}
              >
                <Menu className="size-4" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>More</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
        <Separator orientation="vertical" className="h-full py-2" />
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <ModeToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
      {/* Mobile dropdown for social icons */}
      <div
        className={cn(
          "sm:hidden fixed inset-0 z-50 flex items-end justify-center pointer-events-none mb-7 transition-opacity duration-300 ease-in-out",
          isSocialMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-black/20 dark:bg-black/40 transition-opacity duration-300 ease-in-out"
          )}
          onClick={toggleSocialMenu}
        ></div>
        {/* Dropdown */}
        <div
          className={cn(
            "relative bottom-16 w-48 bg-background border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 pointer-events-auto",
            "transition-all duration-300 ease-in-out transform",
            isSocialMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          )}
        >
          {Object.entries(DATA.contact.social)
            .filter(([_, social]) => social.navbar)
            .map(([name, social]) => (
              <Link
                key={name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleSocialLinkClick}
                className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md pointer-events-auto"
              >
                <social.icon className="size-5" />
                <span>{name}</span>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}