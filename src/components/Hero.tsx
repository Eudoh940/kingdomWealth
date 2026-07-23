/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { CheckCircle2, Star } from 'lucide-react';
import bookMockup from '../assets/images/3D hard back.png';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2 mb-6 text-brand-navy font-semibold tracking-wide uppercase text-sm">
            <Star className="w-4 h-4 fill-brand-gold text-brand-gold" />
            <span>Biblical Principles for Modern Wealth</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-slate-900 mb-8">
            Kingdom Wealth: <br />
            <span className="text-brand-navy">Financial Freedom</span> <br />
            <span className="text-brand-gold italic font-normal text-4xl md:text-5xl block mt-4">From a Biblical Perspective</span>
          </h1>

          <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-xl">
            Break Free from Debt, Financial Fear, and Money Confusion Without Compromising Your Faith.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
            <a
              href="https://selar.com/kingdomwealthfinancial"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-brand-navy text-white text-lg px-10 py-5 rounded-xl font-bold hover:bg-slate-800 transition-all transform hover:-translate-y-1 shadow-2xl flex items-center justify-center gap-2"
            >
              Get Your Copy
              <span className="text-brand-gold">Today</span>
            </a>
          </div>

          <div className="space-y-4">
            {[
              'Stop believing the myths.',
              'Start building wealth God\'s way.',
              'Discover biblical stewardship.'
            ].map((text) => (
              <div key={text} className="flex items-center gap-3 text-slate-900 font-medium">
                <CheckCircle2 className="w-5 h-5 text-brand-navy" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-brand-gold opacity-10 blur-[100px] rounded-full"></div>
          
          <motion.div
            animate={{ 
              y: [0, -15, 0],
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative z-10"
          >
            <img
              src={bookMockup}
              alt="Kingdom Wealth Book Mockup"
              className="w-full max-w-[520px] drop-shadow-[0_40px_60px_rgba(0,0,0,0.35)] rounded-xl transform hover:scale-[1.02] transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            
            {/* Overlay Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0, rotate: -20 }}
              animate={{ opacity: 1, scale: 1, rotate: 12 }}
              transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
              className="absolute -top-4 -right-4 md:-right-8 w-28 h-28 md:w-32 md:h-32 bg-brand-gold rounded-full flex items-center justify-center p-4 text-center shadow-2xl border-4 border-brand-cream"
            >
              <span className="text-brand-navy font-black text-[10px] md:text-[11px] uppercase leading-tight tracking-tighter">
                Faith. Finance. Freedom. <br/> God's Plan For True Wealth.
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
