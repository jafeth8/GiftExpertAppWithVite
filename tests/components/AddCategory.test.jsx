import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('pruebas en <AddCategory/>', () => {
    test('debe de cambiar el valor de la caja de texto', () => {
        render(<AddCategory onNewValue={ ()=>{} }/>)

        const input=screen.getByRole("textbox");
        
        fireEvent.input(input,{target:{value:'fate stay'}})
        
        //fireEvent.input(input,event)
        console.log(input.value)
        //screen.debug();
        expect(input.value).toBe('fate stay');
    })

    test('debe de llamar onNewCategory si el input tiene un valor', () => {
        const inputValue='Saitama';
        const onNewValue=jest.fn();

        render(<AddCategory onNewValue={ onNewValue }/>)
        const input=screen.getByRole('textbox');
        const form=screen.getByRole('form');
        
        fireEvent.input(input,{target:{value:inputValue}})
        /*el evento submit no necesita de ningun parametro adicional en este caso ya que el metodo submit proporciona
        la informacion necesaria del evento submit */
        fireEvent.submit(form);
        
        expect(input.value).toBe("");

        expect(onNewValue).toHaveBeenCalled();
        expect(onNewValue).toHaveBeenCalledTimes(1);
        expect(onNewValue).toHaveBeenCalledWith(inputValue);

    })

    test('no debe de llamar onNewCategory si el input esta vacio', () => {
        
        const onNewCategory=jest.fn();

        render(<AddCategory onNewValue={onNewCategory}/>);
        
        const form=screen.getByRole('form');
        fireEvent.submit(form);

        expect(onNewCategory).not.toHaveBeenCalled();

    })

})