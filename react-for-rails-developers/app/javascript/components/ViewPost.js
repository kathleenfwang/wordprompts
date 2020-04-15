import React, {Component} from 'react'
import Item from './Home/Item'
class ViewPost extends Component {
    constructor(props){
        super(props)
        this.state = {
            post: this.props.post,
            user:this.props.user
        }
    }

    render() {
        const {post,user} = this.state 
        console.log(user)
         
                return (
                    <div> 
                <h1>View Post </h1>
               <Item key ={post.id} item = {post} user = {user.username}/>
               <button> <a href ="/home"> Home  </a></button>
               </div>
               
           )
         
        
    }
}

export default ViewPost