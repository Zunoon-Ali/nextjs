"use client";

import Image from "next/image";

export default function Home() {
  const handleGet = async () => {
    const res = await fetch("/api/add");
    const data = await res.json();
    console.log("GET Response:", data);
  };

  const handlePost = async () => {
    let payload = { name: "Zunoon", role: "coder" };

    const res = await fetch("/api/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    console.log("POST Response:", data);
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold">Next.js API GET + POST Demo</h1>
      <div className="mt-4 flex gap-4">
        <button
          onClick={handleGet}
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          Send GET Request
        </button>
        <button
          onClick={handlePost}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Send POST Request
        </button>
      </div>
    </div>
  );
}
