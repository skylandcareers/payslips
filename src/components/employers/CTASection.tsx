import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import ContactFormDialog from "@/components/ContactFormDialog";

const CTASection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <section className="py-8 md:py-10 bg-primary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-primary-foreground font-sans">
              10X your hiring team with AI
            </h2>
            <Button 
              onClick={() => setIsFormOpen(true)}
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-6 py-2 text-sm font-sans group"
            >
              Let's Connect
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </section>

      <ContactFormDialog open={isFormOpen} onOpenChange={setIsFormOpen} />
    </>
  );
};

export default CTASection;
