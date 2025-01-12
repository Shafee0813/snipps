import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("color-[#e3e3e3] animate-pulse-no-shrink rounded-md bg-primary/10", className)}
      {...props}
    />
  )
}

export { Skeleton }
