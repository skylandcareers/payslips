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
        <div className="text-center mb-6">
          {subtitle && (
            <p className="text-white/60 text-sm mb-1">{subtitle}</p>
          )}
          {title && (
            <p className="text-white/80 text-base font-medium">{title}</p>
          )}
        </div>
      )}
      <InfiniteSlider gap={48} duration={30} durationOnHover={60}>
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            width={logo.width}
            height={logo.height}
          />
        ))}
      </InfiniteSlider>
    </div>
  );
}
