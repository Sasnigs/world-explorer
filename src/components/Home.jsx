import { fetchCountries } from "../services/fetchCountries"
import CountryGrid from "./CountryGrid"
import { useState, useEffect } from "react"
import Search from "./Search"
import Dropdown from "./Dropdown"
export default function Home() {
    const [countries, setCountries] = useState([])
    const [allCountries, setAllCountries] = useState([]);
    useEffect(() => {
        async function getCountries() {
            const countries = await fetchCountries()
            setAllCountries(countries);
            setCountries(countries)
        }
        getCountries()
    }, [])

    return (
        <>
            <Search setCountries={setCountries} />
            <Dropdown allCountries={allCountries} setCountries={setCountries} />
            {countries.length === 0 ? (
                <div className="py-12 text-center text-gray-500">
                    No countries found. Try a different search.
                </div>
            ) : <CountryGrid countries={countries} />}
        </>
    )
}