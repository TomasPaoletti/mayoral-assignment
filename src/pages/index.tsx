import { NextPage } from "next";
import { useEffect, useState } from "react";

interface ClothesItem {
  id: number,
  name: string,
  img: string,
  price: number,
  discount: boolean
}


const HomePage: NextPage = () => {

  const [clothes, setClothes] = useState<ClothesItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false)

  const getClothes = async () => {

    setLoading(true)
    
    try {

      await new Promise((resolve) => setTimeout(resolve, 3000));
      const response = await fetch("http://localhost:3001/clothes")
      if (!response.ok) {

        throw new Error("Response error")
      }

      const data = await response.json()
      setClothes(data)
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    getClothes();
  }, []);


  return (
    <>
      {loading ?
        <div>
          Cargando...
        </div>
        : <>
          <div>
            <p>Busqueda por texto</p>
            <p>Flecha arriba</p>
            <p>Flecha abajo</p>
          </div>
          <div>
            {clothes.map(item =>{
              return <ul>
                <li key={item.id}>{item.name}</li>
              </ul>
            })}
          </div>
        </>}
    </>);
};

export default HomePage;
