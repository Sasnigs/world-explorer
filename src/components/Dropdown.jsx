import { useState } from "react"
export default function Dropdown({ setCountries, allCountries }) {
    const [region, setRegion] = useState("")
    function changeRegion(e) {
    const selectedRegion = e.target.value;
    setRegion(selectedRegion);

    if (!selectedRegion) {
      setCountries(allCountries);
      return;
    }

    const filtered = allCountries.filter(
      (country) => country.region === selectedRegion
    );
    setCountries(filtered);
  }

    return (
        <>
            <select value={region} onChange={changeRegion}>
                <option value="">All Regions</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>

        </>
    )
}