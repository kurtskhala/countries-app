import '@/App.css';
import CountriesListView from './pages/countries/views/list';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/default';
import AboutView from './pages/about/views/about';
import SingleCountryView from './pages/countries/views/single';
import ContactView from './pages/contact/views/contact';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<>Landing</>}></Route>
          <Route path='/countries' element={<CountriesListView />}></Route>
          <Route path='/about' element={<AboutView />}></Route>
          <Route path='/contact' element={<ContactView />}></Route>
          <Route path='/countries/:id' element={<SingleCountryView />} />
          <Route path='*' element={<>Not Found</>}></Route>

        </Route>
      </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
