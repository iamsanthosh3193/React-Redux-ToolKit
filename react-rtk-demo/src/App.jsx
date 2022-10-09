import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { IcecreamView } from './features/icecream/icecreamView';
import { CakeView } from './features/cake/cakeView';
import { UserView } from './features/users/usersView';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App flex-col-12">
      <h2>Cake and Icecream Manager</h2>
      <div className="App flex-row-12 sm-flex-col-12 space-between">
        <CakeView />
        <IcecreamView />
        <UserView />
      </div>
    </div>
  )
}

export default App
