import { useState } from "react";

const NewItemComponent = (props) => {
    //the state of whether our form is declared to be showing
    const [showing, setShowing] = useState(false)
    //function for showing our form when button is clicked
    const toggleShowing = () => {
        //sets variable equal to its opposite for toggling
        setShowing(!showing)
    }
    //sets 2 types of states to determine whether state is valid
    const [isValidState, setIsValidState] = useState({ valid: true, message: "" })
    //setting an object in state: this state is gonna keep track of what the user has put in the form and build this object as the user updates the form
    const [newItem, setNewItem] = useState({
        productName: "",
        frameType: "",
        frameHeight: "",
        forkBrand: "",
        forkType: "",
        headsetSize: "",
        headsetType: "",
        stemLength: "",
        stemClampSize: "",
        stemAngle: "",
        handlebarType: "",
        seatPostBrand: "",
        seatPostDiameter: "",
        saddleBrand: "",
        brakeType: "",
        frontBrakeBrand: "",
        rearBrakeBrand: "",
        chainRingTeeth: "",
        chainRingBCD: "",
        bottomBracketSize: "",
        bottomBracketType: "",
        crankArmLength: "",
        rimSize: "",
        tireSize: "",
        forkEndSpacing: "",
        dropoutSpacing: "",
        hubTypeFront: "",
        hubTypeRear: "",
        hubLengthFront: "",
        hubLengthRear: "",
        hubSpokeCountFront: "",
        hubSpokeCountRear: "",
        spokeLengthFront: "",
        spokeLengthRear: "",
    })

    //for every input we listen for a change and update the item in state whenever the user changes it
    const handleInputChange = (e) => {
        console.log(e.target.value)
        console.log(e.target.name)
        setNewItem({
            //gives us old properties using e.target(like an event listener) for universal application to all of our properties that we're changing inputs for
            ...newItem,
            [e.target.name]: e.target.value
        })
    }
    //function for submitting a newItem with a clustertruck of frontend validation with error messages which are actually pretty cool
    const submitNewItem = (e) => {
        e.preventDefault()
        let validSubmission = true;
        //prevents user from submitting empty string or 1 character as productName
        if (newItem.productName.length < 2) {
            setIsValidState({
                valid: false,
                message: "Name needs to be longer"
            })
            //if productName input is less than 2 characters, validSubmission state is false
            validSubmission = false;
        }
        if (validSubmission) {
            props.createNewItem(newItem)
            //when submit button is pressed, form is reset to this original state
            setNewItem({
                productName: "",
                frameType: "",
                frameHeight: "",
                forkBrand: "",
                forkType: "",
                headsetSize: "",
                headsetType: "",
                stemLength: "",
                stemClampSize: "",
                stemAngle: "",
                handlebarType: "",
                seatPostBrand: "",
                seatPostDiameter: "",
                saddleBrand: "",
                brakeType: "",
                frontBrakeBrand: "",
                rearBrakeBrand: "",
                chainRingTeeth: "",
                chainRingBCD: "",
                bottomBracketDiameter: "",
                bottomBracketType: "",
                crankArmLength: "",
                rimSize: "",
                tireSize: "",
                forkEndSpacing: "",
                dropoutSpacing: "",
                hubTypeFront: "",
                hubTypeRear: "",
                hubLengthFront: "",
                hubLengthRear: "",
                hubSpokeCountFront: "",
                hubSpokeCountRear: "",
                spokeLengthFront: "",
                spokeLengthRear: "",
            })
            //when submit button is pressed and more than 2 characters, setIsValidState returns as true
            setIsValidState({
                valid: true,
                message: ""
            })
            //closes form after we createNewItem
            setShowing(false);
        }
    }
    return (
        //React fragment
        <>
            {
                //if showing state is true then display this form
                showing
                    ?
                    <div id="new-item-form">

                        <form onSubmit={submitNewItem}>
                            {isValidState.valid ? null : <p className="form-error">{isValidState.message}</p>}
                            {props.newItemServerError ? <p className="form-error">{props.newItemServerError}</p> : null}
                            Bike Name: <input onChange={handleInputChange} type="text" name="productName" value={newItem.productName || ""} /><br/>
                            Frame Type: <input onChange={handleInputChange} type="text" name="frameType" value={newItem.frameType || ""} /><br/>
                            Frame Height: <input onChange={handleInputChange} type="text" name="frameHeight" value={newItem.frameHeight || ""} /><br/>
                            Headset Size: <input onChange={handleInputChange} type="text" name="headsetSize" value={newItem.headsetSize || ""} /><br/>
                            Headset Type: <input onChange={handleInputChange} type="text" name="headsetType" value={newItem.headsetType || ""} /><br/>
                            Stem Length: <input onChange={handleInputChange} type="number" name="stemLength" value={newItem.stemLength || ""} />mm<br/>
                            Fork Brand: <input onChange={handleInputChange} type="string" name="forkBrand" value={newItem.forkBrand || ""} /><br/>
                            Fork Type: <input onChange={handleInputChange} type="text" name="forkType" value={newItem.forkType || ""} /><br/>
                            Stem Clamp Size: <input onChange={handleInputChange} type="text" name="stemClampSize" value={newItem.stemClampSize || ""} /><br/>
                            Stem Rise angle: <input onChange={handleInputChange} type="number" name="stemAngle" value={newItem.stemAngle || ""} />°<br/>
                            Handlebar Type: <input onChange={handleInputChange} type="text" name="handlebarType" value={newItem.handlebarType || ""} /><br/>
                            Seatpost Manufacturer: <input onChange={handleInputChange} type="text" name="seatPostBrand" value={newItem.seatPostBrand || ""} /><br/>
                            Seatpost Diameter: <input onChange={handleInputChange} type="number" name="seatPostDiameter" value={newItem.seatPostDiameter || ""} />mm<br/>
                            Saddle Brand: <input onChange={handleInputChange} type="text" name="saddleBrand" value={newItem.saddleBrand || ""} /><br/>
                            Brake Lever Type: <input onChange={handleInputChange} type="text" name="brakeType" value={newItem.brakeType || ""} /><br/>
                            Front Brake Type: <input onChange={handleInputChange} type="text" name="frontBrakeBrand" value={newItem.frontBrakeBrand || ""} /><br/>
                            Rear Brake Type: <input onChange={handleInputChange} type="text" name="rearBrakeBrand" value={newItem.rearBrakeBrand || ""} /><br/>
                            Chainring Teeth #: <input onChange={handleInputChange} type="text" name="chainRingTeeth" value={newItem.chainRingTeeth || ""} /><br/>
                            Bolt Circle Diameter: <input onChange={handleInputChange} type="number" name="chainRingBCD" value={newItem.chainRingBCD || ""} />mm<br/>
                            Bottom Bracket Type: <input onChange={handleInputChange} type="text" name="bottomBracketType" value={newItem.bottomBracketType || ""} /><br/>
                            Bottom Bracket Shell Width: <input onChange={handleInputChange} type="number" name="bottomBracketSize" value={newItem.bottomBracketSize || ""} />mm<br/>
                            Crank Arm Length: <input onChange={handleInputChange} type="number" name="crankArmLength" value={newItem.crankArmLength || ""} />mm<br/>
                            Rim Size: <input onChange={handleInputChange} type="text" name="rimSize" value={newItem.rimSize || ""} /><br/>
                            Tire Width: <input onChange={handleInputChange} type="number" name="tireSize" value={newItem.tireSize || ""} />"<br/>

                            Fork End Spacing: <input onChange={handleInputChange} type="number" name="forkEndSpacing" value={newItem.forkEndSpacing} />mm<br />
                            Rear Dropout Spacing: <input onChange={handleInputChange} type="number" name="dropoutSpacing" value={newItem.dropoutSpacing} />mm<br />
                            Hub Type Front: <input onChange={handleInputChange} type="text" name="hubTypeFront" value={newItem.hubTypeFront} /><br />
                            Hub Type Rear: <input onChange={handleInputChange} type="text" name="hubTypeRear" value={newItem.hubTypeRear} /><br />
                            Front Hub Length: <input onChange={handleInputChange} type="number" name="hubLengthFront" value={newItem.hubLengthFront} />mm<br />
                            Rear Hub Length: <input onChange={handleInputChange} type="number" name="hubLengthRear" value={newItem.hubLengthRear} />mm<br />
                            Front Hub # of Spokes: <input onChange={handleInputChange} type="number" name="hubSpokeCountFront" value={newItem.hubSpokeCountFront || ""} /><br />
                            Rear Hub # of Spokes: <input onChange={handleInputChange} type="number" name="hubSpokeCountRear" value={newItem.hubSpokeCountRear || ""} /><br/>
                            Front Wheel Spoke Length: <input onChange={handleInputChange} type="number" name="spokeLengthFront" value={newItem.spokeLengthFront || ""} />mm<br/>
                            Rear Wheel Spoke Length: <input onChange={handleInputChange} type="number" name="spokeLengthRear" value={newItem.spokeLengthRear || ""} />mm<br/>

                            <button onClick={toggleShowing}>Close</button>
                            <br />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                    //else
                    :
                    //button is visible when form not showing and when button is clicked shows form
                    <button onClick={toggleShowing}>Create new item</button>
            }

        </>
    )
}

export default NewItemComponent;