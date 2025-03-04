addEventListener('DOMContentLoaded', async function(){
    const urlParam = new URLSearchParams(window.location.search);
    const courseID = urlParam.get("id");
    const response = await fetch(`https://gentle-bold-painter.glitch.me/api/courses/${courseID}`);
    const course = await response.json();

    let heading = "";
    heading += `${course.name}`;
    document.querySelector("h2").innerHTML = heading;

    let html = "";
    html += `
        <h3>Subject Area: ${course.subjectArea}</h3>
        <p>Credit Hours: ${course.creditHours}</p>
        <p>Description: ${course.courseDesc}</p>
    `;

    document.querySelector("#courseDetails").innerHTML = html;
});