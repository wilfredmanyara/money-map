import React from 'react'
import Link from 'next/link'
import { FaXTwitter } from 'react-icons/fa6'
import Logo from '../Logo'

// Footer Component
type Props = {}

const Footer = (props: Props) => {
    return (
        <footer className="bg-background w-full min-h-[70px] mt-9 bottom-0">
            <div className="flex flex-col md:flex-row justify-between items-center max-w-[80%] mx-auto my-4">
                <Link href="/" className="text-white text-2xl font-bold flex-1">
                    <Logo />
                </Link>

                <small className="text-white flex text-center md:my-0 my-4">
                    MoneyMap © {new Date().getFullYear()}
                </small>

                <Link href="//www.x.com/wilfred_manyara" target="_blank" aria-label="Twitter" className="text-white ml-4 text-2xl mx-2">
                        <FaXTwitter />
                    </Link>
            </div>
        </footer>
    )
}

export default Footer
