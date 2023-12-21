const apiUrl = "https://randomfox.ca/floof/";

const showFox = ({ image }) => {
  const img = document.getElementsByClassName("image");
  img.src = image;
};

const callApi = async () => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    showFox(data);
    console.log(data.image);
  } catch (err) {
    console.log("ERRORRR:", err);
    alert("Error at API Fetching");
  }
};

callApi();
