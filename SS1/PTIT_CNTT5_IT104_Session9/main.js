function printMatrix(matrix) {
    console.log("Toan bo phan tu trong ma tran:");
    for (let i = 0; i < matrix.length; i++) {
        let row = "";
        for (let j = 0; j < matrix[i].length; j++) {
            row += matrix[i][j] + " ";
        }
        console.log(row.trim());
    }
}

function printDiagonal(matrix) {
    console.log("Cac phan tu tren duong cheo chinh:");
    let diagonal = "";
    for (let i = 0; i < matrix.length; i++) {
        diagonal += matrix[i][i] + " ";
    }
    console.log(diagonal.trim());
}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

printMatrix(matrix);
printDiagonal(matrix);
