import ContactHeader from "@/components/contact/ContactHeader";
import DirectContact from "@/components/contact/DirectContact";
import ContactForm from "@/components/contact/ContactForm";
import OfficeLocation from "@/components/contact/OfficeLocation";

export const metadata = {
  title: "Contact — Prawitech",
  description:
    "Start a conversation with Prawitech. Reach out for strategic digital consultation, new projects, or partnership inquiries.",
};

export default function Contact() {
  return (
    <div className="flex flex-col">
      <ContactHeader />
      <DirectContact />
      <ContactForm />
      <OfficeLocation />
    </div>
  );
}
