import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
   return (
  <footer className="relative mt-auto w-full overflow-hidden">

    {/* Premium Top Glow Line */}
    <div className="absolute top-0 left-0 w-full h-0.5
                    bg-linear-to-r from-indigo-500 via-purple-500 to-indigo-500"/>

    <div className="bg-white/70 backdrop-blur-2xl border-t border-slate-200">

      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-10 sm:py-12">

        {/* Brand Text */}
        <div className="text-center space-y-3">

          <h1 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight truncate min-w-0">
  <Link to="/home" className="hover:opacity-90 transition-all duration-300">
    <span className="text-slate-800">Campus</span>
    <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
      Vault
    </span>
  </Link>
</h1>

          <p className="text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
            Your trusted platform for accessing and sharing academic materials securely.
          </p>

        </div>


        {/* Divider */}
        <div className="h-px bg-linear-to-r from-transparent via-slate-200 to-transparent my-8"/>


        {/* Copyright */}
        <div className="text-center space-y-2">

          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} CampusVault. All rights reserved.
          </p>

          <p className="text-xs text-slate-400">
            Built for education excellence 🚀
          </p>

        </div>

      </div>
    </div>
  </footer>
);
};

export default Footer;