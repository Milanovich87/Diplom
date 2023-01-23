
import './App.scss';

import { Blog } from '../Blog/Blog';
import { Header } from '../Header/Header';
import { Route, Routes, Link, useParams } from 'react-router-dom'
import { FullBook } from '../FullBook/FullBook';
import { useSelector } from 'react-redux';
import { IStore } from '../../redux/types';
import { Basket } from '../Basket/Basket';


export const App = () => {
  const { bookId } = useParams()

  return (

    <div className={`App`} >
      <Header />
      <Routes>
        <Route path='/'>
          <Route index element={<Blog />} />
          <Route path='/fullBook/:bookId' element={<FullBook variant={'middle'} />} />
          <Route path='/basket' element={<Basket />} />

        </Route>
      </Routes>
    </div>

  );
}


