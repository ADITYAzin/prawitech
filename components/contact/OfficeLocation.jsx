import { MapPin } from "lucide-react";

const officeAddress =
  "Jambangan, Kecamatan Candi, Kabupaten Sidoarjo, Jawa Timur, Indonesia";

export default function OfficeLocation() {
  return ( 
    <section className="border-t border-[#1A1A1A]/8 pb-20 pt-20 lg:pb-28 lg:pt-28">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-[#1A1A1A] sm:text-4xl">
              Visit Our Headquarters.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#1A1A1A]/70 sm:text-lg">
              Our doors are always open for collaborative discussions and
              strategic insights.
            </p>
            <address className="mt-8 not-italic">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#0768FB]" />
                <div className="text-sm leading-relaxed text-[#1A1A1A]/80 sm:text-base">
                  <p className="font-semibold text-[#1A1A1A]">Prawitech HQ</p>
                  <p className="mt-1">{officeAddress}</p>
                </div>
              </div>
            </address>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#1A1A1A]/8">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(officeAddress)}&output=embed`}
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Prawitech HQ Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
