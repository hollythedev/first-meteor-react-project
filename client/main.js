//Any JS in here is automatically run 


//Imports the React library here

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from './components/image_list';


//Create a component
class App extends Component {
constructor (props){
    super(props);

    this.state= {images: [] };
}

    //great place to load contact 
    componentWillMount(){
        axios.get('https://api.imgur.com/3/gallery/hot/viral/0') 
.then(response => this.setState({images: response.data.data}));
    }

    render (){
    return(
        <div>
        <ImageList images= {this.state.images}/> 
        </div>
    );
    };
};

//Render this component to the screen
Meteor.startup(() => {
ReactDOM.render(<App />, document.querySelector('.container')); 

});
