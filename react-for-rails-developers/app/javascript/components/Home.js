import React, {Component} from 'react'
import Nav from './Home/Nav'
import Item from './Home/Item'
import axios from 'axios'

export default class Home extends Component {
    constructor(props){
        super(props)

        this.state = {
            items: [],
            words: [],
            loaded:false
        }
    }
    
    
    componentDidMount() {
        axios.get('/posts.json')
        .then(data => {
            this.setState({
                items:data.data
            })
        })
        axios.get('/words.json')
        .then(data =>{
       
            let words = data.data
        
            let arr = [] 
       
            for (let i =0;i<3;i++) {
            let num = Math.floor(Math.random() * words.length) 
            if (!arr.includes(words[num]["word"]))
            {
                arr.push(words[num]["word"])
                
            }
            else {
                i--
            }
      
            
        }
        
        this.setState({
            words: arr,
            loaded:true
        })
      
    })
}

 
    render() {
      const {loaded,words} = this.state
      let wordList ="Loading... "
     if (loaded) {
      wordList = words.map( (word) =>{
          return(
             
                  <p>{word}</p>
             
          )
      })
 
      }
       const items = this.state.items.map((item) =>{
           return (
               <Item className ="gridItem" key ={item.id} item = {item}  user = {this.props.test}/>
           )
       })
     
        return(
            <div>
                <Nav user = {this.props.userid} words = {words}/>
              
                 <h2 style ={{textAlign: "center"}}> Today's words are: {wordList} </h2>
               <div className = "grid"> 
                {items}
                </div>
               
            </div>
        )
    }
}