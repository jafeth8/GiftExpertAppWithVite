import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('test GifItem', () => {
    const title="shiro";
    const url="https://www.google.com.mx/shiro.jpg";

    test('debe hacer match con el snapshot', () => {
        const {container}=render(<GifItem title={title} url={url}/>);
        expect(container).toMatchSnapshot();
    })
    
    test('img debe mostrar url y alt correctamente', () => {
        render(<GifItem title={title} url={url}/>);
        const {src,alt}=screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
        
    })

})