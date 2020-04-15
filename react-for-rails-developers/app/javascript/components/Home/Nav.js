import React, {Component} from 'react'
import axios from 'axios'
class Nav extends Component {
    constructor(props){
        super(props)
        this.state = {
            userid: ""
        }
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount() {
        console.log(this.props.user)
        this.setState({
            userid: (this.props.user)
        })
    }
    handleDelete = event => {
        console.log('clicked, ', this.state.userid)
        console.log(this.state.userid)
        event.preventDefault();
        
        axios.delete(`users/${this.state.userid}`)
          .then(res => {
            console.log(res);
            
          })
          .catch(e => console.log(e.response))
      }

    render(){
        return(
            <div className ="Nav">
                <ul>
           
                    <li> <a href ="/posts/new"> Create Post </a></li>
       
                </ul>
            </div>
        )
    }
}
 
export default Nav 