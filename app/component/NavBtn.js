import Link from "next/link";

export default function NavBtn({ to, children, tooltip, position = "bottom", className }) {
  const positionClasses = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-1",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-1",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-1",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-1",
  };

  return (
    <div className="relative group inline-block">
      <Link href={to}>
        <button
          type="button"
          className={`text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 
                hover:bg-gradient-to-br focus:ring-4 focus:outline-none
                font-medium focus:ring-cyan-300 dark:focus:ring-cyan-800 
                rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ${className}`}>
          {children}
        </button>
      </Link>
      {tooltip && (
        <div
          className={`absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-200 
                      bg-gray-800 text-white text-sm rounded-lg py-1 px-2 whitespace-nowrap ${positionClasses[position]}`}>
          {tooltip}
        </div>
      )}
    </div>
  );
}
