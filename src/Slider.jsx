import React, { useState } from 'react'
import './App.css'
import Url from './Url';

function Slider() {
    const [image , showImage] = useState(0);

    function showPreviousImage(){
        if(image > 0) showImage(image - 1)
    }
    function showNextImage(){
        if(image < Url.length - 1) showImage(image + 1)
    }
    return (
        <div className='mainElement'>
            <button onClick={showPreviousImage}> Previous </button>
            <img src={Url[image]} alt="Bunny"  width={400} height={400} />
            <button onClick={showNextImage}> Next </button>
        </div>
    )
}

export default Slider