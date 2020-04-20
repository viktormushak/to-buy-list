import React, {Component} from 'react';
import BuyListItem from "./BuyListItem";

class BuyList extends Component<Readonly<any>, BuyListStateInterface> {

    constructor(props: Readonly<any>) {
        super(props);
        this.state = {
            buyList: new Array<any>()
        }
    }

    render() {
        return (
            <>
                {this.state.buyList.length === 0
                    ? <h4 className="center-align">Nothing to show</h4>
                    : <ul className="collection">
                        {this.state.buyList.map(buyItem => {
                            return <BuyListItem buyItem={buyItem}/>
                        })}
                    </ul>
                }
            </>
        );
    }
}

interface BuyListStateInterface {
    buyList: Array<any>
}

export default BuyList;