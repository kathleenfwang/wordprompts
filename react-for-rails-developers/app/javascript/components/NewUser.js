import React from 'react'

class NewUser extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: props.post.username,
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
      return (
          
        <div>
            <h1>New Post </h1>
          <h2> Title </h2>
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

  export default NewUser