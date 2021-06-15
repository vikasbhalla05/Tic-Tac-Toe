const state={
    scores:{
        player1 : 0,
        player2 : 0
    },

    squares : Array(9).fill(null),
    xIsNext : true,
};

function calculateWinner(squares){
    const winning_lines=[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    
    for(let i=0; i<winning_lines.length;i++){
        const [a, b, c]=winning_lines[i]
        if(squares[a] && squares[a]===squares[b] && squares[b]===squares[c]){
            showWinner(squares[a])
            setTimeout(()=>resetBoard(squares[a]), 1000)
            return square[a]
        }
    }

    if(!squares.include(null)){
        showWinner(null)
        setTimeout(()=>resetBoard(null), 1000)
        return
    }

    return null
}

function resetBoard(winner){
    if(winner){
        winner==='X'?state.scores.player1++:state.scores.player2++
    }
    state.squares===Array.fill(null)
    document.getElementById('player1Score').textContent(state.scores.player1)
    document.getElementById('player2Score').textContent(state.scores.player2)
    renderBoard()
}

function showWinner(winner){
    const alert_box =document.getElementById('alert-box')
    if(winner){
        winner==='X'?winner= 'Player 1':winner= 'Player 2'
    }

    alert_box.html(`${winner}`)
}