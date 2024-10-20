import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/default";
import AboutView from "./pages/about/views/about";
import SingleCountryView from "./pages/countries/views/single";
import ContactView from "./pages/contact/views/contact";
import { lazy, Suspense, useState } from "react";
import { translations } from "./language/language";

const LazyCountries = lazy(() => import("@/pages/countries/views/list"));


function App() {
  const [language, setLanguage] = useState('en');
  const selectedLanguage = translations[language];
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout language={language} setLanguage={setLanguage} content={selectedLanguage.header} />}>
            <Route path={`/${language}/`} element={<>{selectedLanguage.home.test}</>}></Route>
            <Route
              path={`/${language}/countries`}
              element={
                <Suspense fallback={<div>Loading ...</div>}>
                  <LazyCountries language={language} content={selectedLanguage.countries} />
                </Suspense>
              }
            ></Route>
            <Route
              path={`/${language}/about`}
              element={<AboutView content={selectedLanguage.aboutUs} />}
            ></Route>
            <Route
              path={`/${language}/contact`}
              element={<ContactView content={selectedLanguage.contact} />}
            ></Route>
            <Route
              path={`/${language}/countries/:id`}
              element={
                <SingleCountryView content={selectedLanguage.countries} />
              }
            />
            <Route
              path="*"
              element={<>{selectedLanguage.notFound.notFound}</>}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
