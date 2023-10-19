import Image from "next/image";
import { FC } from "react";

interface IProfileImage {
  src: string;
  alt: string;
  priority?: boolean;
  className: string;
  height: number;
  width: number;
}
const ProfileImage: FC<IProfileImage> = ({
  src,
  alt,
  priority = false,
  ...props
}) => {
  return <Image src={src} priority={priority} alt={alt} {...props} />;
};

export default ProfileImage;
