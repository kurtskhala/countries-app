// import Countries from "@/pages/home/components/countries"
import Hero from "@/pages/countries/components/list/hero"
import { lazy, Suspense } from "react"

const CountriesListView = () => {

    const LazyCountries = lazy(() => import("@/pages/countries/components/list/countries"))

  return (
    <>
        <Hero />
        <Suspense fallback={<div>Loading ...</div>}>
            <LazyCountries />
        </Suspense>
    </>
  )
}

export default CountriesListView