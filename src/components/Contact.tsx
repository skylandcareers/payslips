import { useState } from "react";
import { ChevronRight } from "lucide-react";
import ContactFormDialog from "./ContactFormDialog";

const Contact = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <section id="contact" className="py-12 bg-background">
        <div className="container px-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <h2 className="text-2xl md:text-4xl font-sans font-semibold text-foreground">
              Let's Start Building
            </h2>
            
            <button
              onClick={() => setIsFormOpen(true)}
              className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 border-2 border-primary text-foreground font-medium py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="flex items-center justify-center w-8 h-8 bg-primary rounded-full">
                <ChevronRight className="w-5 h-5 text-white" />
              </span>
              <span className="text-gray-800">Get in touch</span>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Dialog */}
      <ContactFormDialog open={isFormOpen} onOpenChange={setIsFormOpen} />
    </>
  );
};

export default Contact;
