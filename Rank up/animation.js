function showNumberWithAnimation(i,j,randNumber) {

    var numberCell = $('#number-cell-'+i+'-'+j);

    numberCell.css('background-color',getNumberBackgroundColor(randNumber));
    numberCell.css('color',getNumberColor(randNumber));
    numberCell.text(getNumberText( randNumber ))

    numberCell.animate({
        width:cellSideLength,
        height:cellSideLength,
        top:getPostTop(i,j),
        left:getPostLeft(i,j),
    },50);
}

function showMoveAnimation(fromx,fromy,tox,toy) {
    var numberCell = $('#number-cell-' + fromx + '-' + fromy );
   numberCell.animate({
       top:getPostTop(tox,toy),
       left:getPostLeft(tox,toy)
   },200) ;
}

function updateScore(score, currentScore){
    $("#score").text(score);
    if(currentPosition < currentScore){
        currentPosition = currentScore;
        $("#position").text(getNumberText(currentPosition));
    }
}
/*$(function(){
    $("#newgamebutton").click(function(){
        updateScore(0,board[i][j])
    })
})*/