import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
  title?: string;
  subtitle?: string;
};

export function LogoCloud({ className, logos, title, subtitle, ...props }: LogoCloudProps) {
  return (
    <div className={cn("w-full py-8", className)} {...props}>
      {(title || subtitle) && (
        <div className="text-center mb-8">
          {subtitle && (
            <p className="text-white/50 text-xl md:text-2xl italic mb-2">{subtitle}</p>
          )}
          {title && (
            <p className="text-white text-2xl md:text-3xl font-bold">{title}</p>
          )}
        </div>
      )}
      
      {/* Logo slider with edge fade */}
      <div className="relative">
        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        
        <InfiniteSlider gap={64} duration={30} durationOnHover={60}>
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-8 w-auto opacity-50 hover:opacity-80 transition-opacity brightness-0 invert"
              width={logo.width}
              height={logo.height}
            />
          ))}
        </InfiniteSlider>
      </div>
    </div>
  );
}
