export async function searchCountryByCode(countryCode) {
    try {
        const res = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}
`)
        if (res.status === 404) {
            return []
        } 
        if(!res.ok){
             throw new Error("Search request failed!!")
        }
        const data = await res.json()
        return data
    } catch (error) {
        console.error(error)
        throw Error
    }
}