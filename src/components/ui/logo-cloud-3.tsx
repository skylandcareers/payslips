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
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <InfiniteSlider gap={48}>
        {logos.map((logo) => (
          <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            width={logo.width ?? 100}
            height={logo.height ?? 50}
            className="h-10 w-auto object-contain"
          />
        ))}
      </InfiniteSlider>
    </div>
  );
}
