import React, {Component} from 'react'

class EditPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
          user: props.user, 
          title: props.post.title,
          description: props.post.description
        };
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
      }
    
      handleTitleChange(e) {
        this.setState({ title: e.target.value });
      }
    
      handleContentChange(e) {
        this.setState({ description: e.target.value });
      }
    

    render(){
        let signedin = false 
        const {post,user} = this.props 
        if (post.user_id == user.id) {
            signedin = true 
        }
        return(

            <div>
                <h1> Edit Post </h1>
                {signedin ? 
                 <div>
           
      
               <input style ={{display:"none"}}
               type ="number"
                name ="post[user_id]"
                readOnly value = {user.id}
               />
               <h2>Title </h2> 
              <input 
                 type="text"
                 name="post[title]"
                 defaultValue={post.title}
                 onChange={this.handleTitleChange}
              ></input>
             
               <h2> Description </h2>
               <input
                 style={{ width:"300px", height:"300px" }}
                 type="text"
                 name="post[description]"
                 defaultValue={post.description}
                 onChange={this.handleContentChange}
               />
       
               <p> <input type="submit" value="Submit Post" /> </p>

             </div>
            : "You must be the original author to edit/delete posts"}
            </div>
            
        )
    }
}

export default EditPost