async function sleep(ms) {
    await new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    console.log(await Promise.resolve('start'));

    await sleep(3000);

    console.log(await Promise.resolve('end'));
}

main();
