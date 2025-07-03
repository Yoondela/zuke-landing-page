// components/ArrowIcon.tsx
export default function ArrowIcon() {
    return (
      <div
        className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
        aria-hidden="true"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width={9} height={8} fill="none">
          <path
            fill="#F97316"
            d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
          />
        </svg>
      </div>
    );
  }
  