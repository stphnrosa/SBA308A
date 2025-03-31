//REFERENCE: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// this api is get only

axios
  .get("https://api.disneyapi.dev/character")

  .then((res) => {
    console.log(res.data.data);
  })
  .catch((err) => console.error("Error fetching characters:", err));

const getAllCharacters = async () => {
  let page = 1;
  let allCharacters = [];

  try {
    while (true) {
      const res = await axios.get(
        `https://api.disneyapi.dev/character?page=${"vintage.html"}`
      );
      const { data, info } = res.data;

      allCharacters.push(...data);

      if (page >= info.pages) break;
      page++;
    }
    console.log(allCharacters);
  } catch (err) {
    console.error("Failed to fetch all characters:", err);
  }
};

if (window.location.pathname.includes("vintage.html")) {
  const container = document.getElementById("disneyCharacters");
  axios
    .get("https://api.disneyapi.dev/character?page=1")
    .then((res) => {
      const characters = res.data.data;
      characters.forEach((char) => {
        const charCard = document.createElement("div");
        charCard.style.margin = "1rem";
        charCard.style.background = "#fcefdc";
        charCard.style.padding = "1rem";
        charCard.style.borderRadius = "8px";
        charCard.style.boxShadow = "0 0 5px rgba(0,0,0,0.1)";
        charCard.style.maxWidth = "200px";
        charCard.style.display = "inline-block";

        const name = document.createElement("h4");
        name.textContent = char.name;

        const img = document.createElement("img");
        img.src =
          char.imageUrl || "https://via.placeholder.com/150x150?text=No+Image";
        img.alt = char.name;
        img.style.width = "100%";
        img.style.borderRadius = "8px";

        charCard.appendChild(img);
        charCard.appendChild(name);
        container.appendChild(charCard);
      });
    })
    .catch((err) => {
      console.error("Failed to load characters:", err);
    });
}
