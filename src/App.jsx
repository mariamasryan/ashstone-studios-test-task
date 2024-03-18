import './App.css'
import { Header } from './components/header'
import { Routes, Route } from 'react-router-dom';
import { Posts } from './pages/posts';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { getData } from './features/actions';

function App() {
  const dispatch= useDispatch()
  useMemo(() => {
    dispatch(getData());
  }, []);

  return (
    <>
       <Header />
       <Routes>
         <Route path='/posts' element={<Posts />}/>
       </Routes>
    </>
  )
}

export default App
