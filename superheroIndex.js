"use strict";

const output = document.querySelector("div#output");

axios.get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json")
    .then(response => {
        console.log("RES:", response)

    
        const squadName = document.createElement("p");
        squadName.innerText = "SquadName: " + response.data.squadName;
        output.appendChild(squadName);

        const secretBase = document.createElement("p");
        secretBase.innerText = "secretBase: " + response.data.secretBase;
        output.appendChild(secretBase);

        const homeTown = document.createElement("p");
        homeTown.innerText = "homeTown: " + response.data.homeTown;
        output.appendChild(homeTown);

        const formed = document.createElement("p");
        formed.innerText = "Formed: " + response.data.formed;
        output.appendChild(formed);


        const member1 = document.createElement("p");
        member1.innerText = "Member1: \n" + response.data.members[0].name
            + "\n" + response.data.members[0].age
            + "\n" + response.data.members[0].secretIdentity
            + "\n" + response.data.members[0].powers[0]
            + "\n" + response.data.members[0].powers[1]
            + "\n" + response.data.members[0].powers[2]
            output.appendChild(member1);

            const member2 = document.createElement("p");
            member2.innerText = "Member2: \n" + response.data.members[1].name
                + "\n" + response.data.members[1].age
                + "\n" + response.data.members[1].secretIdentity
                + "\n" + response.data.members[1].powers[0]
                + "\n" + response.data.members[1].powers[1]
                + "\n" + response.data.members[1].powers[2]
                output.appendChild(member2);

                const member3 = document.createElement("p");
                member3.innerText = "Member3: \n" + response.data.members[2].name
                    + "\n" + response.data.members[2].age
                    + "\n" + response.data.members[2].secretIdentity
                    + "\n" + response.data.members[2].powers[0]
                    + "\n" + response.data.members[2].powers[1]
                    + "\n" + response.data.members[2].powers[2]
                    output.appendChild(member3);
    })