addEventListener("DOMContentLoaded", async function () {
    const response = await this.fetch("https://gentle-bold-painter.glitch.me/api/courses")
    const courses = await response.json()

    let html = ""
    for (let course of courses){
        let courseID = course._id;
        html += `
            <li>${course.name} - ${course.subjectArea} - <a href="details.html?id=${courseID}">Details</a></li>
        `;
    }

    document.querySelector("#list_of_courses").innerHTML = html
    
})