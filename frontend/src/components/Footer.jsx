import React from 'react';

const Footer = () => {
    return (
       <footer className='bg-white border-t border-slate-200 mt-auto w-full min-w-0'>
        <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 text-center text-slate-500 text-xs sm:text-sm'>
            © {new Date().getFullYear()} CampusVault. All rights reserved.
        </div>
       </footer>
    );
};

export default Footer;