"use client";
import React, { useEffect, useState } from "react";

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

const LoadingSkeleton = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 500); // Change the interval to control the speed of dot increment

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`relative overflow-hidden ${shimmer} rounded-md bg-gray-200 p-4`}
    >
      <span className="relative z-10">Loading{dots}</span>
    </div>
  );
};

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the timeout duration as needed

    return () => clearTimeout(timeout);
  }, []);

  if (!isLoading) {
    return <span>Dashboard</span>;
  }

  return (
    <div>
      <LoadingSkeleton />
    </div>
  );
}
