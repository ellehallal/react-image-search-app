import React from 'react';
import ImageItem from './ImageItem';

const SearchResults = (props) => {
    const images = props.data
    const searchResults = images.map(image => {
        return (
            <ImageItem
                key={image.id}
                id={image.id}
                likes={image.likes}
                description={image.description}
                imageUrl={image.urls.small}
                downloadLink={image.links.download}
            />
        );
    });
    return (<div>{searchResults}</div>)
}

export default SearchResults;