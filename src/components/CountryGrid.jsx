import CountryCard from "./CountryCard"
export default function CountryGrid({ countries }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 overflow-x-hidden p-5 max-w-7xl mx-auto
">
      {countries.map(country => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </div>
  )
}