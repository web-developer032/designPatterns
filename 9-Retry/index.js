async function retryOperation({ maxTry = 5 } = {}) {
    let currentTry = 0;

    while (currentTry < maxTry) {
        try {
            await fakeExternalApiCall(currentTry + 1);
            console.log("----------Call Succesfull----------");
            break;
        } catch (error) {
            console.log(error.message);
            console.log("Error while making call.");
        }

        currentTry++;

        if (currentTry >= maxTry) {
            console.log("Maximum retry reache. Now exiting....");
        }
    }
}

async function fakeExternalApiCall(count) {
    console.log(`Fetching Data for ${count} time`);

    await sleep(2000);

    let nmbr = Math.round(Math.random() * 10);

    if (nmbr > 9) {
        return true;
    }

    throw Error("Api call Failed...");
}

async function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

retryOperation({ maxTry: 2 });
