/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  CheckCircle2
} from 'lucide-react';

const points = [
  "Understand what the Bible really says about wealth",
  "Break free from destructive debt",
  "Develop a Kingdom mindset about money",
  "Escape the poverty mentality",
  "Learn biblical principles for saving and investing",
  "Build wealth without loving money",
  "Create financial systems that honour God",
  "Raise financially wise children",
  "Understand generosity without manipulation",
  "Build a lasting legacy for future generations"
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-brand-navy font-bold uppercase tracking-widest text-sm mb-4 block">Empowerment</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            This Book Will Help You
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-5xl mx-auto">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 bg-white p-5 rounded-xl border border-slate-100 shadow-sm"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-brand-navy rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-brand-gold" />
              </div>
              <span className="text-lg font-medium text-slate-700">{point}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
