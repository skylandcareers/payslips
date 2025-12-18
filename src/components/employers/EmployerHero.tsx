import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactFormDialog from "@/components/ContactFormDialog";
import NetworkBackground from "@/components/NetworkBackground";

const EmployerHero = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen overflow-hidden flex items-center">
        {/* Network Background */}
        <div className="absolute inset-0 z-0">
          <NetworkBackground 
            lines={7} 
            distance={6}
            className="brightness-125"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-muted-foreground text-sm md:text-base mb-4 font-sans"
            >
              From the Makers of InsideIIM
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-6xl font-semibold font-sans mb-6 text-foreground leading-tight"
            >
              Full Stack AI That Makes Hiring{" "}
              <span className="text-primary">Faster</span>,{" "}
              <span className="text-primary">Fairer</span>, and{" "}
              <span className="text-primary">Human-Led</span>.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg md:text-xl mb-10 font-sans max-w-2xl mx-auto"
            >
              Automate the routine. Elevate your hiring team. Scale your talent acquisition.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button 
                onClick={() => setIsFormOpen(true)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-sans group"
              >
                Get in touch
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactFormDialog open={isFormOpen} onOpenChange={setIsFormOpen} />
    </>
  );
};

export default EmployerHero;
