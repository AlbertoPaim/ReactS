"use client"

import { useEffect, useState } from "react";
import { VideoPlayer } from "./components/VideoPlayer";
import { Square } from "./components/Square";
import { Item } from "./types/Item";

const Page = () => {

  const [list, setList] = useState<Item[]>([])

  const addNewItem = (text: string) => {
    setList([...list, {
      id: list.length,
      text,
      done: false
    }]);
  }

  const editiItemText = (id: number, newText: string) => {
    setList(
      list.map(item => {
        if (item.id === id) {
          item.text = newText
        }
        return item;
      })
    )
  }

  const toggleItemStatus = (id: number) => {
    setList(
      list.map(item => {
        if (item.id === id) item.done = !item.done

        return item;
      })
    )
  }


  const deleteItem = (id: number) => {
    setList(
      list.filter(item => {
        return item.id !== id
      })
    )
  }
  return (
    <main className="h-screen w-screen  flex justify-center items-center flex-col gap-10">

    </main>
  )
};

export default Page;