import { useParams, Link } from "react-router-dom";
import { searchCountryByCode } from "../services/searchCountryByCode";
import { useEffect, useState } from "react";
import BorderCountries from "./BorderCountries";

export default function CountryPage() {
    const { cca3 } = useParams();
    const [country, setCountry] = useState(null);
     async function getCountry(code) {
            const data = await searchCountryByCode(code);
            setCountry(data[0]);
        }
    useEffect(() => { getCountry(cca3); }, [cca3]);

    if (!country) {
        return <div>Loading...</div>;
    }

    return (
        <div className="w-1/2 mx-auto">
            <Link to="/">← Back</Link>
            <div className="grid grid-cols-2 md:grid-cols-[300px_1fr] gap-10 items-start mt-9">
                <div>
                    <img
                        className="w-full rounded-md shadow"
                        src={country.flags.png}
                        alt={country.flags.alt}
                    />
                </div>
                <div>
                    <h1 className="text-5xl font-bold mb-5">{country.name.common}</h1>
                    <div className="grid grid-cols-1 gap-x-12 gap-y-3 overflow-x-hidden">
                        <p>
                            <span className="font-semibold">Native Name:</span>{" "}
                            {Object.values(country.name.nativeName)[0].official}
                        </p>

                        <p>
                            <span className="font-semibold">Population:</span>{" "}
                            {country.population.toLocaleString()}
                        </p>

                        <p>
                            <span className="font-semibold">Region:</span>{" "}
                            {country.region}
                        </p>

                        <p>
                            <span className="font-semibold">Capital:</span>{" "}
                            {country.capital?.[0]}
                        </p>
                    </div>
                </div>
            </div>
            <BorderCountries country={country} getCountry={getCountry} />
        </div>
    );
}
