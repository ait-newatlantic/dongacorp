import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="DongA">
      <Image width={120} height={40} src="/images/logo.png" alt="logo" className="h-auto"/>
    </Link>
  );
}
