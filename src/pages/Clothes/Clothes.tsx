import React from 'react'
import ClothesItem from '../../components/ClothesItem/ClothesItem';
import style from './Clotes.module.css'


interface ClothesItem {
    id: number,
    name: string,
    img: string,
    price: number,
    discount: number
}

interface ClothesProps {
    clothesData: ClothesItem[];
}

const Clothes: React.FC<ClothesProps> = ({ clothesData }) => {

    if (!clothesData) {
        return <div>Loading...</div>;
      }

    return (
        <div data-testid='wrapper_clothes' className={style.wrapper_clothes}>
            {clothesData.map(item => <ClothesItem key={item.id} clothes={item} />)}
        </div>
    )

}

export default Clothes
