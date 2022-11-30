import logo from './logo.svg';
import './App.css';
import LeftBar from './components/LeftBar';
import RightBar from './components/RightBar';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <LeftBar />
      <RightBar />
    </Fragment>
    
  );
}

export default App;
