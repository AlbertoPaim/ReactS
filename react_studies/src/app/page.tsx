"use client"

import { useEffect, useState } from "react";

const Page = () => {
  const [name, setName] = useState('Alberto');
  const [age, setAge] = useState(10);



  useEffect(() => {
    console.log("funcionou");
  }, [age])

  return (
    <main className="h-screen w-screen  flex justify-center items-center flex-col gap-10">
      <p>meu nome é {name}</p>
      <p>tenho {age} anos</p>
      <button className=" bg-slate-600 p-4 rounded-md" onClick={() => setName('Luana')}>Mudar para Luana</button>
      <button className=" bg-slate-600 p-4 rounded-md" onClick={() => setName('Alberto')}>Mudar para Alberto</button>
      <button className=" bg-slate-600 p-4 rounded-md" onClick={() => setAge(90)}>Mudar para 90 anos</button>
      <button className=" bg-slate-600 p-4 rounded-md" onClick={() => setAge(10)}>Mudar para 10 anos</button>

    </main>
  )
}

export default Page;