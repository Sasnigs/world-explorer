import CountryCard from "./CountryCard"
export default function CountryGrid({countries}){
    return(
        <>
            {countries.map(country => (
                <CountryCard key={country.cca3} country={country} />
            ))}
        </>
    )
}