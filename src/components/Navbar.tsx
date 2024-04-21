import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import Navsection from './Navsection'

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 flex justify-between items-center p-3 px-10  backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-800">
            <div className="flex items-center">
                <Link href="/" className="text-xl font-bold text-blue-500 mr-4">💪</Link>
            </div>
            <div>
                <Navsection />
            </div>
            <div className="flex items-center space-x-4">
                <Input type="text" placeholder="Search" className='text-white' />
                <Button variant="outline">Search</Button>
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