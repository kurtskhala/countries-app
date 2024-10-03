import '@/App.css';
import CountriesListView from './pages/home/views/list';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/default';
import AboutView from './pages/about/views/about';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<CountriesListView />}></Route>
          <Route path='/about' element={<AboutView />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
