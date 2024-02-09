import { ownJeansChoices } from "./ownsJeans.js"
import { locationTypeChoices } from "./userLocation.js"

const container = document.querySelector("#container")

const render = async () => {
    const jeanOwnershipHTML = await ownJeansChoices()
    const locationsHTML = await locationTypeChoices()

    container.innerHTML = `
        ${jeanOwnershipHTML}
        ${locationsHTML}`
}

render()