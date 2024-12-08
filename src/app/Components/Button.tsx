import React from "react";

export default function Button(props: any) {
  const { children, className, ...rest } = props;

  return (
    <button
      className={`px-4 py-2 bg-slate-900 text-white rounded-full hover:bg-slate-950 ${className} text-sm`}
      {...rest} // Pass other props like onClick
    >
      {children}
    </button>
  );
}
