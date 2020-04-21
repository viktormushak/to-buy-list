import React, {Component} from 'react';
import {BuyItem} from "../Main";
import './BuyListItem.css'

class BuyListItem extends Component<BuyListItemPropsInterface> {

    render() {
        return (
            <li className="collection-item">
                <label>
                    <input type="checkbox"
                           checked={this.props.buyItem.isBought}
                           onChange={() => this.props.onSelect(this.props.buyItem.id)}/>
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
    onSelect: (id: number) => void
}

export default BuyListItem;