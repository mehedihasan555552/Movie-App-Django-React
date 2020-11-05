import React, {Component} from 'react';
import {
    Button,
    Checkbox,
    Form,
    Input,
  } from 'semantic-ui-react'

class MovieUpdate extends Component{
    state = {
        movie: this.props.data
    }

    movieChange = event => {
        let mov = this.state.movie
        mov[event.target.name]=event.target.value
        this.setState({movie:mov})
    }

    updateMovie = evt =>{
       fetch(`http://127.0.0.1:8000/api/movie/${this.state.movie.id}/`,{
           method : 'PUT',
           headers:{
               'Content-Type':'application/json',

           },
           body : JSON.stringify(this.state.movie)
       }).then(resp=>resp.json())
       .then(resp=>{this.props.movieClicked(resp)})
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

            <Button type='submit' onClick={this.updateMovie}>Submit</Button>
            
           </div>
        );
    }
}

export default MovieUpdate;