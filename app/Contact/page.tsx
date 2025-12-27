import ContactCard from "@/components/common/ContactCard";
import ContactForm from "@/components/UI/Contact/ContactForm";
import ContactImageCard from "@/components/UI/Contact/ContactFrontUI";

const Contact = () => {
  return (
    <div className="w-full flex flex-col bg-white">
      <ContactImageCard />
      <div className="w-full flex flex-col justify-center items-center my-12 px-4">
        <ContactForm />
        <ContactCard />
      </div>
    </div>
  );
};

export default Contact;
