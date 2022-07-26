import { Routes, Route, Link } from "react-router-dom"

import { FirstLog } from './components/pages/fisrtLog'
import { ResetPassword } from "./components/pages/resetPassword";
import { SecondLog } from './components/pages/secondLog'

function App() {
  return (
    <>
      <div>
        <a href="/">Home</a>
        <a href="/fisrtLog">FirstLog</a>
        <a href="/secondLog">SecondLog</a>
      </div>
      <Routes>
        <Route path="/fisrtLog" element={<FirstLog />}/>
        <Route path="/secondLog" element={<SecondLog />}/>
        <Route path="/resetPassword" element={<ResetPassword />}/>
      </Routes>
    </>

  );
}

export default App;
