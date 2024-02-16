import { setSocioLocationId } from "./transientState.js"

export const locationTypeChoices = async () => {
    document.addEventListener("change", handleLocationChange)
    
    const response = await fetch("http://localhost:8088/socioLocations")
    const locations = await response.json()

    let choicesHTML = "<section><h2>Which type of area do you live in?</h2>"
    
    const inputStringArray = locations.map(location => {return `<input type="radio" name="location" value="${location.id}" /> ${location.label}`})

    choicesHTML += `${inputStringArray.join("")}</section>`

    return choicesHTML
}

const handleLocationChange = (changeEvent) => {
    if (changeEvent.target.name === "location") {
        const convertedToInteger = JSON.parse(changeEvent.target.value)
        setSocioLocationId(convertedToInteger)
    }
}