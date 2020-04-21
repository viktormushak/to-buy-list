import React, {Component} from 'react';
import {BuyItem} from "../Main";

class AddItemForm extends Component<AddItemFormPropsInterface> {

    addItem = (event: React.KeyboardEvent) => {
        const target: HTMLInputElement = event.target as HTMLInputElement
        if (event.key === 'Enter' && target.value.trim().length > 0){
            this.props.onAddItem({
                id: Date.now(),
                name: target.value,
                isBought: false
            })
            target.value = ''
        }
    }

    render() {
        return (
            <div>
                <label>
                    <input className={"center-align"} type={"text"} onKeyDown={this.addItem}/>
                </label>
            </div>
        );
    }
}

interface AddItemFormPropsInterface {
    onAddItem: (item: BuyItem) => void
}

export default AddItemForm;