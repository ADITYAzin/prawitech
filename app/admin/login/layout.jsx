import { Plus_Jakarta_Sans, Poppins, Space_Grotesk } from "next/font/google";
import { cn } from "@/lib/utils";
import "../../globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function LoginLayout({ children }) {
  return (
    <html lang="en" className={cn("h-full", plusJakarta.variable, spaceGrotesk.variable, poppins.variable, "font-sans")}>
      <body className="min-h-full antialiased">
        {children}
      </body>
    </html>
  );
}
