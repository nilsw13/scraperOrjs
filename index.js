import cheerio, { html } from 'cheerio';
import fetch from 'node-fetch';

//const newest20FrancsNapoData = [];

let francsNapo = {
    dataArray: [],
    url: "https://www.loomis-fxgs.fr/produit/20-francs-napoleon/"
}
let francsSuisse = {
    dataArray: [],
    url: "https://www.loomis-fxgs.fr/produit/20-francs-suisse/"
}
let unionLatine = {
    dataArray: [],
    url: "https://www.loomis-fxgs.fr/produit/union-latine/"
}
let souverain = {
    dataArray: [],
    url: "https://www.loomis-fxgs.fr/produit/souverain/"
}
let dollars20 = {
    dataArray: [],
    url: "https://www.loomis-fxgs.fr/produit/20-dollars/"
}
let pesos50 = {
    dataArray: [],
    url: "https://www.loomis-fxgs.fr/produit/50-pesos/"
}
let florins = {
    dataArray: [],
    url: "https://www.loomis-fxgs.fr/produit/10-florins-hollandais/"
}
let kruggerand = {
    dataArray: [],
    url: "https://www.loomis-fxgs.fr/produit/krugerrand-sud-afrique/"
}
let francsNapo10 = {
    dataArray: [],
    url: "https://www.loomis-fxgs.fr/produit/10-francs-napoleon/"
}
let francsTun = {
    dataArray: [],
    url: "https://www.loomis-fxgs.fr/produit/20-francs-tunisie/"
}
let reichMark = {
    dataArray: [],
    url: "https://www.loomis-fxgs.fr/produit/20-reich-mark/"
}


async function fetchData(url, dataArray){
    const respons = await fetch(url);
    const data = await respons.text();
    getCoin(data, dataArray);
    
     
} 


    


Promise.all([
    fetchData(francsNapo.url, francsNapo.dataArray),
    fetchData(francsSuisse.url, francsSuisse.dataArray),
    fetchData(unionLatine.url, unionLatine.dataArray),
    fetchData(souverain.url, souverain.dataArray),
    fetchData(dollars20.url, dollars20.dataArray),
    fetchData(pesos50.url, pesos50.dataArray),
    fetchData(florins.url, florins.dataArray),
    fetchData(kruggerand.url, kruggerand.dataArray),
    fetchData(francsNapo10.url, francsNapo10.dataArray),
    fetchData(francsTun.url, francsTun.dataArray),
    fetchData(reichMark.url, reichMark.dataArray)
]).then(() => {
    // À ce stade, toutes les données sont récupérées et chaque tableau contient les valeurs au même index
    console.log("Données pour les francs Napoléoniens : \n", francsNapo.dataArray[4], francsNapo.dataArray[5], francsNapo.dataArray[7], francsNapo.dataArray[9], francsNapo.dataArray[11], francsNapo.dataArray[14], francsNapo.dataArray[16],"\n");
    console.log("Données pour les francs Suisses : \n", francsSuisse.dataArray[4], francsSuisse.dataArray[5], francsSuisse.dataArray[7], francsSuisse.dataArray[9], francsSuisse.dataArray[11], francsSuisse.dataArray[14], francsSuisse.dataArray[16],"\n");
    console.log("Données pour les union latines : \n", unionLatine.dataArray[4], unionLatine.dataArray[5], unionLatine.dataArray[7], unionLatine.dataArray[9], unionLatine.dataArray[11], unionLatine.dataArray[14], unionLatine.dataArray[16],"\n");
    console.log("Données pour les souverains : \n", souverain.dataArray[4], souverain.dataArray[5], souverain.dataArray[7], souverain.dataArray[9], souverain.dataArray[11], souverain.dataArray[14], souverain.dataArray[16],"\n");
    console.log("Données pour les dollars 20 : \n", dollars20.dataArray[4], dollars20.dataArray[5], dollars20.dataArray[7], dollars20.dataArray[9], dollars20.dataArray[11], dollars20.dataArray[14], dollars20.dataArray[16],"\n");
    console.log("Données pour les pesos 50 : \n", pesos50.dataArray[4], pesos50.dataArray[5], pesos50.dataArray[7], pesos50.dataArray[9], pesos50.dataArray[11], pesos50.dataArray[14], pesos50.dataArray[16],"\n");
    console.log("Données pour les flroins : \n", florins.dataArray[4], florins.dataArray[5], florins.dataArray[7], florins.dataArray[9], florins.dataArray[11], florins.dataArray[14], florins.dataArray[16],"\n");
    console.log("Données pour les kruggerand : \n", kruggerand.dataArray[4], kruggerand.dataArray[5], kruggerand.dataArray[7], kruggerand.dataArray[9], kruggerand.dataArray[11], kruggerand.dataArray[14], kruggerand.dataArray[16],"\n");
    console.log("Données pour les 10 francs napolénonien : \n", francsNapo10.dataArray[4], francsNapo10.dataArray[5], francsNapo10.dataArray[7], francsNapo10.dataArray[9], francsNapo10.dataArray[11], francsNapo10.dataArray[14], francsNapo10.dataArray[16],"\n");
    console.log("Données pour les francs tunisien : \n", francsTun.dataArray[4], francsTun.dataArray[5], francsTun.dataArray[7], francsTun.dataArray[9], francsTun.dataArray[11], francsTun.dataArray[14], francsTun.dataArray[16],"\n");
    console.log("Données pour les reichmark : \n", reichMark.dataArray[4], reichMark.dataArray[5], reichMark.dataArray[7], reichMark.dataArray[9], reichMark.dataArray[11], reichMark.dataArray[14], reichMark.dataArray[16],"\n");
}).catch(error => {
    console.error("Erreur lors de la récupération des données :", error);
});

function getCoin(html, dataArray){
    const $ = cheerio.load(html);
    $(".red").each(function(){
        const value = $(this).text().trim();
        dataArray.push(value);
    });
    $(".value").each(function() {
        const result = $(this).text().trim();
        dataArray.push(result);
    });
    $(".maintitle").each(function() {
        const name = $(this).text().trim();
        dataArray.push(name);
    });
}










