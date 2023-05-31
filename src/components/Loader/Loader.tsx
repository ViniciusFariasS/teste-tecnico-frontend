import React from 'react';
import { LOADER } from './Loader.style';
import { images } from '../../utils/imageUtils';



const Loader = () => {
    return (
        <LOADER>
            <img src={images.ball} alt="" />
        </LOADER>
    );
};

export {
    Loader
}






