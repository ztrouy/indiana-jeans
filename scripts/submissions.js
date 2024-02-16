export const submissionList = async () => {
    // Get the submissions from your API
    const response = await fetch("http://localhost:8088/submissions")
    const submissions = await response.json()

    // Iterate the submissions and create some <section> representations
    let submissionsHTML = `<article id="submissionList">`

    const articleStringArray = submissions.map(submission => {
        return `<section class="submission">
                    <div>Owns Jeans? ${submission.ownsBlueJeans}</div>
                    <div>Area type foreign key? ${submission.socioLocationId}</div>
                </section>`
    })

    submissionsHTML += `${articleStringArray.join("")}</article>`

    // Return the HTML string
    return submissionsHTML
}