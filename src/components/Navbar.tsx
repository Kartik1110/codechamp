import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { SITE_CONFIG } from '@/config/site'

export default function Navbar() {
    return (
        <nav className="top-0 left-0 right-0 z-10 flex justify-between items-center p-3 px-10 bg-transparent border-b-2 border-gray-800">
            <div className="flex items-center">
                <Link href="/" className="text-xl font-bold text-blue-500 mr-4">💪</Link>
            </div>
            <div>
                <ul className="hidden md:flex space-x-4">
                    {SITE_CONFIG.navItems.map((item) => (
                        <Link key={item.href} href={item.href} className="text-white">{item.label}</Link>
                    ))}
                </ul>
            </div>
            <div className="flex items-center space-x-4">
                <Input type="text" placeholder="Search" className='text-white' />
                <Button variant="secondary">Search</Button>
                <Link href="/profile">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </Link>

            </div>
        </nav>
    )
}