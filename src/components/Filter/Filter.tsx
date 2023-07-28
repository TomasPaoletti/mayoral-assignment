import { NextPage } from 'next'
import { ChangeEvent } from 'react'
import { IoArrowUp, IoArrowDown } from "react-icons/io5";
import styles from './Filter.module.css'

interface FilterProps {
    onUp: () => void;
    onDown: () => void;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Filter: NextPage<FilterProps> = ({ onUp, onDown, onChange }) => {

    return (
        <div className={styles.container_filter}>
            <input
                data-testid="search"
                type='search'
                placeholder='Buscar'
                id='search'
                onChange={onChange}
                className={styles.input_filter} />
            <div className={styles.order_price}>
                <IoArrowDown
                    aria-label='arrow_down'
                    style={{ cursor: "pointer" }}
                    size={28}
                    onClick={onDown} />
                <IoArrowUp
                    aria-label='arrow_up'
                    style={{ cursor: "pointer" }}
                    size={28}
                    onClick={onUp} />
            </div>
        </div>
    )
}

export default Filter
