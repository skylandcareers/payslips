import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";

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
      <InfiniteSlider gap={80} duration={duration}>
        {logos.map((logo) => (
          <div key={logo.alt} className="flex items-center gap-3 text-muted-foreground/60">
            <Play className="h-4 w-4 fill-current" />
            <span className="text-lg font-medium whitespace-nowrap">{logo.alt}</span>
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
}
