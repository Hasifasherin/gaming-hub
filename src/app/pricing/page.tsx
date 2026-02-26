"use client";

export default function PricingPage() {
  const modes = [
    {
      name: "Single Mode",
      color: "bg-orange-500",
      glow: "hover:shadow-orange-500/40",
      plans: [
        ["Express Slot (15 Min)", "₹50"],
        ["30 Min Session", "₹90"],
        ["1 Hr Session", "₹160"],
        ["30 Min Extension", "₹80"],
        ["1 Hr Extension", "₹130"],
      ],
    },
    {
      name: "Dual Mode",
      color: "bg-blue-600",
      glow: "hover:shadow-blue-500/40",
      plans: [
        ["Express Slot (15 Min)", "₹80 (₹40 per person)"],
        ["30 Min Session", "₹140 (₹70 per person)"],
        ["1 Hr Session", "₹250 (₹125 per person)"],
        ["30 Min Extension", "₹120 (₹60 per person)"],
        ["1 Hr Extension", "₹190 (₹95 per person)"],
      ],
    },
    {
      name: "Big Mode",
      color: "bg-green-600",
      glow: "hover:shadow-green-500/40",
      plans: [
        ["Express Slot (15 Min)", "₹120"],
        ["30 Min Session", "₹220"],
        ["1 Hr Session", "₹380"],
        ["30 Min Extension", "₹200"],
        ["1 Hr Extension", "₹340"],
      ],
    },
    {
      name: "SimDrive",
      color: "bg-yellow-500",
      glow: "hover:shadow-yellow-500/40",
      plans: [
        ["One Session (15 Min)", "₹90"],
        ["Extension (15 Min)", "₹80"],
        ["Pro Session (1 Hr)", "₹290"],
      ],
    },
  ];

  return (
    <div className="pt-28 pb-20  text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
          RespawnEdge Pricing
        </h1>

        <div className="space-y-12">
          {modes.map((mode, index) => (
            <div
              key={index}
              className={`group flex border border-gray-700 rounded-xl overflow-hidden 
              transition-all duration-300 transform 
              hover:-translate-y-2 hover:shadow-2xl ${mode.glow}`}
            >
              {/* LEFT LABEL */}
              <div
                className={`${mode.color} text-black font-bold flex items-center justify-center 
                px-6 py-10 transition-transform duration-300 group-hover:scale-105`}
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                {mode.name.toUpperCase()}
              </div>

              {/* RIGHT TABLE */}
              <div className="flex-1 bg-zinc-900 p-8 transition-colors duration-300 group-hover:bg-zinc-800">
                <div className="space-y-4">
                  {mode.plans.map((plan, i) => (
                    <div
                      key={i}
                      className="flex justify-between border-b border-gray-700 pb-2 
                      transition-all duration-200 hover:text-white hover:border-gray-500"
                    >
                      <span className="text-gray-400">{plan[0]}</span>
                      <span className="font-semibold">{plan[1]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Notes */}
        <div className="mt-16 bg-red-600/20 border border-red-500 rounded-xl p-6 text-sm hover:bg-red-600/30 transition">
          <p>• Seat sharing is not allowed in a single session.</p>
          <p>• ₹80 per extra person will be charged for shared SimDrive session.</p>
        </div>
      </div>
    </div>
  );
}