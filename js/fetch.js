setInterval(() => {
    fetch('https://meowfacts.herokuapp.com')
        .then(response => {
            if(!response.ok){
                throw new Error("Hálózati válasz nem volt megfelelő.")  
            }
            return response.json();
        })
        .then(data => {
            //document.getElementById("").innerText = data[0];
        })
        .catch(error => {
            console.error("Hiba történt a következő művelet során:", error, " :c");
        })

    
    fetch('https://api.thecatapi.com/v1/images/search?limit=1')
        .then(response => {
            if(!response.ok){
                throw new Error("Hálózati válasz nem volt megfelelő.")  
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("full").style.background = `url(${data[0].url})`;
            console.log(data[0].url)
        })
        .catch(error => {
            console.error("Hiba történt a következő művelet során:", error, " :c");
        })
}, 5000)

