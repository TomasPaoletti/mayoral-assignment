import { render, screen } from '@testing-library/react'
import Clothes from './Clothes'

describe('test componente Clothes', () => {

    const clothesData = [
        {
            id: 1,
            name: 'T-Shirt',
            img: 'img1.jpg',
            price: 20,
            discount: 10
        },
        {
            id: 2,
            name: 'Jeans',
            img: 'img2.jpg',
            price: 50,
            discount: 5
        }
    ];

    it('Renderizado del elemento en Clothes',() =>{
        render(<Clothes clothesData={clothesData} />)

        const clothes = screen.getByTestId('wrapper_clothes'); 

        expect(clothes).toBeInTheDocument()
    });
})