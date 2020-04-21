import React, {Component} from 'react';
import {BuyItem} from "../Main";

class BuyListItem extends Component<BuyListItemPropsInterface> {

    render() {
        return (
            <li className="collection-item">
                <label>
                    <input type="checkbox" />
                    <span className={"black-text"}>{this.props.buyItem.name}</span>
                </label>
                <i className={"secondary-content material-icons red-text"}>delete</i>
            </li>
        );
    }
}

interface BuyListItemPropsInterface {
    buyItem: BuyItem
}

export default BuyListItem;