import {BrowserRouter} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {Content} from "./components/Content/Content";
import {Footer} from "./components/Footer/Footer";
import {Button} from "./components/Button/Button";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Content/>
                <Footer/>
                <Button title={'Кнопка 1'}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
