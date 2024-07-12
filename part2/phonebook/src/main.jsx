import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'


const testPhoneBook = [
  {
    name:'Arto Hellas',
    number:'1234567'
  },
  {
    name:'Jane Doe',
    number:'8853372'
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(<App data = {testPhoneBook}/>)