"use client"
import React from 'react'
import Button from '../common/buttons/Button'
import Link from 'next/link'
import Logo from '../common/Logo'

const Header = () => {
    return (
        <header className="bg-secondary text-white p-4 flex justify-between items-center">
            <div className="text-xl font-bold"> <Logo isDark={false} /></div>
            <div className="flex items-center space-x-4">
                <select className="bg-transparent border-b-2 border-white text-white p-1">
                    <option>USD</option>
                    <option>EUR</option>
                </select>
                <Link href="#" className="hover:underline">Sign In</Link>
                <Link href="#" className="hover:underline">Sign Up</Link>
                <div className="text-sm">Welcome MD</div>
                <Button
                    text="Agent Login"
                    onClick={() => { }}
                />
            </div>
        </header>
    )
}

export default Header
