import React, { Component } from 'react';
import './Gallery.css'
import Data from '../api/movies'
import GalleryList from './GalleryList';
import movies from '../api/movies';
 

class Gallery extends Component {
    state ={
        Movies : Data
      }
      onRemove = (num) =>{
          const {Movies} = this.state
          this.setState({
              Movies:Movies.filter(movie => movie.no !==num)
          })
      }
    render() {    
        const {Movies} = this.state   
        return (
            <div className="Gallery">
                <h2>영화 리스트</h2>
                <GalleryList Movies={Movies} onRemove={this.onRemove} />
            </div>
        );
    }
}

export default Gallery;