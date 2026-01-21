import { fetchCountries } from "../services/fetchCountries"
import CountryGrid from "./CountryGrid"
import { useState, useEffect } from "react"
export default function Home() {
    const [countries, setCountries] = useState()
    useEffect(() => {
        async function getCountries() {
            const countries = await fetchCountries()
            console.log(countries)
            setCountries(countries)
        }
        getCountries()
    }, [])
    
    return (
        <>
           {countries && <CountryGrid countries={countries} />} 
        </>
    )
}