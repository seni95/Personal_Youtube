import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import SearchHeader from './components/searchHeader';

function App() {
  return <>
  <SearchHeader></SearchHeader>
  <Outlet></Outlet>
  </>
}

export default App;
