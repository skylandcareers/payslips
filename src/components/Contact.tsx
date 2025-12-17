import { Contact2 } from "@/components/ui/contact-2";

const Contact = () => {
  return (
    <Contact2 
      title="Let's Start Building"
      description="We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!"
      phone="+91 9820030699"
      email="connect@altunilabs.com"
      web={{ label: "altunilabs.com", url: "https://altunilabs.com" }}
    />
  );
};

export default Contact;
