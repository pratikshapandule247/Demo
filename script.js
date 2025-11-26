async function getAPOD() {
    const date = document.getElementById("dateInput").value;
    const API_KEY = "cVu71ht33Dxi5CyuF8xuCBvSzLOfmCu9vn6FVH3E"
    if (!date) {
        alert("Please select a date");
        return;
    }

    const URL =  `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`;

    try {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data)

        document.getElementById("title").innerText = data.title;
        document.getElementById("description").innerText = data.explanation;

        const imageTag = document.getElementById("image");
        const videoFrame = document.getElementById("video");

        if (data.media_type === "image") {
            imageTag.src = data.url;
            imageTag.style.display = "block";
            videoFrame.style.display = "none";
        } else if (data.media_type === "video") {
            videoFrame.src = data.url;
            videoFrame.style.display = "block";
            imageTag.style.display = "none";
        }
    } catch (error) {
        alert("Error fetching data");
        console.error(error);
    }
}

