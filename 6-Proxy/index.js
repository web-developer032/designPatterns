// INSTEAD OF DIRECTLY EXECUTING FUNCTIONS OR API CALLS OR DATA THAT IS CONFIDENTIAL IT WORKS AS A PROXY (USED TO SAVE CONFIDENTIAL DATA, OR WORK AS A CACHE)

// -----------------------------
// CONSTRUCTOR WAY
// -----------------------------

// EXTERNAL API SERVICE ( NETWORK REQUEST)
// function CryptoCurrencyAPI() {
//     this.getValue = function (coin) {
//         console.log("CALLING EXTERNAL API");

//         switch (coin) {
//             case "btc":
//                 return 1000;

//             case "eth":
//                 return 500;

//             case "lit":
//                 return 250;

//             default:
//                 break;
//         }
//     };
// }

// function CryptoCurrencyProxy() {
//     this.api = new CryptoCurrencyAPI();
//     this.cache = {};

//     this.getCoinValue = function (coin) {
//         if (this.cache[coin]) {
//             return this.cache[coin];
//         } else {
//             let coinValue = this.api.getValue(coin);
//             this.cache[coin] = coinValue;
//             return coinValue;
//         }
//     };
// }

// -----------------------------
// CLASSES WAY
// -----------------------------

// EXTERNAL API SERVICE ( NETWORK REQUEST)
class CryptoCurrencyAPI {
    constructor() {}

    getValue(coin) {
        console.log("CALLING EXTERNAL API");

        switch (coin) {
            case "btc":
                return 1000;

            case "eth":
                return 500;

            case "lit":
                return 250;

            default:
                break;
        }
    }
}

class CryptoCurrencyProxy {
    constructor() {
        this.api = new CryptoCurrencyAPI();
        this.cache = {};
    }

    getCoinValue(coin) {
        if (this.cache[coin]) {
            return this.cache[coin];
        } else {
            let coinValue = this.api.getValue(coin);
            this.cache[coin] = coinValue;
            return coinValue;
        }
    }
}

// ------------------------------
// USING NETWORK REQUEST
// ------------------------------
// const api = new CryptoCurrencyAPI();
// console.log(api.getValue("btc"));
// console.log(api.getValue("eth"));

// ------------------------------
// USING PROXY REQUEST
// ------------------------------
const apiProxy = new CryptoCurrencyProxy();
console.log(apiProxy.getCoinValue("btc"));
console.log(apiProxy.getCoinValue("eth"));
console.log(apiProxy.getCoinValue("btc"));
