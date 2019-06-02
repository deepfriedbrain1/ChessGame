const moves = require('./moves.js')

const getPath = (fromCol, fromRow, toCol, toRow) =>{

}

const getAllPossibleMoves = (piece, boardData) =>{

}

const pathIsStright = (fromCol, fromRow, toCol, toRow) =>{
    let differenceX = fromCol - toCol
    let differenceY = fromRow - toRow
    return ((differenceX != 0 && differenceY == 0 || differenceY != 0 && differenceX == 0) && !(differenceX == 0 && differenceY == 0))
}
const pathIsDiagonal = (fromCol, fromRow, toCol, toRow) =>{
    let differenceCol = fromCol - toCol
    let differenceRow = fromRow - toRow
    return (Math.abs(differenceCol) == Math.abs(differenceRow))
}
const getDirectionVector = (fromCol, fromRow, toCol, toRow) =>{
    let vCol = 0
    let vRow = 0
    if(pathIsStright(fromCol, fromRow, toCol, toRow) || pathIsDiagonal(fromCol, fromRow, toCol, toRow)){
        if(toCol != fromCol) vCol = (toCol > fromCol )? 1 : -1
        if(toRow != fromRow) vRow = (toRow > fromRow )? 1 : -1
    }
    return [vCol,vRow]
}
const getPathRoute = (fromCol, fromRow, toCol, toRow) =>{
    let passingTiles = []
    let distance = 0
    let vCol, vRow = 0
    if(pathIsStright(fromCol, fromRow, toCol, toRow) || pathIsDiagonal(fromCol, fromRow, toCol, toRow)){
        distance = Math.abs( Math.abs(fromCol) - Math.abs(toCol) )
    }else{
        return false
    }
    [vCol, vRow] = getDirectionVector(fromCol, fromRow, toCol, toRow)
    for(i = 1; i <= distance; i++){
        if(notOutOfBound(fromCol + vCol * i, fromRow + vRow * i)) passingTiles[i-1] = [fromCol + (vCol * i), fromRow + vRow * i]
    }
    return passingTiles
}
const notOutOfBound = (cordCol, cordRow) =>{
    return (cordCol >= 0 && cordCol < 8 && cordRow >= 0 && cordRow < 8)
}


module.exports = {
    getPath: function(fromCol, fromRow, toCol, toRow){
        return getPathRoute(fromCol, fromRow, toCol, toRow)
    },
    getPosibleMovesPawn: async function (piece) {
        var posibleMoves = [];
        var direction = (piece.isWhite)? 1 : -1
        pieceState = 0
        if (pieceState === 0) {
            posibleMoves.push([piece.col, piece.row + (1*direction)])
            posibleMoves.push([piece.col, piece.row + (2*direction)])
        } else {
            posibleMoves.push([piece.col, piece.row + 1*direction])
        }
        if((piece.isWhite && piece.row === 4) || (!piece.isWhite && piece.row === 3)){
            var passantMoves = []
            passantMoves.push(moves.pawn_enPassant(piece.col +1, piece.row + (1*direction), isWhite, piece.gameId))
            passantMoves.push(oves.pawn_enPassant(piece.col +1, piece.row + (1*direction), isWhite, piece.gameId))
            
        }
        return posibleMoves
    },

}