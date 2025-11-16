"use client"

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const GoogleTagManager = dynamic(
  () => import("@next/third-parties/google").then((mod) => mod.GoogleTagManager),
  { ssr: false }
);

export default function GTMWrapper() {
  const [gtmId, setGtmId] = useState(null);

  useEffect(() => {
    // Only access environment variable on client side
    const id = process.env.NEXT_PUBLIC_GTM;
    if (id) {
      setGtmId(id);
    }
  }, []);

  if (!gtmId) {
    return null;
  }

  return <GoogleTagManager gtmId={gtmId} />;
}

