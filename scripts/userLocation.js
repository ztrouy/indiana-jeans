export const locationTypeChoices = async () => {
    const response = await fetch("http://localhost:8088/socioLocations")
    const locations = await response.json()

    let choicesHTML = "<h2>Which tyoe if area do you live in?</h2>"
    for (const location of locations) {
        choicesHTML += `<input type="radio" name="location" value="${location.id}" /> ${location.label}`
    }

    return choicesHTML
}