import { useState } from "react";
import { ChevronRight } from "lucide-react";
import ContactFormDialog from "./ContactFormDialog";

const Contact = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <section id="contact" className="py-20 bg-background">
        <div className="container px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Let's Build the Future Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're an university seeking end-to-end marketing solutions or an enterprise ready to elevate your people potential, we're here to help you succeed.
            </p>
            
            {/* Get in touch CTA */}
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
