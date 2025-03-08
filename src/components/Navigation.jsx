import React, { useState } from 'react';
import { Button } from './ui/button';
import { Globe, Menu, X } from 'lucide-react';
import { Link } from 'react-router';
import { SignedIn, SignedOut, UserButton, useUser } from '@clerk/clerk-react';

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const { user } = useUser();

    return (
        <nav className="z-50 bg-black flex items-center justify-between px-8 text-white py-4">
            <div className="flex items-center space-x-8">
                <Link to="/" className="text-2xl font-bold">
                    Horizone
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    <Link to="/" className="transition-colors hover:text-gray-400">
                        Home
                    </Link>
                    {user?.publicMetadata?.role == "admin" && (<Link to="/hotels/create" className="transition-colors hover:text-gray-400">
                        Create Hotel
                    </Link>)}
                </div>
            </div>

            {/* Toggle Button for Mobile */}
            <div className="md:hidden">
                <button onClick={toggleMenu}>
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center space-x-4">
                <Button variant="ghost">
                    <Globe className="h-5 w-5 mr-2" />
                    EN
                </Button>
                <SignedOut>
                    <Button variant="ghost">
                        <Link to="/sign-in">Log In</Link>
                    </Button>
                    <Button>
                        <Link to="/sign-up">Sign Up</Link>
                    </Button>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                    <Button>
                        <Link to="/account">My Account</Link>
                    </Button>
                </SignedIn>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden absolute top-16 left-0 right-0 flex flex-col bg-black p-4 z-50">
                    <Link to="/" onClick={toggleMenu} className="hover:text-gray-400 flex items-center justify-center py-4">
                        Home
                    </Link>

                    {user?.publicMetadata?.role == "admin" && (<Link to="/hotels/create" onClick={toggleMenu} className="hover:text-gray-400 flex items-center justify-center py-4">
                        Create Hotel
                    </Link>)}

                    <Button variant="ghost">
                        <Globe className="h-5 w-5 mr-2" />
                        EN
                    </Button>
                    <SignedOut>
                        <Button variant="ghost" asChild className="mb-3" onClick={toggleMenu}>
                            <Link to="/sign-in">Log In</Link>
                        </Button>
                        <Button asChild onClick={toggleMenu}>
                            <Link to="/sign-up">Sign Up</Link>
                        </Button>
                    </SignedOut>
                    <SignedIn>
                        <UserButton appearance={{
                            elements: {
                                rootBox: "w-full items-center justify-center flex mt-4 mb-4"
                            }
                        }} />
                        <Button asChild onClick={toggleMenu}>
                            <Link to="/account">My Account</Link>
                        </Button>
                    </SignedIn>
                </div>
            )}
        </nav>
    );
}

export default Navigation;
