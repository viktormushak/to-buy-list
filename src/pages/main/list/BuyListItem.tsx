import React, {Component} from 'react';
import {BuyItem} from "../Main";
import './BuyListItem.css'

class BuyListItem extends Component<BuyListItemPropsInterface> {

    render() {
        return (
            <li className="collection-item">
                <label>
                    <input type="checkbox"/>
                    <span className={"black-text"}>{this.props.buyItem.name}</span>
                </label>
                <i className={"remove-item-button secondary-content material-icons red-text"}
                   onClick={() => this.props.onRemove(this.props.buyItem.id)}>delete</i>
            </li>
        );
    }
}

interface BuyListItemPropsInterface {
    buyItem: BuyItem
    onRemove: (id: number) => void
}

export default BuyListItem;