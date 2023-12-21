const apiUrl = "https://api.thecatapi.com/v1/images/search?api_key";

const showCat = ({ url }) => {
  const image = document.getElementsByClassName("image");
  image.src = url;
};

const callApi = async () => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    showCat(data[0]);
    console.log(data.url);
  } catch (err) {
    console.log("ERRORRR:", err);
    alert("Error at API Fetching");
  }
};

callApi();
