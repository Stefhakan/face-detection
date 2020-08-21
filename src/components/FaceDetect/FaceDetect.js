import React from 'react';
import './FaceDetect.css';

const FaceDetect = ({imageUrl, box}) => {
    return (
        <div className='center ma'>
            <div className='absolute mt3 mb3'>
                <img id="inputimage" src={imageUrl} alt='' width='400px' height='auto'/>
                <div className='bounding_box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
    )
}

export default FaceDetect;