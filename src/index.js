module.exports = function towelSort (matrix) {
    if (!matrix || matrix.length === 0) {
        return [];
    }

    const sortedArray = [];

    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            // Even row, left to right
            for (let j = 0; j < matrix[i].length; j++) {
                sortedArray.push(matrix[i][j]);
            }
        } else {
            // Odd row, right to left
            for (let j = matrix[i].length - 1; j >= 0; j--) {
                sortedArray.push(matrix[i][j]);
            }
        }
    }
    return sortedArray;
}
