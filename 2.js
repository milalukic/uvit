const takmicari = [
    { naziv: "ZITTI E BUONI", izvodjac: "Måneskin", zemlja: "Italija", poeni: 0 },
    { naziv: "SHUM", izvodjac: "Go_A", zemlja: "Ukrajina", poeni: 0 },
    { naziv: "Dark Side", izvodjac: "Blind Channel", zemlja: "Finska", poeni: 0 },
    { naziv: "Je me casse", izvodjac: "Destiny", zemlja: "Malta", poeni: 0 },
    { naziv: "Last Dance", izvodjac: "Stefania", zemlja: "Grčka", poeni: 0 },
    { naziv: "Sugar", izvodjac: "Natalia Gordienko", zemlja: "Moldavija", poeni: 0 },
    { naziv: "Loco", izvodjac: "Hurricane", zemlja: "Srbija", poeni: 0 },
    { naziv: "El Diablo", izvodjac: "Elena Tsagrinou", zemlja: "Kipar", poeni: 0 },
    { naziv: "Mata Hari", izvodjac: "Efendi", zemlja: "Azerbejdžan", poeni: 0 },
    { naziv: "Adrenalina", izvodjac: "Senhit", zemlja: "San Marino", poeni: 0 },
    { naziv: "Tick-Tock", izvodjac: "Albina", zemlja: "Hrvatska", poeni: 0 },
    { naziv: "The Wrong Place", izvodjac: "Hooverphonic", zemlja: "Belgija", poeni: 0 },
];

const prikaz = document.getElementById('lista');
const lista = document.createElement('ul');

for(let t of takmicari){
    const tekuciClan = document.createElement('li');

    let formatClana = "[" + t.zemlja + "]" + t.izvodjac + "-" + t.zemlja + ":" + t.poeni;
    let tekuciTekst = document.createTextNode(formatClana);

    tekuciClan.appendChild(tekuciTekst);

    tekuciTekst.addEventListener('click', function(){

        let noviBrPoena = t.poeni;
        noviBrPoena += 1;

        tekuciClan.removeChild(tekuciTekst);
        formatClana = "[" + t.zemlja + "]" + t.izvodjac + "-" + t.zemlja + ":" + noviBrPoena;
        tekuciTekst.replaceWith(formatClana);

        tekuciClan.appendChild(tekuciTekst);
    });

    lista.appendChild(tekuciClan)
}

prikaz.appendChild(lista);
