import React from 'react'
import { Route, Routes, useRoutes } from 'react-router-dom';
import Auth from '../components/Auth';
import Blogs from '../components/Blogs';
import UserBlogs from '../components/UserBlogs';
import BlogDetail from '../components/BlogDetail';
import AddBlog from '../components/AddBlog';

const routes =
          <Routes>
          <Route path='/auth' element={<Auth />}></Route>
          <Route path='/blogs' element={<Blogs />}></Route>
          <Route path='/myblogs' element={<UserBlogs />}></Route>
          <Route path='/myblogs/:id' element={<BlogDetail />}></Route>
          <Route path='/blogs/add' element={<AddBlog />}></Route>
        </Routes>
export default routes;
