/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Is this book only for those with high income?",
    answer: "No. Kingdom Wealth is for everyone—from students to retirees. The principles of stewardship, budgeting, and debt elimination are universal and scalable regardless of your current income level."
  },
  {
    question: "How is this different from other finance books?",
    answer: "Most finance books focus either entirely on secular strategy or entirely on spiritual platitudes. Kingdom Wealth merges the two, providing practical 'how-to' strategies grounded in deep theological truth."
  },
  {
    question: "Does the book cover investing?",
    answer: "Yes. Part 3 specifically focuses on 'The Engine of Growth,' where we discuss biblical investing, ethical wealth accumulation, and the difference between gambling and investing."
  },
  {
    question: "Can I use this for a small group or church study?",
    answer: "Absolutely! The book is organized with reflection questions and group activities at the end of each chapter, making it perfect for ministry groups and financial workshops."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600">Everything you need to know about Kingdom Wealth.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-slate-100 last:border-0">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
              >
                <span className="text-xl font-bold text-slate-900 group-hover:text-brand-navy transition-colors">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-brand-navy" />
                ) : (
                  <Plus className="w-5 h-5 text-slate-400" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-slate-600 text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
