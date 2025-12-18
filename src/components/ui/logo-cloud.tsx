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
  duration?: number;
};

export function LogoCloud({ className, logos, duration = 40, ...props }: LogoCloudProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <InfiniteSlider gap={64} duration={duration}>
        {logos.map((logo) => (
          <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            width={logo.width ?? 120}
            height={logo.height ?? 60}
            className="h-12 w-auto object-contain"
          />
        ))}
      </InfiniteSlider>
    </div>
  );
}
