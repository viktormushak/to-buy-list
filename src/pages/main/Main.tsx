import React, {useEffect, useState} from 'react';
import BuyList from "./list/BuyList";
import AddItemForm from "./form/AddItemForm";

const Main: React.FC = () => {

    const [buyItems, setBuyItems] = useState<BuyItem[]>([])

    useEffect(() => {
        setBuyItems(JSON.parse(localStorage.getItem("buyItems") || '[]') as BuyItem[])
    }, [])

    useEffect(() => {
        localStorage.setItem("buyItems", JSON.stringify(buyItems))
    }, [buyItems])

    const addItem = (item: BuyItem) => {
        setBuyItems(prevState => {
            return [item, ...prevState]
        })
    }

    const removeItem = (id: number) => {
        setBuyItems(prevState => {
            return prevState.filter(item => item.id !== id)
        })
    }

    return (
        <main>
            <div className={"container"}>
                <AddItemForm onAddItem={addItem}/>
                <BuyList buyItems={buyItems} onRemove={removeItem}/>
            </div>
        </main>
    )
}

export interface BuyItem {
    id: number
    name: string
    isBought: boolean
}

export default Main;