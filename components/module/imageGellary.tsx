import { useEffect, useState } from "react";
import Image from "next/image";

export interface ImagesProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}
export interface ImageGellaryProps {
  images: ImagesProps[];
}

export function ImageGlellary3({ images }: ImageGellaryProps) {
  return null;
}

export function ImageGellary3({ images }: ImageGellaryProps) {
  if (!images || images.length === 0 || images.length > 4) return null;

  return (
    <div className="flex gap-[10px]">
      {images.length < 4
        ? images.map((image, index) => (
            <Image
              className="w-[calc(33.33%-10px)] h-[400px] object-cover rounded-[10px]"
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          ))
        : null}
    </div>
  );
}

export function ImageGellary4({ images }: ImageGellaryProps) {
  if (!images || images.length === 0 || images.length > 4) return null;

  return (
    <div className="flex gap-[10px]">
      {/* Left Image */}
      {images[0] && (
        <Image
          className="w-[calc(33.33%-10px)] h-[400px] object-cover rounded-[10px]"
          src={images[0].src}
          alt={images[0].alt}
          width={images[0].width}
          height={images[0].height}
        />
      )}

      {/* Middle Column */}
      {images.length > 2 && (
        <div className="w-[calc(33.33%-20px)] flex flex-col gap-[10px]">
          {images[1] && (
            <Image
              className="h-[195px] object-cover rounded-[10px]"
              src={images[1].src}
              alt={images[1].alt}
              width={images[1].width}
              height={images[1].height}
            />
          )}

          {images[2] && (
            <Image
              className="h-[195px] object-cover rounded-[10px]"
              src={images[2].src}
              alt={images[2].alt}
              width={images[2].width}
              height={images[2].height}
            />
          )}
        </div>
      )}

      {/* Right Image */}
      {images[3] && (
        <Image
          className="w-[calc(33.33%-10px)] h-[400px] object-cover rounded-[10px]"
          src={images[3].src}
          alt={images[3].alt}
          width={images[3].width}
          height={images[3].height}
        />
      )}
    </div>
  );
}

export default function ImageGellary({ images }: ImageGellaryProps) {
  if (!images || images.length === 0) return null;
  if (images.length <= 3) return <ImageGellary4 images={images} />;
  if (images.length <= 2) return <ImageGellary3 images={images} />;
  return null;
}
