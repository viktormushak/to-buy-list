import React, {Component} from 'react';
import './BuyListItem.css'

class BuyListItem extends Component<BuyListItemPropsInterface> {

    render() {
        return (
            <li className="collection-item">
                <label className={"buy-list-item"}>
                    <input type={"checkbox"}/>
                    <span>Alvin</span>
                </label>
                <i className={"secondary-content material-icons red-text"}>delete</i>
            </li>
        );
    }
}

interface BuyListItemPropsInterface {
    buyItem: any
}

export default BuyListItem;