"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

const ClientContent = () => {
  const searchParams = useSearchParams();

  const username = searchParams.get("username");
  const social = searchParams.get("social");

  return (
    <div>
      HEY THIS IS MY HOME BLOG FORUM **{username}** OF SOCIAL MEDIA **{social}**
    </div>
  );
};

export default ClientContent;
