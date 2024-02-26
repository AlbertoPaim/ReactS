"use client"

import { useEffect, useState } from "react";
import { VideoPlayer } from "./components/VideoPlayer";
import { Square } from "./components/Square";

const Page = () => {
  const [show, setShow] = useState(false);

  return (
    <main className="h-screen w-screen  flex justify-center items-center flex-col gap-10">
      {show && <Square></Square>}
      <button onClick={() => setShow(!show)}> Mostrar/Esconder</button>
    </main>
  )
}

export default Page;