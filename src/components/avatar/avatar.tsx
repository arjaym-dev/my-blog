import Image from "next/image";

const Avatar = () => {
  return (
    <div className="flex flex-col items-center pt-10">
      <Image src="/profile.webp" width={144} height={144} alt="Arjay Marquez" />
      {/* <a
        href="/"
        className="font-sans my-5 font-bold text-[27px] hover:underline"
      >
        Arjay Marquez
      </a> */}
    </div>
  );
};

export default Avatar;
