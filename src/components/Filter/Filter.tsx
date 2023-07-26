import { NextPage } from 'next'
import { ChangeEvent } from 'react'
import styles from './Filter.module.css'
import { IoArrowUp, IoArrowDown } from "react-icons/io5";

interface FilterProps {
    onUp: () => void;
    onDown: () => void;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Filter: NextPage<FilterProps> = ({ onUp, onDown, onChange }) => {

    return (
        <div className={styles.container_filter}>
            <input
                type='search'
                placeholder='Buscar'
                id='priceOrder'
                onChange={onChange}
                className={styles.input_filter} />
            <div className={styles.order_price}>
                <IoArrowDown
                    style={{ cursor: "pointer" }}
                    size={28}
                    onClick={onDown} />
                <IoArrowUp
                    style={{ cursor: "pointer" }}
                    size={28}
                    onClick={onUp} />
            </div>
        </div>
    )
}

export default Filter
