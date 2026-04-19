"use client";

import * as React from "react";
import Link from "next/link";
import {
  Armchair,
  Boxes,
  Cloud,
  Briefcase,
  Hammer,
  Menu,
  Plane,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";
// [DISABLED 2026-04-19] Dark mode temporarily off — ThemeToggle hidden from nav.
// import { ThemeToggle } from "./theme-toggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { BrandMark } from "@/components/brand/brand-mark";
import { cn } from "@/lib/utils";

type NavLink = {
  href: string;
  label: string;
  blurb?: string;
  icon?: LucideIcon;
};

const PRIMARY_LINKS: NavLink[] = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/product/ai", label: "Product" },
  { href: "/security", label: "Security" },
];

const INDUSTRY_LINKS: NavLink[] = [
  {
    href: "/industries/ecommerce",
    label: "E-commerce",
    blurb: "Catalog depth, shipping zones, grain variation.",
    icon: ShoppingBag,
  },
  {
    href: "/industries/interior-design",
    label: "Interior design",
    blurb: "Martindale ratings, vendor lead times, trade swaps.",
    icon: Armchair,
  },
  {
    href: "/industries/travel-advisory",
    label: "Travel advisory",
    blurb: "Destinations, routing, vendor holds, client files.",
    icon: Plane,
  },
  {
    href: "/industries/professional-services",
    label: "Professional services",
    blurb: "Engagement terms, scope true-ups, rate cards.",
    icon: Briefcase,
  },
  {
    href: "/industries/industrial-distribution",
    label: "Industrial distribution",
    blurb: "Parts, quoting, volume breaks, pickups.",
    icon: Boxes,
  },
  {
    href: "/industries/building-supply",
    label: "Building supply",
    blurb: "Spans, connectors, sealants, finish matching.",
    icon: Hammer,
  },
  {
    href: "/industries/saas",
    label: "SaaS",
    blurb: "Plan fit, limits, provisioning, metering.",
    icon: Cloud,
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-2xl saturate-150"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-14 max-w-[1140px] items-center justify-between px-5">
        <Link
          href="/"
          className="flex items-center"
          aria-label="MindPath BI — home"
        >
          <BrandMark size="md" />
        </Link>

        {/* Desktop nav */}
        <NavigationMenu viewport={false} className="hidden md:flex">
          <NavigationMenuList>
            {PRIMARY_LINKS.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground",
                  )}
                >
                  <Link href={link.href}>{link.label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}

            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                Industries
              </NavigationMenuTrigger>
              <NavigationMenuContent
                className="fixed! inset-x-0! top-14! mt-1.5! w-auto! origin-top overflow-visible! rounded-none! border-0! bg-transparent! p-0! shadow-none!"
              >
                <div className="mx-auto max-w-[1140px] px-5">
                  <div className="overflow-hidden rounded-md border border-[var(--color-rule)] bg-popover p-2 text-popover-foreground shadow-lg">
                    <p className="px-2 pb-2 pt-1 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                      Industries
                    </p>
                    <ul className="grid gap-0.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                      {INDUSTRY_LINKS.map((link) => {
                        const Icon = link.icon;
                        return (
                          <li key={link.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={link.href}
                                className="group/ind flex flex-col gap-0.5 rounded-md px-2 py-1.5 no-underline outline-none transition-colors hover:bg-[color-mix(in_srgb,var(--color-accent-tint)_85%,transparent)] focus:bg-[color-mix(in_srgb,var(--color-accent-tint)_85%,transparent)]"
                              >
                                <span className="flex items-center gap-1.5 text-sm font-medium leading-tight text-[var(--color-ink)] group-hover/ind:text-[var(--color-accent-ink)] group-focus/ind:text-[var(--color-accent-ink)]">
                                  {Icon ? (
                                    <Icon
                                      aria-hidden
                                      strokeWidth={2}
                                      className="size-4 shrink-0 text-[var(--color-accent)]"
                                    />
                                  ) : null}
                                  <span>{link.label}</span>
                                </span>
                                {link.blurb ? (
                                  <p className="line-clamp-2 text-[11px] leading-snug text-muted-foreground">
                                    {link.blurb}
                                  </p>
                                ) : null}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={cn(
                  navigationMenuTriggerStyle(),
                  "font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground",
                )}
              >
                <Link href="/pricing" className="flex items-center gap-1.5">
                  Pricing
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 rounded-full bg-accent-foreground/80"
                  />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          {/* [DISABLED 2026-04-19] <ThemeToggle /> — dark mode off site-wide */}

          <Link
            href="/#waitlist"
            className="hidden rounded-full bg-foreground px-4 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-background transition-opacity hover:opacity-80 md:inline-flex"
          >
            Request access
          </Link>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85%] max-w-sm p-0">
              <SheetHeader className="border-b border-border px-5 py-4 text-left">
                <SheetTitle asChild>
                  <div>
                    <BrandMark size="md" />
                  </div>
                </SheetTitle>
                <SheetDescription className="text-xs text-muted-foreground">
                  The classified brief on the unified inbox.
                </SheetDescription>
              </SheetHeader>

              <div className="flex flex-col gap-4 px-5 py-5 text-sm">
                <div className="flex flex-col">
                  {PRIMARY_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="rounded-md px-2 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:bg-[color-mix(in_srgb,var(--color-accent-tint)_85%,transparent)] hover:text-[var(--color-accent-ink)]"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    href="/pricing"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 rounded-md px-2 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:bg-[color-mix(in_srgb,var(--color-accent-tint)_85%,transparent)] hover:text-[var(--color-accent-ink)]"
                  >
                    Pricing
                    <span
                      aria-hidden
                      className="h-1.5 w-1.5 rounded-full bg-accent-foreground/80"
                    />
                  </Link>
                </div>

                <div>
                  <p className="px-2 pb-1 text-[0.7rem] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                    Industries
                  </p>
                  <div className="flex flex-col">
                    {INDUSTRY_LINKS.map((link) => {
                      const Icon = link.icon;
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className="group/nav-ind flex flex-col gap-0.5 rounded-md px-2 py-1.5 transition-colors hover:bg-[color-mix(in_srgb,var(--color-accent-tint)_85%,transparent)]"
                        >
                          <span className="flex items-center gap-1.5 text-sm font-medium leading-tight text-[var(--color-ink)] group-hover/nav-ind:text-[var(--color-accent-ink)]">
                            {Icon ? (
                              <Icon
                                aria-hidden
                                strokeWidth={2}
                                className="size-4 shrink-0 text-[var(--color-accent)]"
                              />
                            ) : null}
                            <span>{link.label}</span>
                          </span>
                          {link.blurb ? (
                            <span className="text-[11px] leading-snug text-[var(--color-muted)]">
                              {link.blurb}
                            </span>
                          ) : null}
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <Link
                  href="/#waitlist"
                  onClick={() => setOpen(false)}
                  className="mt-1 inline-flex items-center justify-center rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-opacity hover:opacity-80"
                >
                  Request access
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
