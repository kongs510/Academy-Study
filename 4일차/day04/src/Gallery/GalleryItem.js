import React, { Component } from 'react';

class GalleryItem extends Component {
    render() {
        const {movie,onRemove} = this.props
        const {no,title,poster,date,actor,director} = movie
        return (
            <div>
                <article>
                    <div className="left">
                        <img src={poster} alt={title} />
                    </div>
                    <div className="right">
                        <h3>{title}</h3>
                        <ul>
                            <li>출연진:{actor}</li>
                            <li>감독:{director}</li>
                            <li>개봉일:{date}</li>
                        </ul>
                        <button onClick={()=>onRemove(no)}>삭제</button>
                    </div>
                </article>
            </div>
        );
    }
}

export default GalleryItem;