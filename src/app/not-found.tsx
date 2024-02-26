"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
// import NotFoundImage from "public/images/404.png";

const NotFoundPage = () => {
  const router = useRouter();

  const toHome = () => {
    router.push("/");
  };

  return (
    <>
      ノット・ファウンド
    </>
  );
};

export default NotFoundPage;
