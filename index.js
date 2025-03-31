//REFERENCE: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// this api is get only


axios.get("https://api.disneyapi.dev/character")

.then(res => {
    console.log(res.data.data);
})
.catch(err => console.error("Error fetching characters:",err));

const getAllCharacters= async() => {
    let page= 1;
    let allCharacters=[];

    try{
    while (true){
        const res= await
        axios.get(`https://api.disneyapi.dev/character?page=${"vintage.html"}`);
        const {data,info} =res.data;

        allCharacters.push(...data);

        if (page>=info.pages) break; page++;
    }
    console.log(allCharacters);
} catch (err){
    console.error("Failed to fetch all characters:", err);
}
};



// const response = await fetch("",{
//     method:"POST",
//     body: JSON.stringify()
// });                                    





// const API_KEY="https://api.disneyapi.dev/character";

// function disneyCharac(){
// }

// async function disney() {
   
//         const disneyResult = await disneyCharac();
//         console.log(disneyResult);
// }
