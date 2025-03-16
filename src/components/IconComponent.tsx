import Image from "next/image";
import cn from "classnames";

type IconProps = {
  name: string;
  src: string;
  alt?: string;
};

function IconComponent({ name, src, alt }: IconProps) {
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
        width={48}
        height={48}
        className="object-contain"
      />
    </div>
  );
}

export default IconComponent;
