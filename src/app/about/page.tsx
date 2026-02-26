"use client";

import React from "react";

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 bg-gradient-to-b from-black via-blue-950 to-black text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== HERO SECTION ===== */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-blue-500">RespawnEdge</span>
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            RespawnEdge is a next-generation gaming platform and innovation hub 
            empowering game developers, studios, and creators to level up their ideas. 
            We accelerate growth through mentorship, strategic support, industry 
            connections, and access to global gaming opportunities.
          </p>
        </div>

        {/* ===== MISSION SECTION ===== */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-blue-400">
              Our Mission
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Our mission is to build a thriving gaming ecosystem where creators 
              can innovate, scale, and succeed. We support studios by providing 
              expert guidance, technical mentorship, networking access, and 
              strategic growth opportunities in the gaming and XR industry.
            </p>
          </div>

          <div className="bg-blue-900/20 p-8 rounded-xl border border-blue-800/40">
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">
              What We Provide
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>🎮 Industry Mentorship & Expert Guidance</li>
              <li>🚀 Accelerator Programs for Studios</li>
              <li>🤝 Networking & Global Partnerships</li>
              <li>💰 Investor Access & Funding Support</li>
              <li>🌍 Exposure to International Markets</li>
            </ul>
          </div>
        </div>

        {/* ===== FACTS & FIGURES ===== */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold text-center mb-12 text-blue-400">
            Industry Impact
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-blue-900/20 p-8 rounded-xl border border-blue-800/40">
              <h3 className="text-4xl font-bold text-blue-500">150+</h3>
              <p className="text-gray-300 mt-2">Studios Connected</p>
            </div>

            <div className="bg-blue-900/20 p-8 rounded-xl border border-blue-800/40">
              <h3 className="text-4xl font-bold text-blue-500">50+</h3>
              <p className="text-gray-300 mt-2">Mentors & Experts</p>
            </div>

            <div className="bg-blue-900/20 p-8 rounded-xl border border-blue-800/40">
              <h3 className="text-4xl font-bold text-blue-500">$10M+</h3>
              <p className="text-gray-300 mt-2">Funding Facilitated</p>
            </div>

            <div className="bg-blue-900/20 p-8 rounded-xl border border-blue-800/40">
              <h3 className="text-4xl font-bold text-blue-500">25+</h3>
              <p className="text-gray-300 mt-2">Global Partners</p>
            </div>
          </div>
        </div>

        {/* ===== TEAM SECTION ===== */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold text-center mb-12 text-blue-400">
            Meet Our Team
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-800/40 text-center">
              <div className="w-24 h-24 bg-blue-700 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">Alex Morgan</h3>
              <p className="text-gray-400">Founder & Program Director</p>
            </div>

            <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-800/40 text-center">
              <div className="w-24 h-24 bg-blue-700 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">Sara Mitchell</h3>
              <p className="text-gray-400">Industry Mentor</p>
            </div>

            <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-800/40 text-center">
              <div className="w-24 h-24 bg-blue-700 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">Daniel Carter</h3>
              <p className="text-gray-400">Investment Advisor</p>
            </div>
          </div>
        </div>

        {/* ===== LOCATION & CONNECT ===== */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-blue-400">
            Our Base
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            RespawnEdge operates as a global digital platform, connecting 
            gaming studios and creators worldwide. We collaborate with 
            international partners to foster innovation across borders.
          </p>
        </div>

        {/* ===== FAQ SECTION ===== */}
        <div>
          <h2 className="text-3xl font-semibold text-center mb-12 text-blue-400">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-800/40">
              <h3 className="font-semibold text-lg mb-2">
                Who can apply to RespawnEdge?
              </h3>
              <p className="text-gray-300">
                Game studios, indie developers, and XR creators looking to 
                scale their projects and connect with industry experts.
              </p>
            </div>

            <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-800/40">
              <h3 className="font-semibold text-lg mb-2">
                Do you provide funding directly?
              </h3>
              <p className="text-gray-300">
                We facilitate investor connections and funding opportunities 
                but do not directly invest in studios.
              </p>
            </div>

            <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-800/40">
              <h3 className="font-semibold text-lg mb-2">
                How can I connect with your team?
              </h3>
              <p className="text-gray-300">
                Visit our Contact page to submit an inquiry or partnership request.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}