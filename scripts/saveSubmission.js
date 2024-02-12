import { saveSurveySubmission } from "./transientState.js"

export const saveSubmission = () => {
    document.addEventListener("click", handleSurveySubmissionClick)

    return `<button id="saveSubmission">Save Submission</button>`
}

const handleSurveySubmissionClick = (clickEvent) => {
    if (clickEvent.target.id === "saveSubmission") {
        saveSurveySubmission()
    }
}