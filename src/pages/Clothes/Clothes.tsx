import React from 'react'
import ClothesItem from 'components/ClothesItem/ClothesItem';
import style from './Clotes.module.css'


interface ClothesItem {
    id: number,
    name: string,
    img: string,
    price: number,
    discount: boolean
}

interface ClothesProps {
    clothesData: ClothesItem[];
}

const Clothes: React.FC<ClothesProps> = ({ clothesData }) => {

    return (
        <div className={style.wrapper_clothes}>
            {clothesData.map(item => <ClothesItem key={item.id} clothes={item} />)}
        </div>
    )

}

export default Clothes
