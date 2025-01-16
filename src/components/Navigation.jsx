import React, { useState } from 'react'
import { Button } from './ui/button'
import { Globe } from 'lucide-react'

function Navigation() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="z-10 bg-black flex items-center justify-between px-8 text-white py-4">
            <div className="flex items-center space-x-8">
                <a href="/" className="text-2xl font-bold">
                    Horizone
                </a>
                <div className="hidden md:flex space-x-6">
                    <a href="/" className="transition-colors">
                        Home
                    </a>
                </div>
            </div>

            <div className="flex items-center space-x-4">
                <Button variant="ghost">
                    <Globe className="h-5 w-5 mr-2" />
                    EN
                </Button>
                <Button variant="ghost">Log In</Button>
                <Button>Sign Up</Button>

                {/* Button Section
                <button
                    className="md:hidden text-gray-200 dark:text-gray-300 hover:text-white dark:hover:text-white focus:outline-none focus:ring-0 focus:ring-gray-600 dark:focus:ring-gray-300"
                    onClick={toggleMenu}
                >
                    {isOpen ? (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    ) : (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    )}
                </button> */}


            </div>


            {/* {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-lg z-50 flex justify-center items-center">
                    <nav className="flex flex-col items-center space-y-6 text-white text-2xl font-semibold">
                        <a href="/" className="dark:text-gray-300 dark:hover:text-white"
                            onClick={toggleMenu}>
                            Home
                        </a>
                        <a href="/" className="dark:text-gray-300 dark:hover:text-white"
                            onClick={toggleMenu}>
                            Log In
                        </a>
                        <a href="/" className="dark:text-gray-300 dark:hover:text-white"
                            onClick={toggleMenu}>
                            Sign Up
                        </a>
                    </nav>

                    <button
                        className="absolute top-6 right-6 text-gray-300"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </button>
                </div>
            )} */}

        </nav>
    )
}

export default Navigation