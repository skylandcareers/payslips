import hulLogo from "@/assets/partners/hul.png";
import gimLogo from "@/assets/partners/gim.png";
import oaksLogo from "@/assets/partners/oaks.png";
import tcplLogo from "@/assets/partners/tcpl.png";

const Partners = () => {
  const partners = [
    { name: "Hindustan Unilever", logo: hulLogo, className: "h-12 md:h-14 max-w-[144px]" },
    { name: "GIM", logo: gimLogo, className: "h-12 md:h-14 max-w-[144px]" },
    { name: "Oaks", logo: oaksLogo, className: "h-8 md:h-9 max-w-[90px]" },
    { name: "TCPL", logo: tcplLogo, className: "h-12 md:h-14 max-w-[144px]" },
  ];

  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="container px-6">
        
        <div className="relative">
          <div className="flex animate-scroll-fast md:animate-scroll">
            {/* First set of logos */}
            {partners.map((partner, index) => (
              <div 
                key={`first-${index}`}
                className="flex items-center justify-center px-12 flex-shrink-0"
              >
              <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`}
                  className={`${partner.className || "h-10 md:h-12 max-w-[120px]"} w-auto object-contain brightness-0 invert hover:brightness-100 hover:invert-0 transition-all duration-300`}
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <div 
                key={`second-${index}`}
                className="flex items-center justify-center px-12 flex-shrink-0"
              >
              <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`}
                  className={`${partner.className || "h-10 md:h-12 max-w-[120px]"} w-auto object-contain brightness-0 invert hover:brightness-100 hover:invert-0 transition-all duration-300`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
