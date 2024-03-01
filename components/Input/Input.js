import { forwardRef } from "react";


const Input = forwardRef(
  ({ title, error, ...props }, ref) => {
    return (
      <div className="flex flex-col justify-start items-start flex-1">
        <span className="text-gray-600 font-medium text-sm mb-1">{title}</span>
        <input
          ref={ref}
          {...props}
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={`px-4 py-1 border border-gray-300 rounded-md focus:outline-none h-10 w-full shadow ${
            error ? "border-red-400" : ""
          }`}
        />
      </div>
    );
  }
);

export default Input;
