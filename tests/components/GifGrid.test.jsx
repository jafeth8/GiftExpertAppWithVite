import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe('pruebas en el componente <GifGrid/>', () => {
    
    const category='no game no life';
    
    test('debe de mostrar el loading inicialmente', () => {

        const values={
            dataGifs:[],
            isLoading:true
        }

        useFetchGifs.mockReturnValue(values);

        render(<GifGrid category={category}/>)
        expect(screen.getByText('cargando...'));
        expect(screen.getByText(category));

        //screen.debug();
    })

    test('debe de mostrar items cuando se cargan las imagenes con useFetchGifs', () => {
        const data=[
            {
                id:'ABC',
                title:'No game no life',
                url:'http://localhost/game.png'
            },
            {
                id:'ABCD',
                title:'shiro',
                url:'http://localhost/shiro.png'
            }
        ]

        useFetchGifs.mockReturnValue({isLoading:true, dataGifs:data});
        render(<GifGrid category={category}/>)
        
        expect(screen.getAllByRole('img').length).toBe(2);
        //screen.debug();
    })

})