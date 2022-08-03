import React from 'react';
import logo from './logo.svg';
import Style from './styles/App.module.scss';

function App() {
  return (
    <div className={Style.App}>
      <header className={Style.AppHeader}>
        <img src={logo} className={Style.AppLogo} alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={Style.AppLink}
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
