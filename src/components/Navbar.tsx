/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { BookOpen } from 'lucide-react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.95)']
  );
  const boxShadow = useTransform(
    scrollY,
    [0, 100],
    ['none', '0 4px 6px -1px rgb(0 0 0 / 0.1)']
  );

  return (
    <motion.nav
      style={{ backgroundColor, boxShadow }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-brand-navy p-1.5 rounded-md">
            <BookOpen className="w-6 h-6 text-brand-gold" />
          </div>
          <span className="font-serif text-xl font-bold text-slate-900">Kingdom Wealth</span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
          <a href="#about" className="hover:text-brand-navy transition-colors">About</a>
          <a href="#benefits" className="hover:text-brand-navy transition-colors">Benefits</a>
          <a href="#curriculum" className="hover:text-brand-navy transition-colors">Curriculum</a>
          <a href="#author" className="hover:text-brand-navy transition-colors">Author</a>
        </div>

        <a
          href="https://selar.com/kingdomwealthfinancial"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-navy text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-slate-800 transition-all transform hover:-translate-y-0.5 shadow-lg active:scale-95"
        >
          Get Your Copy
        </a>
      </div>
    </motion.nav>
  );
}
