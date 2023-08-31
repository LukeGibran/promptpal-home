import Image from "next/image";
import clsx from "clsx";

const ImageSizes = {
    medium: {},
    default: {},
    small: {}
};

export const CardImage = ({ src, className, imageClassName, alt }) => {
    return (
        <div className={`card--image ${className && className}`}>
            <Image
                src={src}
                width={512}
                height={512}
                alt={alt}
                objectFit="cover"
                loading="lazy"
                className={`w-full ${
                    imageClassName && imageClassName
                } drop-shadow-xl offset-y-0 offset-x-8 blur-16`}
            />
        </div>
    );
};
