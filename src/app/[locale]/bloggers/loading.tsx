import Image from "next/image";

export default async function PageLoading() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Image
        quality={100}
        className="animate-spin"
        alt="loader"
        src={"/tmp/loader.png"}
        width={32}
        height={32}
      />
    </div>
  );
}
