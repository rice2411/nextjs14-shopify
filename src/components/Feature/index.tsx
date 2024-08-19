"use client";
import { useSelector } from "react-redux";

export default function Feature() {
  const features = useSelector((state: any) => state.features);
  return (
    <div className="flex flex-col justify-center items-center  self-center">
      <div className="p-6 sm:p-8 lg:p-12 text-center text-base sm:text-lg lg:text-xl text-stone-600 ">
        <p>
          <strong className="text-secondary text-3xl">What in this? </strong>
          Everything you need to build great products on the web.
        </p>
      </div>
      <div className="flex justify-center flex-wrap gap-x-16 gap-y-10 ">
        {features?.length &&
          features.map((feature: any) => {
            return (
              <div
                className="border border-stone-700 rounded-md p-2 w-1/4"
                key={feature.id}
              >
                <div className="bg-[linear-gradient(180deg,#242424,#121212_65.62%);] p-6 h-full">
                  <img
                    src={`${feature.icon}`}
                    alt=""
                    className="mb-7 h-12 w-12"
                  />
                  <p className="text-lg">{feature.title}</p>
                  <p className="text-sm text-[#888]  line-clamp-3">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
