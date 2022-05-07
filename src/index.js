import ReactDOM from "react-dom";

import Top from "./components/Top";
import Conteiner from "./components/Conteiner";
import Bottom from "./components/Bottom";

function App(){
    return (
        <div class="root">
            <Top />
            <Conteiner />
            <Bottom />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector("body"));
