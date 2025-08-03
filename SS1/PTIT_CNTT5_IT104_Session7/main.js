const sumArrays = (...arrays) => {
    const result = arrays.map(arr => arr.reduce((a, b) => a + b, 0));
    console.log("Tong cac mang la: " + result);
};

sumArrays([1, 2], [6, 7, 8], [12, 8]);
