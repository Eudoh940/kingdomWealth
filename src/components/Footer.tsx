/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BookOpen, Instagram, Twitter, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-cream border-t border-slate-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-brand-navy p-1.5 rounded-md">
                <BookOpen className="w-6 h-6 text-brand-gold" />
              </div>
              <span className="font-serif text-2xl font-bold text-slate-900">Kingdom Wealth</span>
            </div>
            <p className="text-slate-600 max-w-sm mb-8 leading-relaxed">
              Empowering believers to achieve financial freedom and build lasting 
              legacies through the timeless wisdom of Scripture and strategic stewardship.
            </p>
            <div className="flex items-center gap-4">
              {[Twitter, Instagram, Facebook, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-600">
              <li><a href="#" className="hover:text-brand-navy transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-navy transition-colors">About the Book</a></li>
              <li><a href="#benefits" className="hover:text-brand-navy transition-colors">Benefits</a></li>
              <li><a href="#author" className="hover:text-brand-navy transition-colors">Emmanuel Udoh</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Resources</h4>
            <ul className="space-y-4 text-slate-600">
              <li><a href="#" className="hover:text-brand-navy transition-colors">Free Workbook</a></li>
              <li><a href="#" className="hover:text-brand-navy transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-navy transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-navy transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-200 flex flex-col md:row items-center justify-between gap-6 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Emmanuel Udoh. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Kingdom Wealth: Financial Freedom From a Biblical Perspective</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
