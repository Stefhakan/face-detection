import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <p className='f4 white'>
                {`This webpage can detect faces from your pictures. Try it out yourself.`}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f6 pa2 w-70 center' type='text' onChange={onInputChange}></input>
                    <button 
                        className='w-30 grow f5 link ph3 pv2 dib white bg-gold' 
                        onClick={onButtonSubmit}>Detect
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;