import { useEffect, useState } from "react";
import { searchCountryByCode } from "../services/searchCountryByCode";
import { Link } from "react-router-dom";

export default function BorderCountries({ country }) {
    const [borders, setBorders] = useState([]);

    useEffect(() => {
        if (!country?.borders) return;

        async function fetchBorders() {
            const results = await Promise.all(
                country.borders.map(code => searchCountryByCode(code))
            );
            setBorders(results.map(res => res[0]));
        }

        fetchBorders();
    }, [country]);

    if (!borders.length) return null;

    return (
        <div className="flex flex-wrap gap-2 mt-19 ">
            {borders.map(border => (
                <Link to={`/country/${border.cca3}`} key={border.cca3}>
                    <div className="w-52 rounded-xl border border-gray-200 bg-purple-50 p-4 shadow-lg shadow-indigo-500/50 hover:scale-105 transition">
                        <img
                            className="h-24 w-full rounded-md object-cover"
                            src={border.flags.png}
                            alt={`${border.name.common} flag`}
                        />

                        <div className="mt-3 space-y-1">
                            <p className="text-sm font-semibold text-gray-900 line-clamp-2">
                                {border.name.common}
                            </p>

                            <p className="text-xs text-gray-600">{border.region}</p>

                            <hr className="my-2 h-px border-0" />

                            <p className="text-xs text-gray-600">
                                Capital: {border.capital?.[0] ?? "N/A"}
                            </p>
                        </div>
                    </div>

                </Link>
            ))}
        </div>
    );
}
