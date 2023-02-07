
import './App.scss';
import { Header } from '../Header/Header';
import { FullBook } from '../FullBook/FullBook';
import { FavoritesBooks } from '../Favorites/Favorites';
import { Basket } from '../Basket/Basket';
import { NewBooks } from '../Blog/Blog';
import { FormSignIn } from '../Forms/FormSignIn/FormSignIn';
import { FormSignUp } from '../Forms/FormSignUp/FormSignUp';
import { FormResertPassword } from '../Forms/FormResertPassword/FormResertPassword';
import { FormNewPassword } from '../Forms/FormNewPassword/FormNewPassword';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { THEMES } from '../Posts/constants';
import { ThemeContext } from '../Posts/contexts';


export const App = () => {
  const [theme, setTheme] = useState(THEMES.light);
  const handleLightTheme = () => {
    setTheme(THEMES.light)
  }
  const handleDarkTheme = () => {
    setTheme(THEMES.dark)
  }
  return (
    <ThemeContext.Provider value={{ theme, handleLightTheme, handleDarkTheme }}>
      <div className={`App--${theme}`} >
        <Header />
        <Routes>
          <Route path='/'>
            <Route index element={<NewBooks />} />
            <Route path='/' element={<NewBooks />} />
            <Route path="fullBook">
              <Route path=":bookId" element={<FullBook />} />
            </Route>
            <Route path='/basket' element={<Basket />} />
            <Route path='/favorites' element={<FavoritesBooks />} />
            <Route path='/sign_in' element={<FormSignIn />} />
            <Route path='sign_up' element={<FormSignUp />} />
            <Route path='reset_password' element={<FormResertPassword />} />
            <Route path='new_password' element={<FormNewPassword />} />
          </Route>
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

