import { fetchCountries } from "../services/fetchCountries"
import CountryGrid from "./CountryGrid"
import { useState, useEffect } from "react"
import Search from "./Search"
import Dropdown from "./Dropdown"
export default function Home() {
    const [countries, setCountries] = useState([])
    const [allCountries, setAllCountries] = useState([]);
    const [region, setRegion] = useState("All")
    useEffect(() => {
        async function getCountries() {
            const countries = await fetchCountries()
            setAllCountries(countries);
            setCountries(countries)
        }
        getCountries()
    }, [])
    useEffect(() => {
        if (region === "All") {
            setCountries(allCountries);
            return;
        }
        const filtered = allCountries.filter(
            (country) => country.region === region
        );
        setCountries(filtered);
    }, [region, allCountries])

    return (
        <>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <Search setCountries={setCountries} />
                    <Dropdown setRegion={setRegion} region={region} />
                </div>

                {countries.length === 0 ? (
                    <div className="py-12 text-center text-gray-500">
                        No countries found. Try a different search.
                    </div>
                ) : (
                    <CountryGrid countries={countries} />
                )}
            </div>
        </>
    )
}