import './App.css';
import Header from './components/Header';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Auth from './components/Auth';
import Blogs from './components/Blogs';
import UserBlogs from './components/UserBlogs';
import AddBlog from './components/AddBlog';
import { authActions } from './store';
import EditBlog from './components/EditBlog';
function App() {
  const dispath = useDispatch();
  const isLoggedIn = useSelector((state)=>state.isLoggedIn)
  useEffect(()=>{
    if(localStorage.getItem('userId')){
      dispath(authActions.login())
    }
  },[dispath])
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          {!isLoggedIn ? (
            <Route path='/auth' element={<Auth />}></Route>
          ) : (
            <>
              <Route path='/blogs' element={<Blogs />} />
              <Route path='/myblogs' element={<UserBlogs />} />
              <Route path='/myblogs/:id' element={<EditBlog />} />
              <Route path='/blogs/add' element={<AddBlog />} />{" "}
            </>
          )}
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
