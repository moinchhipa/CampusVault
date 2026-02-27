import React from 'react';

const Footer = () => {
    return (
       <footer className='bg-white border-t mt-16'>
        <div className='max-w-7xl mx-auto px-6 py-8 text-center text-gray-500 text-sm'>
            © {new Date().getFullYear()} CampusVault. All rights reserved.
        </div>
       </footer>
    );
};

export default Footer;