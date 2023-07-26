import React from 'react'
import style from './ClothesItem.module.css'

interface ClotheProps {
    id: number,
    name: string,
    img: string,
    price: number,
    discount: boolean
}

interface ClothesItemProps {
    clothes: ClotheProps;
}

const ClothesItem: React.FC<ClothesItemProps> = ({ clothes }) => {

    const priceStyle = clothes.discount ? style.item_discount : style.item_price

    return (
        <div className={style.card}>
                <img className={style.item_image} src={clothes.img} alt={clothes.name} />
                <h2 className={style.item_title}>{clothes.name}</h2>
                <p className={priceStyle}>{clothes.price} €</p>
                {clothes.discount && <p className={style.item_price_discount}>{clothes.discount} €</p>}
                <div className={style.container_button}>
                <button className={style.item_button}>Añadir</button>
                </div>
        </div>
    );
};

export default ClothesItem;
