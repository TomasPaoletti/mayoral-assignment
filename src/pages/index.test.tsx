import { render } from '@testing-library/react'
import HomePage from './index'

describe('Test componente index', () =>{

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
    
    it('Renderizado de los elementos', () =>{
        render(<HomePage clothesData={clothesData} />)
    });

})