// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import Home from '../components/Home'

 
document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById("testing")
  const data = node.getAttribute('data')
  const userid = node.getAttribute('userid')
  ReactDOM.render(
    <Home test = {data} userid = {userid}/>,
    document.body.appendChild(document.createElement('div')),
  )
})
