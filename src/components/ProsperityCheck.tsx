/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { XCircle, CheckCircle2 } from 'lucide-react';

export default function ProsperityCheck() {
  return (
    <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-gold via-transparent to-transparent"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">This Is NOT Another Prosperity Gospel Book</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Kingdom Wealth is built on Scripture, not get-rich-quick schemes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
            <h3 className="text-2xl font-bold text-red-400 mb-8 flex items-center gap-2">
              <XCircle className="w-6 h-6" />
              What This Book DOES NOT Teach
            </h3>
            <ul className="space-y-4">
              {[
                "Get-rich-quick schemes",
                "\"Sow a seed and become a millionaire\"",
                "Money equals spirituality",
                "Poverty equals holiness"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-lg text-slate-200">
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 border border-brand-gold/20 rounded-3xl p-10">
            <h3 className="text-2xl font-bold text-brand-gold mb-8 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6" />
              Instead, It Teaches...
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Biblical Stewardship",
                "Wisdom",
                "Diligence",
                "Generosity",
                "Responsibility",
                "Long-term Freedom",
                "Scriptural Truth"
              ].map((text, i) => (
                <span key={i} className="bg-brand-gold/10 text-brand-gold px-4 py-2 rounded-full border border-brand-gold/20 font-bold">
                  {text}
                </span>
              ))}
            </div>
            <p className="mt-8 text-slate-300 leading-relaxed italic">
              "Building financial freedom that lasts, built on the solid foundation of God's Word."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
