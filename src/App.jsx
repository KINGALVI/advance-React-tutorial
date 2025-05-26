import './App.css';
import React_Router from './Router/React_Router';

function App() {

  return (
    <>
      {/***** Import and Use React Router Component *****/}
      {/* React_Router manages all route definitions and navigation inside the app */}
      {/* By placing it inside App, we ensure global access to routing functionality */}
      <React_Router />
    </>
  )
}

export default App;