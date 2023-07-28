import React from 'react'
import style from './ClothesItem.module.css'

interface ClotheProps {
    id: number,
    name: string,
    img: string,
    price: number,
    discount: number
}

interface ClothesItemProps {
    clothes: ClotheProps;
}

const ClothesItem: React.FC<ClothesItemProps> = ({ clothes }) => {

    const priceStyle = clothes.discount ? style.item_discount : style.item_price

    return (
        <div data-testid='clothes_item' className={style.card}>
            <img className={style.item_image} src={clothes.img} alt={clothes.name} />
            <h2 data-testid="name" className={style.item_title}>{clothes.name}</h2>
            <p data-testid="price" className={priceStyle}>{clothes.price} €</p>
            <div className={style.container_discount}>
                {clothes.discount && <p data-testid="discount" className={style.item_price_discount}>{clothes.discount} €</p>}
            </div>
            <div className={style.container_button}>
                <button className={style.item_button}>Añadir</button>
            </div>
        </div>
    );
};

export default ClothesItem;
