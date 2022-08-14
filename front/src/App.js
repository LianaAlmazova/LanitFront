import { Routes, Route, Link } from 'react-router-dom'

import { FirstLog } from './components/pages/fisrtLog'
import { ResetPassword } from './components/pages/resetPassword'
import { SecondLog } from './components/pages/secondLog'
import { ResetPassword_inputs } from './components/pages/resetPassword_inputs'
import { LinkSent } from './components/pages/linkSent'

function App() {
  return (
    <>
      <div>
        <a href="/">Home</a>
        <a href="/fisrtLog">FirstLog</a>
        <a href="/secondLog">Auth(SecondLog)</a>
        <a href="/resetPassword_inputs">ResetPassword_inputs</a>
      </div>
      <Routes>
        <Route path="/fisrtLog" element={<FirstLog />}/>
        <Route path="/secondLog" element={<SecondLog />}/>
        <Route path="/resetPassword" element={<ResetPassword />}/>
        <Route path="/resetPassword_inputs" element={<ResetPassword_inputs />}/>
        <Route path="/linkSent" element={<LinkSent />}/>
      </Routes>
    </>
  );
}

export default App;
