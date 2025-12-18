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
      <InfiniteSlider gap={24} duration={30}>
        {logos.map((logo) => (
          <div
            key={logo.alt}
            className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center p-3"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              width={logo.width ?? 60}
              height={logo.height ?? 60}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
}
