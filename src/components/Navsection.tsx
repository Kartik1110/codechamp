"use client"
import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { SITE_CONFIG } from '@/config/site'
import { usePathname } from "next/navigation"

export default function Navsection() {
    const pathname = usePathname()
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {SITE_CONFIG.navItems.map(({ href, label }) => (
                    <NavigationMenuItem key={href} className={`${pathname === href ? "text-primary": "text-gray-500"}`}>
                        <Link href={href} legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                {label}
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    )
}