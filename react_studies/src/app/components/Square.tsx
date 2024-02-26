import { useEffect } from "react"


export const Square = () => {
    useEffect(() => {
        console.log("mostrou");
        return () => console.log("limpou");

    })
    return (
        <div className=" h-56 w-56 bg-slate-600">

        </div>
    )

}