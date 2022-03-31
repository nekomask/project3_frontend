import { useState, useEffect } from "react";


const FrameTypeComponent = () => {


    const colorChange = () => {
        let color = document.getElementById('colorInput').value;
        document.querySelector("#root > div > div > div.frameContainer > img").style.backgroundColor = color;
    }


    return (


        <div className="frameContainer">
                        <img src="./images/bmx.png" className="bmx" />
            <p>Select Your Color</p>
            <input type="color" id="colorInput" onClick={colorChange}></input>
            <hr></hr>
        </div>

    )
}

export default FrameTypeComponent;