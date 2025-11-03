import React from 'react'
import Image from 'next/image'

function Header() {
    return (
        <header className={`sticky top-0 left-0 z-50 w-full bg-[#140E1F]/80 backdrop-blur-md shadow-md`}>
            <div className="page-container flex items-center justify-between py-8 gap-12">
                <Image src="/icons/Logo.svg" alt="Logo - Denis Risken" width={140} height={26}/>
                <nav>
                    <ul>
                        <li className="flex items-center gap-fluid">
                            {/* Desktop Textlinks */}
                            <div className="hidden sm:flex gap-fluid">
                                <a href="#about">About Me</a>
                                <a href="#projects">Projects</a>
                                <a href="#contact">Contact</a>
                            </div>

                            {/* Mobile Icons */}
                            <div className="flex sm:hidden gap-6">
                                <a href="#about" aria-label="About Me">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_610_14)">
                                            <path
                                                d="M11.0769 7.50004C11.0769 9.57502 9.42769 11.25 7.38461 11.25C5.34154 11.25 3.69231 9.57502 3.69231 7.50004C3.69231 5.42506 5.34154 3.75008 7.38461 3.75008C9.42769 3.75008 11.0769 5.42506 11.0769 7.50004ZM14.7692 20H0V17.5C0 14.7376 3.31077 12.5001 7.38461 12.5001C11.4585 12.5001 14.7692 14.7376 14.7692 17.5V20ZM20 9.9999V12.4999L16.2308 12.5001L15 10.0001L20 9.9999ZM20 4.99995V7.49992L13.5385 7.49992L12.5 5.00016L20 4.99995ZM20 0V2.49997L11.25 2.50018L10 0H20Z"
                                                fill="currentColor"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_610_14">
                                                <rect width="20" height="20" fill="currentColor"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                                <a href="#projects" aria-label="Projects">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0 2.5H20V0H0V2.5ZM0 7.5H5V5H0V7.5ZM20 15V5H7.5V15H20ZM0 12.5H5V10H0V12.5ZM0 20H20V17.5H0V20Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </a>
                                <a href="#contact" aria-label="Contact">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M9.02941 0H11.0241C15.9813 0 20 4.21379 20 9.41176C20 14.6097 15 18.125 11.0241 18.8235L1.73668 20C-0.466556 20 0.0534788 16.9507 0.0534788 14.6405V9.41176C0.0534788 4.21379 4.07214 0 9.02941 0ZM6.03743 12.2876C5.62433 12.2876 5.28944 11.9364 5.28944 11.5033C5.28944 11.0701 5.62433 10.719 6.03743 10.719H10.0267C10.4398 10.719 10.7747 11.0701 10.7747 11.5033C10.7747 11.9364 10.4398 12.2876 10.0267 12.2876H6.03743ZM6.03743 8.10458C5.62433 8.10458 5.28944 7.75343 5.28944 7.32026C5.28944 6.8871 5.62433 6.53595 6.03743 6.53595H14.016C14.4291 6.53595 14.764 6.8871 14.764 7.32026C14.764 7.75343 14.4291 8.10458 14.016 8.10458H6.03743Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
