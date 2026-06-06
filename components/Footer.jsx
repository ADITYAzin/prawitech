import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F4F7FB]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        {/* Top Layer: The Final Hook */}
        <div className="py-20 lg:py-32">
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] leading-tight mb-4">
              Siap Membangun Sesuatu yang Luar Biasa?
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#1A1A1A]/70 mb-8">
              Mari satukan visi kreatif dan teknologi untuk eskalasi bisnismu.
            </p>
            <a
              href="mailto:hello@prawitech.com"
              className="inline-block font-sans text-lg sm:text-xl font-bold text-[#1A1A1A] underline decoration-2 underline-offset-4 hover:text-[#0768FB] transition-colors duration-200"
            >
              hello@prawitech.com
            </a>
          </div>
        </div>

        {/* Middle Layer: Navigation Grid */}
        <div className="py-16 lg:py-20 border-t border-[#1A1A1A]/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Column 1: Perusahaan */}
            <div>
              <h3 className="font-heading text-base font-bold text-[#1A1A1A] mb-6">
                Perusahaan
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/about"
                    className="font-sans text-sm text-[#1A1A1A]/60 hover:text-[#0768FB] transition-colors duration-200"
                  >
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <Link
                    href="/work"
                    className="font-sans text-sm text-[#1A1A1A]/60 hover:text-[#0768FB] transition-colors duration-200"
                  >
                    Karya Kami
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="font-sans text-sm text-[#1A1A1A]/60 hover:text-[#0768FB] transition-colors duration-200"
                  >
                    Hubungi Kami
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Layanan Kami */}
            <div>
              <h3 className="font-heading text-base font-bold text-[#1A1A1A] mb-6">
                Layanan Kami
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/services/graphic-design"
                    className="font-sans text-sm text-[#1A1A1A]/60 hover:text-[#0768FB] transition-colors duration-200"
                  >
                    Graphic Design & Identity
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/web-development"
                    className="font-sans text-sm text-[#1A1A1A]/60 hover:text-[#0768FB] transition-colors duration-200"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/ai-automation"
                    className="font-sans text-sm text-[#1A1A1A]/60 hover:text-[#0768FB] transition-colors duration-200"
                  >
                    AI Automation
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Terhubung */}
            <div>
              <h3 className="font-heading text-base font-bold text-[#1A1A1A] mb-6">
                Terhubung
              </h3>
              <div className="flex items-center gap-4">
                {/* LinkedIn - Hidden */}
                {/* <a href="#" className="text-[#1A1A1A]/60 hover:text-[#0768FB] transition-colors duration-200">
                  <Linkedin className="w-5 h-5" />
                </a> */}
                
                {/* Instagram */}
                <a
                  href="https://instagram.com/prawitech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-[#1A1A1A]/60 hover:text-[#0768FB] transition-colors duration-200"
                >
                  Instagram
                </a>
                
                {/* Dribbble/Behance - Hidden */}
                {/* <a href="#" className="text-[#1A1A1A]/60 hover:text-[#0768FB] transition-colors duration-200">
                  <Dribbble className="w-5 h-5" />
                </a> */}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Layer: Legal & Copyright */}
        <div className="py-8 border-t border-[#1A1A1A]/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-sans text-xs text-[#1A1A1A]/50">
              © 2024 Prawitech. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="font-sans text-xs text-[#1A1A1A]/50 hover:text-[#0768FB] transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="font-sans text-xs text-[#1A1A1A]/50 hover:text-[#0768FB] transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
