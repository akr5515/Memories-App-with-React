import React, { useEffect } from 'react';
import { Switch,Route,Redirect } from 'react-router-dom';

//redux
import { useDispatch } from 'react-redux';
import { authActions } from './store/auth';

import NavBar from './components/NavBar/navbar';



import HomePage from './pages/HomePage/home-page';
import LoginPage from './pages/LoginPage/login';
import OthersMemories from './pages/OthersMemories/others-memories';
import ProfilePage from './pages/ProfilePage/profile';
import RegisterPage from './pages/RegisterPage/register';
import PostDetail from './pages/postDetail';
import { userActions } from './store/username';


const App=()=>{
  const dispatch= useDispatch();
  useEffect(()=>{
    const storedUserLoggedInfo= localStorage.getItem('isLoggedIn');
    const storedUserName= localStorage.getItem('username');
    
    
    ;
    if(storedUserLoggedInfo==='1'){
      dispatch(authActions.login());
      dispatch(userActions.setUser(storedUserName))
    }
  })
  
  return(
    <div>
      <NavBar />
      <Switch>
        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>
        <Route path='/home' exact><HomePage/></Route>
        <Route path='/login'><LoginPage/></Route>
        <Route path='/profile'><ProfilePage/></Route>
        <Route path='/others'exact><OthersMemories/></Route>
        <Route path='/others/:postId'><PostDetail/></Route>
        <Route path='/register'><RegisterPage/></Route>
      </Switch>
    </div>
  )
}

export default App;
