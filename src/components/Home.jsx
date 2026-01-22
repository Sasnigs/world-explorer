import { fetchCountries } from "../services/fetchCountries"
import CountryGrid from "./CountryGrid"
import { useState, useEffect } from "react"
import Search from "./Search"
export default function Home() {
    const [countries, setCountries] = useState()
    useEffect(() => {
        async function getCountries() {
            const countries = await fetchCountries()
            setCountries(countries)
        }
        getCountries()
    }, [])
    
    return (
        <>
            <Search setCountries={setCountries} />
           {countries && <CountryGrid countries={countries} />} 
        </>
    )
}