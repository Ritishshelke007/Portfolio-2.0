import React from "react";

const Skeleton = ({ height, widht }) => {
  return (
    <div
      className={`rounded-full bg-gray-300 dark:bg-slate-500 animate-pulse w-[${widht}] h-[${height}] `}
    ></div>
  );
};

export default Skeleton;
