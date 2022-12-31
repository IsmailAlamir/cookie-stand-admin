import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

export default function Header() {
    return (
        <nav class="flex item-center justify-between text-white h-12 bg-gray-900">
            <div class="inline-flex items-center ">
            <Link className='inline-flex items-center px-2 mr-4' href='/'>
                    <Image 
                    src="/next.svg" 
                    alt="Logo"
                    width={75}
                    height={40}
                    class="ml-20"
                    >
                    </Image>
                    <span className='text-xl fonr-bold tracking-wide ml-5'>Ismail Al Amir</span>
                </Link>

            </div>
            <div class=" inline-flex items-center text-white no-underline text-sm mr-20 ">
                <a class= "ml-5 hover:text-gray-500" href="/">Home</a>
                <a class= "ml-5 hover:text-gray-500" href="/">About</a>
            </div>
        </nav>
    )
}
