import './App.css';
import Header from './components/Header';
import React from 'react';
import routes from './routes/Routes';
function App() {
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
