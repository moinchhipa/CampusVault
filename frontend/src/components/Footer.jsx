import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
   return (
  <footer className="relative mt-auto w-full overflow-hidden">

  {/* top gradient hairline */}
  <div className="absolute top-0 left-0 w-full h-px
                  bg-linear-to-r from-transparent via-indigo-400 to-transparent"/>

  <div className="bg-white/60 backdrop-blur-2xl border-t border-slate-200/70">

    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-14 sm:py-16">

      {/* BRAND BLOCK */}
      <div className="flex flex-col items-center text-center space-y-4">

        <Link
          to="/home"
          className="flex items-center gap-3 group"
        >
          <img
            src="/logo.png"
            alt="CampusVault logo"
            className="
              h-8 w-auto
              transition-transform duration-300
              group-hover:scale-105
            "
            loading="eager"
            decoding="async"
          />

          <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">
            <span className="text-slate-800">Campus</span>
            <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Vault
            </span>
          </h1>
        </Link>

        <p className="text-sm text-slate-500 max-w-md leading-relaxed">
          Your trusted platform for accessing and sharing academic materials securely.
        </p>
      </div>


      {/* SOFT DIVIDER */}
      <div className="relative my-10 flex justify-center">
        <div className="w-40 h-px bg-linear-to-r from-transparent via-slate-300 to-transparent"/>
      </div>


      {/* COPYRIGHT */}
      <div className="text-center space-y-2">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} CampusVault. All rights reserved.
        </p>

        <p className="text-xs text-slate-400 tracking-wide">
          Built for education excellence
        </p>
      </div>

    </div>
  </div>
</footer>
);
};

export default Footer;