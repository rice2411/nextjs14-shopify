import Button from "../Button";
import { buttons } from "./constant";

export default function Intro() {
  return (
    <div className=" mx-4 sm:mx-10 lg:mx-20 mt-16 sm:mt-24 lg:mt-36 text-secondary">
      {/* Title */}
      <h1 className="p-6 sm:p-10 lg:p-10 text-4xl sm:text-5xl lg:text-7xl font-bold text-center  border border-dashed border-stone-900">
        The React Framework for the Web
      </h1>

      {/* Subtitle */}
      <div className="p-6 sm:p-8 lg:p-12 text-center text-base sm:text-lg lg:text-lg text-stone-600 border border-dashed border-stone-900">
        <p>
          Used by some of the world's largest companies, Next.js enables you to
          create <br />{" "}
          <strong className="text-secondary">
            high-quality web applications
          </strong>{" "}
          with the power of React components.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex  ">
        <div className="border border-dashed border-stone-900 md:w-full hidden"></div>
        <div className="border border-dashed border-stone-900 w-full">
          <div className="flex flex-wrap items-center justify-center p-5 space-x-2">
            {buttons.map((button) => (
              <Button
                key={button.id}
                id={button.id}
                text={button.text}
                icon={button.icon}
                type={button.type}
                className={button.className}
                isLink={button.isLink}
                href={button.href}
              />
            ))}
          </div>
          <button
            aria-label="Copy npx command for creating a new Next.js app"
            className="flex items-center justify-center mb-4 mx-auto px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-stone-900"
            type="button"
          >
            <div>▲ ~ npx create-next-app@latest</div>
            <svg
              className="ml-2 h-4 w-4 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 17C4.89543 17 4 16.1046 4 15V5C4 3.89543 4.89543 3 6 3H13C13.7403 3 14.3866 3.4022 14.7324 4M11 21H18C19.1046 21 20 20.1046 20 19V9C20 7.89543 19.1046 7 18 7H11C9.89543 7 9 7.89543 9 9V19C9 20.1046 9.89543 21 11 21Z"></path>
            </svg>
          </button>
        </div>
        <div className="border border-dashed border-stone-900  md:w-full hidden"></div>
      </div>
    </div>
  );
}
