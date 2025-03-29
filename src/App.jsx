
import { Route, Routes } from 'react-router-dom'
import './App.css'

import UserLogin from './pages/UserLogin'
import UserList from './pages/UserList'
import UserProtectWrapper from './pages/UserProtectWrapper'

function App() {
 

  return (
    <div>
     <Routes>
      <Route path='/' element={<UserLogin/>}/>
      <Route path='/userList' element={
          <UserProtectWrapper>
            <UserList/>
          </UserProtectWrapper>
      }
      />
      
     </Routes>
    </div>
  )
}

export default App
