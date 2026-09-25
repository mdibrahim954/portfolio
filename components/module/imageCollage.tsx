import Image from "next/image";

type imageArray = {
  src: string;
  alt?: string;
  height?: number;
  width?: number;
};
type ImageCollage = {
  array?: imageArray[];
  className?: string;
};

export default function ImageCollage({ array, className }: ImageCollage) {
  return (
    <div className={`${className} grid grid-cols-2 gap-4 sm:gap-5`}>
      <div className="relative h-[220px] overflow-hidden rounded-[24px] shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:h-[300px] lg:h-[440px]">
        <Image
          src="/1.webp"
          fill
          sizes="(max-width: 768px) 50vw, 33vw"
          className="object-cover"
          alt="Professional portrait"
        />
      </div>

      <div className="flex flex-col gap-4 sm:gap-5">
        <div className="relative h-[140px] overflow-hidden rounded-[24px] shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:h-[190px] lg:h-[210px]">
          <Image
            src="/3.jpg"
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover"
            alt="Work desk setup"
          />
        </div>

        <div className="relative h-[160px] overflow-hidden rounded-[24px] shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:h-[220px] lg:h-[220px]">
          <Image
            src="/4.webp"
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover"
            alt="Creative team meeting"
          />
        </div>
      </div>

      <div className="col-span-2 relative h-[180px] overflow-hidden rounded-[24px] shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:h-[220px] lg:h-[200px]">
        <Image
          src="/2.jpg"
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover"
          alt="Creative workspace"
        />
      </div>
    </div>
  );
}
