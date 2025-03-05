'use client';

import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      className="rounded-full"
      alt="avatar image"
      width={30}
      height={30}
      src={"/images/placeholder.png"}
    />
  )
}

export default Avatar