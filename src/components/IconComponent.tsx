"use client"

import Image from "next/image";
import cn from "classnames";

type IconProps = {
  name: string;
  src: string;
  alt?: string;
  width?: number;
  height?: number;
};

function IconComponent({ name, src, alt, width, height }: IconProps) {
  return (
    <div
      className={cn(
        "w-12 h-12 md:w-16 md:h-16 flex items-center justify-center transition-transform duration-300",
        "cursor-pointer hover:scale-125 hover:brightness-200",
      )}
    >
      <Image
        src={src}
        alt={alt || name}
        width={width || 48}
        height={height || 48}
        className="object-contain"
      />
    </div>
  );
}

export default IconComponent;
