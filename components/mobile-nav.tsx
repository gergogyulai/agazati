"use client"

import React, { useState } from 'react'
import { useRouter } from "next/navigation"
import Link, { LinkProps } from "next/link"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MobileNavGroup, MobileNavGroupItem, MobileNavGroupTrigger, MobileNavGroupContent } from "@/components/ui/mobile-nav-group";
import { Button } from '@/components/ui/button'
import { ScrollArea } from "@/components/ui/scroll-area"

import { cn } from "@/lib/utils"
import { NavItem } from "@/types/nav";
import { Icons } from './icons'

const MobileNav = () => {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size={"icon"} className='mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12"/>
            <line x1="4" x2="20" y1="6" y2="6"/>
            <line x1="4" x2="20" y1="18" y2="18"/>
          </svg>
          <span className='sr-only'>Navigációs Menü</span>
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className='border-r-border/20 pr-0'>
        <MobileLink href="/" className="flex items-center pr-8" onOpenChange={setOpen}>
          {/* <Image src="/assets/konyvesLogoTemp.png" width={50} height={50} alt="konyvesLogoTemp.png" title="konyvesLogoTemp.png" className="mr-2 rounded-lg shadow-lg"/> */}
          <Icons.logo className="mr-2 size-8 rounded-lg shadow-lg"/>
          <span className="line-clamp-2 text-lg font-bold">gergogyulai/agazati</span>
        </MobileLink>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-0">
          <div className='flex flex-col gap-6'>
            <MobileLink href={"/"} onOpenChange={setOpen}>
              <div className='text-lg font-bold'>
                Vizsga feladatok
              </div>
            </MobileLink>
            <MobileLink href={"/gyakorlo"} onOpenChange={setOpen}>
              <div className='text-lg font-bold'>
                Gyakorló feladatok
              </div>
            </MobileLink>
            <MobileNavGroup type="single" collapsible>
              <MobileNavGroupItem value={"MobileNavigationMultiItem-1"}>
                <MobileNavGroupTrigger className="mr-4 py-0 text-lg font-bold">
                  Cheatsheetek
                </MobileNavGroupTrigger>
                <MobileNavGroupContent className="flex flex-col gap-4">
                <MobileLink href={"/cheatsheet/webfejlesztes"} onOpenChange={setOpen} className='text-lg font-bold'>
                    <div>
                      Webfejlesztés
                    </div>
                  </MobileLink>
                  <MobileLink href={"/cheatsheet/python"} onOpenChange={setOpen} className='text-lg font-bold'>
                    <div>
                      Python
                    </div>
                  </MobileLink>
                  <MobileLink href={"/cheatsheet/halozatok"} onOpenChange={setOpen} className='text-lg font-bold'>
                    <div>
                      Hálózatok
                    </div>
                  </MobileLink>
                </MobileNavGroupContent>
              </MobileNavGroupItem>
            </MobileNavGroup>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function MobileLink({ href, onOpenChange, className, children, ...props }: MobileLinkProps) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  )
}