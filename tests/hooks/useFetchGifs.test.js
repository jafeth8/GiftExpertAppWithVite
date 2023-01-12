import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('pruebas en el custom hook useFetchGifs', () => {
    
    test('debe de regresar el estado inicial', () => {
        
        const {result} = renderHook(()=>useFetchGifs('one punch man'));
        const {dataGifs,isLoading}=result.current;
        
        expect(dataGifs.length).toBe(0);
        expect(isLoading).toBeTruthy();
        //console.log(result);
    })

    test('debe de retornar un arreglo de imagenes y isLoading en false', async() => {

        const {result} = renderHook(()=>useFetchGifs('one punch man'));
        //se tiene que cumplir una expresion booleana a true dentro del callback
        await waitFor(()=>expect( result.current.dataGifs.length ).toBeGreaterThan(0));

        const {dataGifs,isLoading}=result.current;

        expect(dataGifs.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
        
    })

})