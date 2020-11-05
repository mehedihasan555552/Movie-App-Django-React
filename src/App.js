import React, { Component, createContext } from 'react';
import './App.css';
import MovieList from './components/movielist'
import MovieDetail from './components/movie-detail'
import { Button } from 'semantic-ui-react'
import MovieUpdate from './components/movie-update'
import MovieCreate from './components/movie-create'


class App extends Component{

  state = {
    movie : [],
    selected_movie : null,
    edited_movie : null,
    createMovie: null,
  }

  movieEdited = x =>{
    this.setState({edited_movie:x,selected_movie:null})
    // console.log(x)
  }

  componentDidMount(){
    fetch('http://127.0.0.1:8000/api/movie/',
    {method:'GET'
    }).then(resp=>resp.json())
    .then(resp=>this.setState({movie:resp}))
    .catch(error=>console.log(error))
    }

    movieClick = movie =>{
      this.setState({selected_movie:movie,edited_movie:null})
    }

    movieDelete = del_movie =>{
      const moviez = this.state.movie.filter(x => x.id !== del_movie.id)
      this.setState({movie:moviez})

    }

    MovieUpdated = (x) =>{
      fetch(`http://127.0.0.1:8000/api/movie/`,{
        method:'GET',
      }).then(resp=>resp.json())
      .then(resp=>this.setState({movie:resp}))
      .catch(error=>console.log(error))
    }

    createMovie = () =>{
      this.setState({edited_movie:null,createMovie:true})
    }

    addMovie =x => {
      fetch(`http://127.0.0.1:8000/api/movie/`,{
        method:'GET',
      }).then(resp=>resp.json())
      .then(resp=>this.setState({movie:resp}))
      .catch(error=>console.log(error))

    }

  render(){
    return (
      <div className="App">
       <h1>Movie Rater</h1>

       <header className='hello'>
        <MovieList movie={this.state.movie} movieClick = {this.movieClick} movieDelete={this.movieDelete} movieEdited={this.movieEdited}/>
     

        {this.state.selected_movie? <MovieDetail data = {this.state.selected_movie}/> : ''}
        {this.state.edited_movie? <MovieUpdate data= {this.state.edited_movie} movieClicked = {this.MovieUpdated}/> : ''} 
        {this.state.createMovie ? <MovieCreate addMovie ={this.addMovie}/> : ''}
        </header>

        <Button onClick={this.createMovie}>Create a New Movie</Button>
       
      </div>
    );
  }
}


export default App;

