import Style from './styles/App.module.scss';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';

function App() {
  return (
    <div className={Style.App}>
      <FirstPage />
      <SecondPage />
    </div>
  );
}

export default App;
