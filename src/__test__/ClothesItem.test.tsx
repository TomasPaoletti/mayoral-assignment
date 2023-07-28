import {render, screen} from '@testing-library/react'
import ClothesItem from '../components/ClothesItem/ClothesItem'

const mockClothe = {
    id: 1,
    name: "Test Clothe",
    img: "image.jpg",
    price: 50,
    discount: 30,
};

describe('Test componente ClothesItem', () =>{

    it('Renderización de los elementos en el componente', () =>{

        render(<ClothesItem clothes={mockClothe} />);
        const name = screen.getByTestId('name');
        const price = screen.getByTestId('price');
        const discount = screen.getByTestId('discount');

        expect(name).toHaveTextContent(mockClothe.name);
        expect(price).toHaveTextContent(`${mockClothe.price}`);
        expect(discount).toHaveTextContent(`${mockClothe.discount}`)
    })
})