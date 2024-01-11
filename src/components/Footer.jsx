import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-50">
            <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center">
                    <div className="text-xl text-gray-700 font-bold tracking-wider" >
                        Quick Share
                    </div>
                    <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right tracking-wider">
                        Copyright © 2024. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
