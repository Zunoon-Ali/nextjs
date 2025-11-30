"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
function page() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug;
  if (!slug) {
    return (
      <h1 className="text-2xl font-bold text-center py-16">No Post Found</h1>
    );
  }
  return (
    <h1 className="text-2xl font-bold text-center py-16">{params.slug}</h1>
  );
}

export default page;
