import { ownJeansChoices } from "./ownsJeans.js"
import { saveSubmission } from "./saveSubmission.js"
import { submissionList } from "./submissions.js"
import { locationTypeChoices } from "./userLocation.js"

const container = document.querySelector("#container")

const render = async () => {
    const jeanOwnershipHTML = await ownJeansChoices()
    const locationsHTML = await locationTypeChoices()
    const buttonHTML = await saveSubmission()
    const submissionListHTML = await submissionList()

    container.innerHTML = `
        <article id="survey">
            ${jeanOwnershipHTML}
            ${locationsHTML}
            ${buttonHTML}
        </article>
        ${submissionListHTML}`
}

document.addEventListener("newSubmissionCreated", render)

render()