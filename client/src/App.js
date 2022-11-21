import './App.css';
import Header from './components/Header';
import React from 'react';
import routes from './routes/Routes';
import { useSelector } from 'react-redux';
function App() {
  const isLoggedIn = useSelector((state)=>state.isLoggedIn)
  console.log(isLoggedIn)
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        {routes}
      </main>
    </React.Fragment>
  );
}

export default App;
