export default function CountryCard({ country }) {
    return (
        <div className="w-48 rounded-xl border border-gray-200 bg-purple-50 p-4 shadow-lg shadow-indigo-500/50  hover:scale-105 transition cursor-pointer">
            <img
                className="h-24 w-full rounded-md"
                src={country.flags.png}
                alt={`${country.name.common} flag`}
            />
            <div className="mt-3 space-y-1">
                <p className="text-sm font-semibold text-gray-900">{country.name.common}</p>
                <p className="text-xs text-gray-600">{country.region}</p>
                <hr className="my-2 h-px border-0 " />
                <p className="text-xs text-gray-600">
                    Capital: {country.capital?.[0] ?? "N/A"}
                </p>
            </div>
        </div>
    )
}
