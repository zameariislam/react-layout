import { ReactNode } from "react";

export default function Container({children}:{children:ReactNode}) {
  return (
    <div className="w-[1250px]  bg-purple-500 h-full mx-auto p-3 ">
    {children}
    </div>
  )
}