import { useParams, Link } from "react-router-dom";
import { searchCountryByCode } from "../services/searchCountryByCode";
import { useEffect } from "react";

export default function CountryPage() {
  const { cca3 } = useParams();
  console.log(cca3)
  let country = []
  useEffect(() => {
    async function getCountry() {
        country = await searchCountryByCode(cca3)
    }
    getCountry()
  },[])

  return (
    <div>
      <Link to="/">← Back</Link>
      <h1>Country: {cca3}</h1>
      {/* populate with details from getCountry */}
    </div>
  );
}
