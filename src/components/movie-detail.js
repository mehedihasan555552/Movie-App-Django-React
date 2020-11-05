import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
var FontAwesome = require('react-fontawesome');


class MovieDetail extends Component{
    state = {}

    render(){
        return(
           <div>
               <h2>{this.props.data.title}</h2>
              <h3>{this.props.data.description}</h3>

             <FontAwesome name= "star" className={this.props.data.stars>0 ?"starcolor":''}/>
             <FontAwesome name= "star" className={this.props.data.stars>1 ?"starcolor":''}/> 
             <FontAwesome name= "star" className={this.props.data.stars>2 ?"starcolor":''}/> 
             <FontAwesome name= "star" className={this.props.data.stars>3 ?"starcolor":''}/> 
             <FontAwesome name= "star" className={this.props.data.stars>4 ?"starcolor":''}/>  
             
            
           </div>
        );
    }
}

export default MovieDetail;