import { Contact as ContactTypes } from "@/language/language";
import ContactForm from "../../components/contactForm";

const ContactView: React.FC<{ content: ContactTypes }> = ({ content }) => {
  return (
    <div>
      <ContactForm content={content} />
    </div>
  );
};

export default ContactView;
