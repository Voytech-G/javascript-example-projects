const getFace = async (e) => {
  e.preventDefault();
  const gender = document.getElementById("gender").value;
  const age = document.getElementById("age").value;
  const ethnicity = document.getElementById("ethnicity").value;
  const url = `https://face-studio.p.rapidapi.com/generate?gender=${gender}&age=${age}&ethnicity=${ethnicity}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "APIKEY",
      "X-RapidAPI-Host": "face-studio.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.blob();
    const image = URL.createObjectURL(result);
    const imageResult = document.createElement("img");
    const paragraph = document.createElement("p");
    paragraph.textContent = url;
    imageResult.src = image;
    document.body.appendChild(paragraph);
    document.body.appendChild(imageResult);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
document.querySelector("#form").addEventListener("submit", getFace);
