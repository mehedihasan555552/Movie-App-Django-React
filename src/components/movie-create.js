import React, {Component} from 'react';
import {
    Button,
    Form,
    Input,
  } from 'semantic-ui-react'

class MovieCreate extends Component{
    state = {
        movie: {'title': '','description':'','stars':''}
    }

    movieChange = event =>{
        let mov = this.state.movie
        mov[event.target.name]=event.target.value
        this.setState({movie:mov})
    }

    createMovie = event => {
        fetch(`http://127.0.0.1:8000/api/movie/`,{
           method:'POST',
           headers:{
               'Content-Type':'application/json',
           },
           body : JSON.stringify(this.state.movie) 
        }).then(resp=>resp.json())
        .then(resp=>this.props.addMovie(resp))
        .catch(error=>console.log(error))
    }

    

    render(){
        return(
           <div>
            <Form.Field>
            <label>Enter Movie Name</label>
            <Input   placeholder='Name' value = {this.state.movie.title} onChange= {this.movieChange} name='title'/>
            </Form.Field>

            <Form.Field>
            <label className="movietitle">Enter Movie Description</label>
            <Input placeholder='Description' value = {this.state.movie.description} onChange= {this.movieChange} name='description'/>
            </Form.Field>

            <Form.Field>
            <label className="movietitle">Enter Movie Review</label>
            <Input placeholder='Review' value = {this.state.movie.stars} onChange= {this.movieChange} name='stars'/>
            </Form.Field>

            <Button type='submit' onClick={this.createMovie}>Submit</Button>
            
           </div>
        );
    }
}

export default MovieCreate;