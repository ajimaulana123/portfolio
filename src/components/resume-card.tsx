"use client";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { useState, useRef } from "react";
import Markdown from "react-markdown";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false); // Start collapsed
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleExpanded = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <a href={href} target="_blank" className="block cursor-pointer">
      <Card className="flex">
        <div className="flex-none">
          <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow ml-4 items-center flex-col group">
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="font-semibold leading-none">{title}</h3>
              <div className="text-sm tabular-nums text-gray-500">{period}</div>
            </div>
            {subtitle && (
              <div className="font-sans text-sm">{subtitle}</div>
            )}
          </CardHeader>
          {description && (
            <>
              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                  maxHeight: isExpanded ? `${contentRef.current?.scrollHeight}px` : "0px",
                }}
              >
                <div ref={contentRef} className="pt-2">
                  <CardContent className="mt-0 text-xs">
                    <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                      {description}
                    </Markdown>
                  </CardContent>
                </div>
              </div>
              <div>
                <Button
                  variant="link"
                  className="px-0 text-xs"
                  onClick={toggleExpanded}
                >
                  {isExpanded ? "Sembunyikan" : "Selengkapnya..."}
                </Button>
              </div>
            </>
          )}
        </div>
      </Card>
    </a>
  );
};