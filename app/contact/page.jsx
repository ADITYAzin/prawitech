import ContactHeader from "@/components/contact/ContactHeader";
import DirectContact from "@/components/contact/DirectContact";
import ContactForm from "@/components/contact/ContactForm";
import OfficeLocation from "@/components/contact/OfficeLocation";
import { getServiceFromContactParam } from "@/lib/services/contact";

export const metadata = {
  title: "Contact — Prawitech",
  description:
    "Start a conversation with Prawitech. Reach out for strategic digital consultation, new projects, or partnership inquiries.",
};

export default async function Contact({ searchParams }) {
  const params = await searchParams;
  const defaultService = getServiceFromContactParam(params?.service);

  return (
    <div className="flex flex-col">
      <ContactHeader />
      <DirectContact />
      <ContactForm defaultService={defaultService} />
      <OfficeLocation />
    </div>
  );
}
