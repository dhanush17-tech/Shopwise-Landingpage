"use client"
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="relative" aria-label="Cruip">
      <svg
        className="w-8 h-8"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient
            cx="50%"
            cy="50%"
            fx="50%"
            fy="50%"
            r="50%"
            id="footer-logo"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#116bee" offset="0%" />
            <stop stopColor="#116bee" offset="25.871%" />
            <stop stopColor="#338CF5" offset="100%" />
          </radialGradient>
        </defs>
        <rect
          width="32"
          height="32"
          rx="16"
          fill="url(#footer-logo)"
          fillRule="nonzero"
        />
      </svg>
      <style jsx>{`
        p {
          position: absolute;
          top: 14%;
          left: 32%;
          font-weight: bold;
          color: white;
        }
      `}</style>
      <p>S</p>
    </Link>
  );
}
