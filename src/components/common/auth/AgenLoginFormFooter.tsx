import Link from 'next/link'
import React from 'react'

const AgenLoginFormFooter = () => {
    return (
        <div className="mt-4 flex justify-between text-sm font-bold text-gray-600 dark:text-gray-400 space-x-30">
            New Agent?
            <Link href="/register" className="hover:underline font-normal ml-2">
                Register
            </Link>
            <Link href="/forgot-password" className="hover:underline">
                Forgot password?
            </Link>
        </div>
    )
}

export default AgenLoginFormFooter
