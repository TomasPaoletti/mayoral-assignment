import { NextPage } from "next";
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

  return (
    <>
      <Filter />
      <Clothes clothesData={clothesData} />
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
