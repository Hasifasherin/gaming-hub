import "../app/globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Background from "../components/Background"; 

export const metadata = {
  title: "GameHub",
  description: "Modern Gaming Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative bg-black text-white overflow-x-hidden">

        {/* Tubes Background */}
        <Background />

        {/* Fixed Header */}
        <Header />

        {/* Main Content */}
        <main className="pt-24 min-h-screen relative z-10">
          {children}
        </main>

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/919876543210?text=Hello%20I%20want%20more%20details"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-80 right-6 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 z-[999]"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
            alt="WhatsApp"
            className="w-12 h-12"
          />
        </a>

        {/* Footer */}
        <Footer />

      </body>
    </html>
  );
}