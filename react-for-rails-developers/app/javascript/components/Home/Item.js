import React, {Component} from 'react'
import axios from 'axios'

export default class Item extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            loaded: false
        }
     
    }
    
    componentDidMount() {
        let id = this.props.item.user_id 
        axios.get('/users/'+ id)
        .then( (data) =>{
             
            this.setState({
                username: data.data,
                loaded: true
            })
        })
    }

 
    
render() {
 
    const {item,user} = this.props
    let posts = "Loading..."
    let buttons = ""
    let num = item.user_id
    const {loaded,username} = this.state 
    let viewMore = "/posts/" + item.id
    if (loaded) {
        posts = 
        <div>
                <h2>{item.title}</h2>
                
                       <h4>By: {username.username}</h4>
                       <p>{item.description}</p>
                       <button> <a href ={viewMore}> View More </a></button>
        </div> 
        if (username.username == user) {
        
            let editUrl = "/posts/" + item.id + "/edit"
            buttons  = 
            <div>
                <button className ="edit"><a href = {editUrl}>Edit </a></button>
          
            </div>
        }
    }
  

        return(
    <>
            <div className ="gridItem"> 
             {posts}
             {buttons} 
             </div>
    </>
        )
        
    
   
        
 
}
}

 