// import Countries from "@/pages/home/components/countries"
import Hero from "@/pages/home/components/hero"
import { lazy, Suspense } from "react"

const CountriesListView = () => {

    const LazyCountries = lazy(() => import("@/pages/home/components/countries"))

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