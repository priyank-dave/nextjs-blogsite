import Link from "next/link";

export default function Error() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Sorry the page that you are looking for does not exist.</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
