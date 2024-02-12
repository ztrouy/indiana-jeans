import { saveSurveySubmission } from "./transientState.js"

export const saveSubmission = () => {
    document.addEventListener("click", handleSurveySubmissionClick)

    return `<section><button id="saveSubmission">Save Submission</button></section>`
}

const handleSurveySubmissionClick = (clickEvent) => {
    if (clickEvent.target.id === "saveSubmission") {
        saveSurveySubmission()
    }
}