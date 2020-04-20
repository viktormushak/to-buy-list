import React, {ChangeEvent, Component} from 'react';
import {BuyItem} from "../Main";

class AddItemForm extends Component<AddItemFormPropsInterface> {

    constructor(props: AddItemFormPropsInterface) {
        super(props);
    }

    addItem = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter')
        this.props.onAddItem({
            id: Date.now(),
            name: "event.target",
            isBought: false
        })
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