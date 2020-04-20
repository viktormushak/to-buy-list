import React, {Component} from 'react';
import BuyList from "./components/BuyList";

class Main extends Component {
    render() {
        return (
            <main>
                <div className={"container"}>
                    <BuyList/>
                </div>
            </main>
        );
    }
}

export default Main;