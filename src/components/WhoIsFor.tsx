/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { UserCheck } from 'lucide-react';

const roles = [
  "Pastors",
  "Christian Entrepreneurs",
  "Business Owners",
  "Young Professionals",
  "Couples",
  "Students",
  "Families",
  "Church Leaders",
  "Anyone tired of financial struggle"
];

export default function WhoIsFor() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Who This Book Is For
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {roles.map((role, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-brand-cream border border-brand-navy/10 px-8 py-4 rounded-2xl flex items-center gap-3 text-brand-navy font-bold"
            >
              <UserCheck className="w-5 h-5 text-brand-gold" />
              {role}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
