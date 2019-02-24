import React from 'react';

const ImageItem = (props) => {
    return (
        <div key={props.id}>
            <div className="ui card">
                <div className="content">
                    {props.description}
                </div>
                <div className="image">
                    <img alt={props.description} src={props.imageUrl} data-test="image" />
                </div>
                <div className="content">
                    <span className="right floated">
                        <i className="heart outline like icon"></i>
                        {props.likes} likes
                    </span>
                </div>
                <div className="extra content">
                    <a href={props.downloadLink} target="_blank" rel="noopener noreferrer" data-test="download-url">Download image</a>
                </div>
            </div>
        </div >);
}

export default ImageItem;