import React from 'react'
import ReactDOM from 'react-dom'
import NewPost from '../components/NewPost'

 
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <NewPost />,
    document.body.appendChild(document.createElement('div')),
  )
})
