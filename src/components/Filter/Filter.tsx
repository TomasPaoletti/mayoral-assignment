import { NextPage } from 'next'
import styles from './Filter.module.css'
import {IoArrowUp, IoArrowDown, IoSearch}  from "react-icons/io5";


const Filter: NextPage = () => {

    return (
        <div className={styles.container_filter}>
            <input type='search' placeholder='Buscar' id='priceOrder' className={styles.input_filter} />
            <div className={styles.order_price}>
                <IoArrowDown size={28} />
                <IoArrowUp size={28} />
            </div>
        </div>
    )
}

export default Filter
