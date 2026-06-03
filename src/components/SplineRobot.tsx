"use client";

import { Suspense, lazy } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

export default function SplineRobot({ className = "" }: { className?: string }) {
  return (
    <div className={`spline-robot relative h-full w-full bg-transparent ${className}`}>
      <Suspense
        fallback={
          <div className="flex h-full w-full items-center justify-center bg-transparent">
            <div className="h-10 w-10 animate-spin rounded-full border-2 border-[#4361EE]/30 border-t-[#4361EE]" />
          </div>
        }
      >
        <Spline
          scene="https://prod.spline.design/NCQe8dUMReBbPYxM/scene.splinecode"
          style={{ width: "100%", height: "100%", background: "transparent" }}
        />
      </Suspense>
    </div>
  );
}
