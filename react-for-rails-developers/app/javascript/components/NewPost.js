import React from 'react'

class NewPost extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        user: props.user, 
        title: props.post.title,
        content: props.post.content
      };
      this.handleTitleChange = this.handleTitleChange.bind(this);
      this.handleContentChange = this.handleContentChange.bind(this);
    }
  
    handleTitleChange(e) {
      this.setState({ title: e.target.value });
    }
  
    handleContentChange(e) {
      this.setState({ content: e.target.value });
    }
  
    render() {
        console.log(this.state.username)
      return (
          
        <div>
            <h2> Hello, {this.state.user.username}! </h2>
            <h1>New Post </h1>
 
          <input style ={{display:"none"}}
          type ="number"
           name ="post[user_id]"
           value = {this.state.user.id}
          />
          <h2>Title </h2> 
         <input 
            type="text"
            name="post[title]"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
        
          <h2> Description </h2>
          <input
            style={{ width:"300px", height:"300px" }}
            type="text"
            name="post[description]"
            value={this.state.content}
            onChange={this.handleContentChange}
          />
  
          <p> <input type="submit" value="Submit Post" /> </p>
        </div>
      );
    }
  }

  export default NewPost