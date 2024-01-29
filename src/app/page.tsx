import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Welcome Home!</h1>
      <Link href={"/blog"}>Blog</Link>
      <Link href={"/products"}>Products</Link>
    </>
  );
}
