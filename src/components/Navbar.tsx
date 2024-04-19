import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export default function Navbar() {
    return (
        <nav className="top-0 left-0 right-0 z-10 flex justify-between items-center p-3 bg-transparent border-b-2 border-gray-800">
            <div className="flex items-center">
                <a href="/" className="text-xl font-bold text-blue-500 mr-4">💪</a>
                <ul className="hidden md:flex space-x-4">
                    <Link href="/explore" className="text-gray-500">Explore</Link>
                    <Link href="/problems" className="text-gray-500">Problems</Link>
                    <Link href="/contests" className="text-gray-500">Contests</Link>
                </ul>
            </div>
            <div className="flex items-center space-x-4">
                <Input type="text" placeholder="Search" className='text-white' />
                <Button variant="secondary">Search</Button>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>

            </div>
        </nav>
    )
}