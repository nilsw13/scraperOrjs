import * as cheerio from 'cheerio';
import fetch from 'node-fetch';


const coinList = ["francsNapo",
    "francsSuisse",
    "unionLatine",
    "dollars20",
    "pesos50",
    "florins",
    "kruggerand",
    "francsNapo10",
    "francsTun"
]

const coins = {
    francsNapo : {
        dataArray: [],
        url: "https://www.loomis-fxgs.fr/produit/20-francs-napoleon/"
    },

    francsSuisse :{
        dataArray: [],
        url: "https://www.loomis-fxgs.fr/produit/20-francs-suisse/"
    },

    unionLatine: {
        dataArray: [],
        url: "https://www.loomis-fxgs.fr/produit/union-latine/"
    },

    souverain: {
        dataArray: [],
        url: "https://www.loomis-fxgs.fr/produit/souverain/"
    },

    dollars20: {
        dataArray: [],
        url: "https://www.loomis-fxgs.fr/produit/20-dollars/"
    },

    pesos50: {
        dataArray: [],
        url: "https://www.loomis-fxgs.fr/produit/50-pesos/"
    },

    florins: {
        dataArray: [],
        url: "https://www.loomis-fxgs.fr/produit/10-florins-hollandais/"
    },

    kruggerand: {
        dataArray: [],
        url: "https://www.loomis-fxgs.fr/produit/krugerrand-sud-afrique/"
    },

    francsNapo10: {
        dataArray: [],
        url: "https://www.loomis-fxgs.fr/produit/10-francs-napoleon/"
    },

    francsTun : {
        dataArray: [],
        url: "https://www.loomis-fxgs.fr/produit/20-francs-tunisie/"
    },
     reichMark : {
         dataArray: [],
         url: "https://www.loomis-fxgs.fr/produit/20-reich-mark/"
     }

}
async function fetchData(url, dataArray){
    const respons = await fetch(url);
    const data = await respons.text();
    getCoin(data, dataArray);
}

Promise.all([
    fetchData(coins.francsNapo.url, coins.francsNapo.dataArray),
    fetchData(coins.francsSuisse.url, coins.francsSuisse.dataArray),
    fetchData(coins.unionLatine.url, coins.unionLatine.dataArray),
    fetchData(coins.souverain.url, coins.souverain.dataArray),
    fetchData(coins.dollars20.url, coins.dollars20.dataArray),
    fetchData(coins.pesos50.url, coins.pesos50.dataArray),
    fetchData(coins.florins.url, coins.florins.dataArray),
    fetchData(coins.kruggerand.url, coins.kruggerand.dataArray),
    fetchData(coins.francsNapo10.url, coins.francsNapo10.dataArray),
    fetchData(coins.francsTun.url, coins.francsTun.dataArray),
    fetchData(coins.reichMark.url, coins.reichMark.dataArray)
]).then(() => {
    printAllCoins(coinList)
    printSouverain()
    printReichMark()


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

function printAllCoins(coinList) {
    for (let i = 0 ; i < coinList.length; i++){
        let piece = coinList[i]
        console.log(`name: ${coins[piece].dataArray[16]} \n
                 prix: ${coins[piece].dataArray[14]} \n
                 poids : ${coins[piece].dataArray[4]} \n
                 poids fin : ${coins[piece].dataArray[5]} \n
                 diametre : ${coins[piece].dataArray[7]} \n
                 frappe: ${coins[piece].dataArray[8]} \n
                 epaisseur: ${coins[piece].dataArray[9]} \n
                 pays: ${coins[piece].dataArray[11]} \n`)
    }
}
function printSouverain() {
    console.log(`name: ${coins.souverain.dataArray[12]} \n
                 prix: ${coins.souverain.dataArray[11]} \n
                 poid: ${coins.souverain.dataArray[0]} \n
                 poid fins: ${coins.souverain.dataArray[1]} \n
                 diametre: ${coins.souverain.dataArray[3]} \n
                 frappe: ${coins.souverain.dataArray[4]} \n
                 epaisseur: ${coins.souverain.dataArray[5]} \n
                 pays: ${coins.souverain.dataArray[7]} \n
                 `)
}
function printReichMark() {
    console.log(`name: ${coins.reichMark.dataArray[11]} \n
                 prix: ${coins.reichMark.dataArray[10]} \n
                 poid: ${coins.reichMark.dataArray[0]} \n
                 poid fins: ${coins.reichMark.dataArray[1]} \n
                 diametre: ${coins.reichMark.dataArray[3]} \n
                 frappe: ${coins.reichMark.dataArray[4]} \n
                 epaisseur: ${coins.reichMark.dataArray[5]} \n
                 pays: Prusse \n
                 `)
}






