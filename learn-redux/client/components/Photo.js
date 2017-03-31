import React from 'react';

const Photo = React.createClass({
    render(){
        return(
            <figure className="grid-figure">
                <div className="single-photo">
                    <img className="grid-photo" src={this.props.post.display_src} />
                </div>
            </figure>
        );
    };
});

export default Photo;