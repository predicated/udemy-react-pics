import React from 'react';

const ImageList = (props) => {
    // console.log(props.images);
    // console.log(props.images[0].urls.regular);   // Why doesn't this work?
    // return <div>ImageList</div>;

    // // Before destructuring
    // const images = props.images.map((image) => {
    //     return <img key={image.id} src={image.urls.regular} alt={image.description} />
    // });

    // Destructured version
    const images = props.images.map(({ id, urls, description }) => {
        return <img key={id} src={urls.small} alt={description} />
    });

    return <div>{images}</div>;
};

export default ImageList;
