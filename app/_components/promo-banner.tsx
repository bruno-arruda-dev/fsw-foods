import Image from "next/image";

interface PromoBannerProps {
  alt: string;
  src: string;
}

const PromoBanner = ({ alt, src }: PromoBannerProps) => {
  return (
    <Image
      alt={alt}
      src={src}
      height={0}
      width={0}
      className="h-auto w-full object-contain"
      sizes="100vw"
      quality={100}
    />
  );
};

export default PromoBanner;
