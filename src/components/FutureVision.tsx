/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Sparkles, Calendar } from 'lucide-react';

export default function FutureVision() {
  return (
    <section className="py-24 bg-brand-cream border-y border-slate-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 text-brand-gold mb-6">
          <Calendar className="w-6 h-6" />
          <span className="font-bold uppercase tracking-widest text-sm">Vision</span>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-8">
          Imagine One Year From Today...
        </h2>
        <p className="text-xl text-slate-600 mb-12">
          Instead of wondering where your salary disappeared...
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "You have a budget.",
            "A savings plan.",
            "An investment strategy.",
            "Peace of mind.",
            "Freedom from unnecessary debt.",
            "Confidence in your financial decisions."
          ].map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-3 text-left"
            >
              <Sparkles className="w-5 h-5 text-brand-gold flex-shrink-0" />
              <span className="font-bold text-slate-800">{text}</span>
            </motion.div>
          ))}
        </div>

        <p className="mt-16 text-2xl font-serif text-brand-navy font-bold leading-relaxed italic">
          "And most importantly... A relationship with money that honours God instead of controlling you."
        </p>
        <p className="mt-4 text-slate-600 italic">
          That's what Kingdom Wealth is designed to help you build.
        </p>
      </div>
    </section>
  );
}
