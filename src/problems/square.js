/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const neededValues = [];
    for(let i = 1; i < 10; i++){
        neededValues.push(i);
    }
    
    const availableNumsByRow = [];
    const availableNumsByCols = [];
    const availableNumsByBox = [];

    for(let i = 0; i < 10; i++ ){
        availableNumsByRow[i] = new Set(neededValues);
        availableNumsByCols[i] = new Set(neededValues);
        availableNumsByBox[i] = new Set(neededValues);
    }

    for(let row = 0; row < board.length; row++){
        for(let column = 0; column < board[0].length; column++){
            const num = Number(board[column][row]);
            if(Number.isNaN(num)){
                continue;
            }
            const isAvailableInColumn = availableNumsByCols[column].has(num);
            if(isAvailableInColumn){
                availableNumsByCols[column].delete(num);
            }else{
                return false;
            }

            const isAvailableInRow = availableNumsByRow[row].has(num);
            if(isAvailableInRow){
                availableNumsByRow[row].delete(num);
            }else{
                return false;
            }
            
            const boxIndex = getBoxIndexByCoordinate(row, column);
            console.log("Analyzing the row " + row + " and column"  + column);
            console.log("Analyzing a number of the boxIndex " + boxIndex);
            const isAvailableInBox = availableNumsByBox[boxIndex].has(num);
            if(isAvailableInBox){
                availableNumsByBox[boxIndex].delete(num);
            }else{
                return false;
            }
        }
    }
    return true;
};

function getBoxIndexByCoordinate(row, column){
    return (row % 3) + ((column % 3) * 3);
}

console.log(isValidSudoku([
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]]));

// console.log(isValidSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]));