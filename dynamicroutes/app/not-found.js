import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center bg-gray-800">
      <h1 className="text-red-600 text-5xl text-center">Not Found</h1>
      <p className="text-lg text-orange-600 text-center">
        Could not find response
      </p>
      <Link href="/" className="text-blue-700 hover:underline">
        Return Home
      </Link>
    </div>
  );
}
