/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Comparison from './components/Comparison';
import Benefits from './components/Benefits';
import Curriculum from './components/Curriculum';
import ProsperityCheck from './components/ProsperityCheck';
import FutureVision from './components/FutureVision';
import WhoIsFor from './components/WhoIsFor';
import Author from './components/Author';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-white selection:bg-emerald-100 selection:text-[#064E3B]">
      <Navbar />
      <Hero />
      <Comparison />
      <Benefits />
      <Curriculum />
      <ProsperityCheck />
      <FutureVision />
      <WhoIsFor />
      <Author />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
