import { NextPage } from "next";
import { useState, ChangeEvent } from 'react'
import Filter from "../components/Filter/Filter";
import Clothes from "./Clothes/Clothes";


interface Clothe {
  id: number,
  name: string,
  img: string,
  price: number,
  discount: boolean
}

interface HomePageProps {
  clothesData: Clothe[];
}

const HomePage: NextPage<HomePageProps> = ({ clothesData }) => {

  // ** States
  const [items, setItems] = useState(clothesData);
  const [itemSearch, setItemSearch] = useState('');

  // ** Const
  // Filtrado por palabras
  const itemsFilter = items.filter((item) => item.name.toLowerCase().includes(itemSearch.toLowerCase()))

  //** Functions
  // Ordenar de mayor a menor por precio
  const handleUp = () =>{
    const itemsPriceUp = [...items].sort((a, b) => b.price - a.price)
    setItems(itemsPriceUp)
  };

  // Ordenar por menor a mayor por precio
  const handleDown = () =>{
    const imtemsPriceDown = [...items].sort((a, b) => a.price - b.price)
    setItems(imtemsPriceDown)
  };

  // Valor del input
  const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setItemSearch(event.target.value);
  };

  return (
    <>
      <Filter onUp={handleUp} onDown={handleDown} onChange={inputChange} />
      <Clothes clothesData={itemsFilter.length !== 0 ? itemsFilter : items} />
    </>
  )
};

export async function getServerSideProps() {
  try {

    await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await fetch("http://localhost:3001/clothes")
    if (!response.ok) {

      return {
        notFound: true
      }

    }
    const clothesData = await response.json();
    return {
      props: {
        clothesData
      }
    }
  } catch (e) {
    console.log(e);

    return {
      notFound: true
    }
  }
}

export default HomePage;
