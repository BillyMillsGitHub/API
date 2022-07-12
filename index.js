"use strict";

const output = document.querySelector("div#output");

axios.get("https://pokeapi.co/api/v2/pokemon/charizard")
    .then(response => {
        // document.write("Name:", response.data.name);
        // document.write("Weight:", response.data.weight);
        console.log("RES:",response)
        
        const pokeName = document.createElement("p");
        pokeName.innerText = "Name: " + response.data.name;
        output.appendChild(pokeName);

        const pokeId = document.createElement("p");
        pokeId.innerText = "ID:" + response.data.id;
        output.appendChild(pokeId);

        const pokeWeight = document.createElement("p");
        pokeWeight.innerText = "Weight:" + response.data.weight;
        output.appendChild(pokeWeight);
    })
    .catch(error => console.error(error));

    console.log("YO!");