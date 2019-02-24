import React from 'react';
import ImageItem from './ImageItem';
import "./css/SearchResults.css";

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
    return (
        <div className="search-results-container">
            <div className="results-number">{props.resultsNumber}</div>
            <div className="search-results">{searchResults}</div>
        </div>)
}

export default SearchResults;