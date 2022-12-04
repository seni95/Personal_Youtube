import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import SearchHeader from './components/searchHeader';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { YoutubeApiProvider } from './Context/YoutubeApiContext';


const queryClient = new QueryClient();

function App() {
  return <>
  <SearchHeader></SearchHeader>
  <YoutubeApiProvider>
  <QueryClientProvider client={queryClient}>
  <Outlet></Outlet>
  </QueryClientProvider>
  </YoutubeApiProvider>
  </>
}

export default App;
