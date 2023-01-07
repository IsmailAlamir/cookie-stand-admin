import React, { useState,useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {ThemeContext} from '../contexts/theme.js';


export default function Header() {
    const {isDarkTheme, toggleThemeHandler} = useContext(ThemeContext);
    return (
        <nav class="flex item-center justify-between bg-zinc-300 text-gray-900 h-12 dark:bg-gray-900 dark:text-white">
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
            <div class=" inline-flex items-center bg-zinc-300 text-gray-900 h-12 dark:bg-gray-900 dark:text-white no-underline text-sm mr-20 ">
                <a class="ml-5 hover:text-gray-500" href="/">Home</a>
                <a class="ml-5 hover:text-gray-500" href="/">About</a>
                <button
                    type="button"
                    className="py-1 sm:py-2.5 px-2 sm:px-5 mr-2 bg-zinc-300 text-black dark:bg-gray-900 dark:text-white rounded"
                    onClick={toggleThemeHandler}
                >Toggel Theme</button>

            </div>
        </nav>
    )
}