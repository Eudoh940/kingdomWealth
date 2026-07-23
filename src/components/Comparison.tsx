/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { AlertCircle, ArrowRightLeft, ShieldAlert } from 'lucide-react';

export default function Comparison() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Have You Ever Wondered...
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto mb-16">
            {[
              "Why do faithful Christians still struggle financially?",
              "Why do some believers think poverty is holiness while others promise instant riches through \"seed sowing\"?",
              "Why did Jesus speak about money more than almost any other subject, yet many churches avoid teaching it?",
              "Why do you tithe faithfully yet still battle debt, anxiety, and financial uncertainty?"
            ].map((q, i) => (
              <div key={i} className="bg-brand-cream p-6 rounded-xl border-l-4 border-brand-gold">
                <p className="text-slate-700 font-medium italic">"{q}"</p>
              </div>
            ))}
          </div>
          <p className="text-2xl font-serif text-brand-navy font-bold max-w-3xl mx-auto">
            The Church Has Been Stuck Between Two Dangerous Extremes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-slate-50 p-10 rounded-2xl border border-slate-200 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <ShieldAlert className="w-24 h-24 text-slate-900" />
            </div>
            <h3 className="text-2xl font-bold text-brand-navy mb-4">Extreme One</h3>
            <p className="text-slate-800 text-lg mb-4 italic">"If you're poor, you're probably more spiritual."</p>
            <p className="text-slate-600 leading-relaxed">
              Viewing poverty as a sign of piety. This mindset leads to constant stress, 
              inability to provide for family, and limited capacity for kingdom generosity.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-slate-50 p-10 rounded-2xl border border-slate-200 relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 p-4 opacity-10">
              <ArrowRightLeft className="w-24 h-24 text-slate-900" />
            </div>
            <h3 className="text-2xl font-bold text-brand-navy mb-4">Extreme Two</h3>
            <p className="text-slate-800 text-lg mb-4 italic">"If you have enough faith and sow enough seed, God must make you rich."</p>
            <p className="text-slate-600 leading-relaxed">
              Treating God like a vending machine. This mindset focuses on greed, 
              selfish accumulation, and the false promise that faith guarantees material wealth.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 bg-brand-navy rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          <h3 className="relative z-10 font-serif text-3xl font-bold text-white mb-6">
            Both are incomplete. Both have hurt believers.
          </h3>
          <p className="relative z-10 text-slate-200 text-lg max-w-3xl mx-auto mb-8">
            Kingdom Wealth returns to Scripture—not opinions, not social media, not motivational speeches—to uncover God's timeless principles for financial freedom.
          </p>
        </div>
      </div>
    </section>
  );
}
