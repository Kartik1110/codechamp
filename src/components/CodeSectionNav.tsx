"use client"
import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { usePathname } from "next/navigation"


export default function CodeSectionNav({tabs} : {tabs: {href: string, label: string}[]}) {
    const pathname = usePathname()

    return (
        <nav className="flex justify-between items-center p-2 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-800">
            <NavigationMenu>
            <NavigationMenuList>
                {tabs.map(({ href, label }) => (
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

        </nav>
    )
}