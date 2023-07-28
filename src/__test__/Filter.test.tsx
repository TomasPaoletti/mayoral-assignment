import {fireEvent, render, screen} from '@testing-library/react'
import Filter from '../components/Filter/Filter'

describe('Test componente filter', () => { 

    let mockOnChange;
    let mockOnUp;
    let mockOnDown;

    beforeEach(() =>{
        mockOnChange = jest.fn();
        mockOnUp = jest.fn();
        mockOnDown = jest.fn()

        render(<Filter onUp={mockOnUp} onDown={mockOnDown} onChange={mockOnChange} />)
    });
   
    it('Renderización de elementos',() =>{

        const search = screen.getByTestId('search');
        const arrowUp = screen.getByLabelText('arrow_up');
        const arrowDown = screen.getByLabelText('arrow_down');
        
        expect(search).toBeEnabled();
        expect(arrowUp).toBeInTheDocument();
        expect(arrowDown).toBeInTheDocument();
    });

    it('Evento de cambio en el input', () =>{

        const search = screen.getByTestId('search');

        fireEvent.change(search, { target: { value: 'test value' } });

        expect(mockOnChange).toHaveBeenCalledTimes(1);
    });

    it('Evento de click en la flecha de orden ascendiente', () =>{

        const arrowUp = screen.getByLabelText('arrow_up');

        fireEvent.click(arrowUp);

        expect(mockOnUp).toHaveBeenCalledTimes(1);
    });

    it('Evento de click en la flecha de orden descendiente', () =>{

        const arrowDown = screen.getByLabelText('arrow_down');

        fireEvent.click(arrowDown);

        expect(mockOnDown).toHaveBeenCalledTimes(1);
    });
 })