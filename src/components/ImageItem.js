import React from 'react';
import "./css/ImageItem.css";

const ImageItem = (props) => {
    return (
        <div key={props.id} className="image-item">
            <div className="ui card">
                <div className="image">
                    <img alt={props.description} src={props.imageUrl} data-test="image" />
                </div>
                <div className="content">
                    <span className="right floated">
                        <i className="heart outline like icon"></i>
                        {props.likes}
                    </span>
                </div>
                <div className="content download-link">
                    <a href={props.downloadLink} target="_blank" rel="noopener noreferrer" data-test="download-url">Download image</a>
                </div>
            </div>
        </div >);
}

export default ImageItem;