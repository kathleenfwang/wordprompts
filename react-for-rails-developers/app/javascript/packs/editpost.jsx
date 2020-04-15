import React from 'react'
import ReactDOM from 'react-dom'
import EditPost from '../components/NewPost'

 
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <EditPost />,
    document.body.appendChild(document.createElement('div')),
  )
})
