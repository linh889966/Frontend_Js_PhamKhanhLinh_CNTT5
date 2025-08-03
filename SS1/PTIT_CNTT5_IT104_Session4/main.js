const checkParity = x => {
    if (typeof x !== "number") {
        console.log(`${x} khong phai la so`);
    } else if (x % 2 === 0) {
        console.log(`${x} la so chan`);
    } else {
        console.log(`${x} la so le`);
    }
};

checkParity("a");
checkParity(10);
checkParity(7);
