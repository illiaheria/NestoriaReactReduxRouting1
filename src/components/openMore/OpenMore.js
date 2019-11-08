import React from 'react';

import './OpenMore.css';

const OpenMore = ({item}) => {
    return(
        <div className='container'> 
            <div className='modal__incontent d-flex'>
                <img src={item.img_url} alt="house"></img>
                <div className='info__text info__model_text'>
                    <h2>{item.title}</h2>
                    <p className='info__price info__modal'> Price:<span>{item.price_formatted}</span></p>
                    <p className='info__about info__modal'>Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                        since the 1500s, when an unknown printer took a galley of type and scrambled it to 
                        make a type specimen book. It has survived not only five centuries, but also the leap
                        into electronic typesetting, remaining essentially unchanged. It was popularised in the
                        1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                        with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OpenMore;