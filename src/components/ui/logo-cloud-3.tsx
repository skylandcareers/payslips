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
};

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
  return (
    <div
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />

      <InfiniteSlider gap={48} duration={28} durationOnHover={40} className="py-2">
        {logos.map((logo) => (
          <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            width={logo.width ?? 140}
            height={logo.height ?? 44}
            loading="lazy"
            className="h-10 md:h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
        ))}
      </InfiniteSlider>
    </div>
  );
}
