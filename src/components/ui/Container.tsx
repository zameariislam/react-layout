import { ReactNode } from "react";



export default function Container({children}:{children:ReactNode}) {
  return (
    <div className=" bg-red-700 w-[1250px] h-full mx-auto ">
      {children}
     
    </div>
  )
}
