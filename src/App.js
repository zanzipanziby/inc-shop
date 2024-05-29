import './App.css';
import {Header} from "./component/Header";
import {Container} from "./component/Container";
import {RouterProvider} from "react-router-dom";
import {router} from "./router/router";

function App() {
    return (
        <Container>
            <Header/>
            <RouterProvider router={router}/>
        </Container>


    );
}

export default App;
