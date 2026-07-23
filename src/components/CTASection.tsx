/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShoppingCart, ShieldCheck, Mail } from 'lucide-react';
import bookMockup from '../assets/images/kingdom_wealth_book_mockup_1784798351360.jpg';

export default function CTASection() {
  return (
    <section id="get-copy" className="py-24 bg-brand-navy relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-gold opacity-10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold opacity-10 blur-3xl rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-[40px] p-12 md:p-16 shadow-2xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-5 gap-12 items-center text-left">
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 bg-brand-gold text-brand-navy px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest mb-8">
                <ShoppingCart className="w-4 h-4" />
                <span>Limited Edition Pre-Order</span>
              </div>

              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 leading-[1.2]">
                Ready to Build Your <br />
                <span className="text-brand-gold">Kingdom Legacy?</span>
              </h2>

              <p className="text-xl text-slate-200 max-w-2xl mb-10 leading-relaxed">
                Your Financial Future Doesn't Change By Accident. It changes when your thinking changes. 
                And your thinking changes when you discover God's truth.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <a
                  href="https://selar.com/kingdomwealthfinancial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-brand-gold text-brand-navy text-xl px-12 py-5 rounded-2xl font-bold hover:bg-yellow-500 transition-all transform hover:-translate-y-1 shadow-2xl flex items-center justify-center gap-3 uppercase tracking-wider"
                >
                  Get Instant Access
                </a>
                <p className="text-slate-300 text-sm italic max-w-[200px]">
                  The Bible contains timeless wisdom for handling money.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2 flex justify-center">
              <motion.div
                animate={{ rotate: [0, -2, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="absolute inset-0 bg-brand-gold opacity-20 blur-3xl rounded-full"></div>
                <img 
                  src={bookMockup} 
                  alt="Kingdom Wealth Book" 
                  className="w-full max-w-[300px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] relative z-10"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
             { title: "Physical Copy", text: "Premium hardcover edition with gold foil accents." },
             { title: "Immediate Access", text: "Get the digital version instantly while your book ships." },
             { title: "Free Shipping", text: "Limited time offer on all domestic pre-orders." }
          ].map((item, i) => (
            <div key={i} className="text-left">
              <h4 className="text-white font-bold mb-2">{item.title}</h4>
              <p className="text-slate-300 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
