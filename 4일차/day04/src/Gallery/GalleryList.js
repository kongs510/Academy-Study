import React, { Component } from 'react';
import GalleryItem from './GalleryItem';

class GalleryList extends Component {
    render() {      
        const {Movies,onRemove} = this.props
        return (
            <div className="list">
              {
                  Movies.map(movie => <GalleryItem 
                            key={movie.no}
                            movie={movie}
                            onRemove={onRemove}
                  />)
              }
            </div>
        );
    }
}

export default GalleryList;