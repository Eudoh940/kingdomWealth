/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import authorImg from '../assets/images/change1.jpg';

export default function Author() {
  return (
    <section id="author" className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[40px] overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-slate-100">
          <div className="lg:w-1/2 relative min-h-[400px]">
            <img
              src={authorImg}
              alt="Emmanuel Udoh"
              className="absolute inset-0 w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
            <span className="text-brand-navy font-bold uppercase tracking-widest text-sm mb-4 block">The Author</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-8">
              Emmanuel Udoh
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                A passionate Christian teacher committed to helping believers understand 
                what Scripture truly teaches about money, stewardship, and financial freedom.
              </p>
              <p>
                His mission is simple: To equip Christians with biblical financial wisdom 
                that leads to freedom—not fear.
              </p>
            </div>
            
            <div className="mt-10 flex items-center gap-6">
               <div className="h-px flex-grow bg-slate-100"></div>
               <span className="font-serif text-brand-navy font-bold italic">— Emmanuel Udoh</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
