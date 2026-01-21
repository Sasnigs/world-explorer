export async function fetchCountries() {
    try {
        const res = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,region,subregion,capital,population,currencies,languages,borders,cca3")
        if (!res.ok){
            throw new Error("Request failed")
        }
        const data = await res.json()
        console.log(data)
        return data
    } catch (error) {
        console.error(error)
        throw error
    }
    
}
