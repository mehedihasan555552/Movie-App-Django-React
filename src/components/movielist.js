import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';


class MovieList extends Component{
    state = {
        movie: []
    }

    movieClick = x => evt =>{
        {this.props.movieClick(x)}
    }

    movieDelete = x => evt =>{
        fetch(`http://127.0.0.1:8000/api/movie/${x.id}/`,{
            method:'DELETE',

        }).then(resp=>console.log(resp))
        .catch(error=>console.log(error))
        {this.props.movieDelete(x)}
    }

    movieEdit =x => evt =>{
        {this.props.movieEdited(x)}
    }

    render(){
        return(
            <div>

             {this.props.movie.map(x=>
             <div>
             
             <h2 key={x.id} onClick={this.movieClick(x)}>{x.title}</h2>
             <FontAwesome name="trash" onClick={this.movieDelete(x)}/>
             <FontAwesome name="edit" onClick={this.movieEdit(x)}/>
             </div>
             )}

        
        
            </div>
        );
    }
}

export default MovieList;