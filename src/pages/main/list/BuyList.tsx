import React, {Component} from 'react';
import BuyListItem from "./BuyListItem";
import {BuyItem} from "../Main";

class BuyList extends Component<BuyListPropsInterface> {

    render() {
        return (
            <>
                {this.props.buyItems.length === 0
                    ? <h4 className={"center-align"}>Nothing to show</h4>
                    : <ul className={"collection"}>
                        {this.props.buyItems.map(buyItem => {
                            return <BuyListItem buyItem={buyItem}
                                                onRemove={this.props.onRemove}
                                                onSelect={this.props.onSelect}
                                                key={buyItem.id}/>
                        })}
                    </ul>
                }
            </>
        );
    }
}

interface BuyListPropsInterface {
    buyItems: Array<BuyItem>
    onRemove: (id: number) => void
    onSelect: (id: number) => void
}

export default BuyList;