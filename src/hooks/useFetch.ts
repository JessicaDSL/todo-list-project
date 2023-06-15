/* eslint-disable @typescript-eslint/ban-types */
import { useEffect } from "react";


export function useFetch(currentPage: number, itensPerPage: number, callBack: Function) {

  const getTodoByPage = async () => {
    const response = await fetch(`http://localhost:3000/todolist?_page=${currentPage}&_limit=${itensPerPage}`);
    const data = await response.json();
    console.log('data', data);
    callBack(data);
  }


  useEffect(() => {
    getTodoByPage()
  }, [currentPage])
}