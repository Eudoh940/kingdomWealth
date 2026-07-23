/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ChevronRight, Star } from 'lucide-react';

const parts = [
  {
    number: "Part One",
    title: "The Biblical Foundation of Wealth",
    topics: ["Discover why God placed wealth in Eden before sin entered the world."]
  },
  {
    number: "Part Two",
    title: "The Hidden Traps Keeping Believers Poor",
    topics: ["Learn how fear, debt, wrong teaching, and a poverty mindset quietly keep Christians financially bound."]
  },
  {
    number: "Part Three",
    title: "God's Blueprint for Building Wealth",
    topics: ["Work & Planning", "Saving & Investing", "Business & Stewardship", "Generosity"]
  },
  {
    number: "Part Four",
    title: "Application & Impact",
    topics: ["Salary & Business", "Family & Investments", "Giving & Retirement", "Legacy"]
  }
];

const bonuses = [
  "100 Bible Verses on Money",
  "30-Day Financial Freedom Challenge",
  "Financial Glossary",
  "Practical Case Studies",
  "Frequently Asked Questions"
];

export default function Curriculum() {
  return (
    <section id="curriculum" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <span className="text-brand-navy font-bold uppercase tracking-widest text-sm mb-4 block">The Roadmap</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-8">
              Inside Kingdom Wealth
            </h2>
            
            <div className="space-y-8">
              {parts.map((part, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-brand-gold font-bold uppercase tracking-tighter text-sm">{part.number}</span>
                    <div className="h-px flex-grow bg-slate-100"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-navy transition-colors">
                    {part.title}
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {part.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600">
                        <ChevronRight className="w-4 h-4 text-brand-gold mt-1 flex-shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
             <div className="sticky top-32">
                <div className="bg-brand-cream rounded-3xl p-10 border-2 border-slate-100">
                  <h4 className="font-serif text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Star className="w-6 h-6 text-brand-gold fill-brand-gold" />
                    Plus Exclusive Bonuses:
                  </h4>
                  <ul className="space-y-4 mb-10">
                    {bonuses.map((bonus, i) => (
                      <li key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-slate-50 font-semibold text-slate-800">
                         <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                         {bonus}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="p-6 bg-brand-navy rounded-2xl text-center">
                    <p className="text-white font-bold mb-4">Start your journey today</p>
                    <a 
                      href="https://selar.com/kingdomwealthfinancial" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-brand-gold text-brand-navy px-8 py-3 rounded-lg font-bold hover:bg-yellow-600 transition-colors"
                    >
                      Get Your Copy Today
                    </a>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
