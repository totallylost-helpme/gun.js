import './App.css'
import { useEffect, useState, useReducer } from 'react'
import Gun from 'gun'
import faker from '@faker-js/faker'

// Port 5050 is the port of the gun server we previously created
const gun = Gun({
  peers: [
    'http://localhost:5050/gun'
  ]
})

// The messages array will hold the chat messages
const currentState = {
  messages: []
}

// This reducer function will edit the messages array
const reducer = (state, message) => {
  return {
    messages: [message, ...state.messages]
  }
}

function App() {
  const [messageText, setMessageText] = useState('')
  const [state, dispatch] = useReducer(reducer, currentState)

  // fires immediately the page loads
  useEffect(() => {

  }, [])

  // save message to gun / send message
  const sendMessage = () => void { }

  return <div className="App">
    <main>
      <div className='messages'>
        <ul>
          <li className='message'>
            <img alt='avatar' src='https://res.cloudinary.com/follio/image/upload/v1650729202/vhophm5tpnlyaj2h6snf.png' />
            <div>
              
              <span>hello</span>
            </div>
          </li>
        </ul>
      </div>
      <div className='input-box'>
        <input placeholder='Type a message...' />
        <button>Send</button>
      </div>
    </main>
  </div>
}

export default App
