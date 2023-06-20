import { DivContent, DivHome, DivIntro1, DivImg, ImgHome } from './Home-styled';
import ilustration from '../assets/img/mercado-2.jpg'

const Home = () => {

    return (
        <DivContent>
            <DivHome>
                <h1>La super frase principal</h1>
                <h2>la subfrase here</h2>
                
                
            </DivHome>
            <ImgHome src={ilustration} alt="Imagen" /> 
            
            <DivImg>
                
            </DivImg>
        </DivContent>
    )
}
export default Home;