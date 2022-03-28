import { useState } from "react"

const SingleItemComponent = (props) => {
        //sets 2 types of states to determine whether state is valid
        const [isValidState, setIsValidState] = useState({ valid: true, message: "" })
    //setting an object in state: this state is gonna keep track of what the user has put in the form
    // and change this object as the user updates the form
    const [showing, setShowing] = useState(false)
    //function for showing our form when button is clicked
    const toggleShowing = () => {
        //sets variable equal to its opposite for toggling
        setShowing(!showing)
    }
    const [updateItem, setUpdateItem] = useState({
        productName: props.item.productName,
        quantity: props.item.quantity,
        _id: props.item._id
    })

    //for every input we listen for a change and update the item in state whenever the user changes it
    const handleInputChange = (e) => {
        console.log(e.target.value);
        console.log(e.target.name);
        setUpdateItem({
            //gives us old properties using e.target(like an event listener) for universal application to all of our properties that we're changing inputs for
            ...updateItem,
            [e.target.name]: e.target.value
        })
    }
    const submitUpdateItem = (e) => {
        e.preventDefault();
        console.log("updating item!")
        //call function from the Parent to be given the form data
        props.updateItem(props.item._id, updateItem);
        setShowing(false)
    }
    return (
        <div className="index-single-item">
            <h2>{props.item.productName}</h2>
            {props.item.quantity > 0
                ?
                <div className="index-single-item-details">
                    <p>Quantity in stock: {props.item.quantity}</p>
                </div>
                :
                <p>Out of stock!</p>
            }
            <button onClick={() => {
                props.deleteItem(props.item._id)
            }}>Delete</button>
{
showing ?
<div id="edit-item-form">
<button onClick={toggleShowing}>x</button>
<form onSubmit={submitUpdateItem}>
    {isValidState.valid ? null : <p className="form-error">{isValidState.message}</p>}
    {props.newItemServerError ? <p className="form-error">{props.newItemServerError}</p> : null}
    Product Name: <input onChange={handleInputChange} type="text" name="productName" value={updateItem.productName} />
    Quantity: <input onChange={handleInputChange} type="number" name="quantity" value={updateItem.quantity} />

    <br></br>
    <button type="submit">Submit</button>
</form>
</div>
:
<button onClick={toggleShowing}>Edit this item</button>
}
<>
</>

        </div>
    )
}

export default SingleItemComponent;