import React, {Component} from 'react';
import BuyList from "./list/BuyList";
import AddItemForm from "./form/AddItemForm";

class Main extends Component<Readonly<any>, MainStateInterface> {

    constructor(props: Readonly<any>) {
        super(props);
        this.state = {
            buyItems: JSON.parse(localStorage.getItem("buyItems") || "[]") as Array<BuyItem>
        }
    }

    addItem = (item: BuyItem) => {
        this.setState( {
            buyItems: [item, ...this.state.buyItems]
        })
    }

    render() {
        return (
            <main>
                <div className={"container"}>
                    <AddItemForm onAddItem={this.addItem}/>
                    <BuyList buyItems={this.state.buyItems}/>
                </div>
            </main>
        );
    }
}

interface MainStateInterface {
    buyItems: Array<BuyItem>
}

export interface BuyItem {
    id: number
    name: string
    isBought: boolean
}

export default Main;