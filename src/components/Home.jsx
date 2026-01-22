import { fetchCountries } from "../services/fetchCountries"
import CountryGrid from "./CountryGrid"
import { useState, useEffect } from "react"
import Search from "./Search"
export default function Home() {
    const [countries, setCountries] = useState([])
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
            {countries.length === 0 ? (
                <div className="py-12 text-center text-gray-500">
                    No countries found. Try a different search.
                </div>
            ) : <CountryGrid countries={countries} />}
        </>
    )
}