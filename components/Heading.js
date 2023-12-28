import Image from "next/image";
export default function Heading() {
  return (
    <>
      <h1>Todo-App</h1>
      <Image src="/public/Logo.png" width={200} height={200}></Image>
    </>
  );
}
