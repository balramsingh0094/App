var noOfQues = 4;
var noOfChoi = 5;
var answer = new Array("1", "1", "1", "1");

function getTotal(form) {

 var score = 0;
 var currentElected;
 var currentSelected;
 for (i=0; i<noOfQues; i++) {
  currentElected = i*noOfChoi;
  answered=false;
    for (j=0; j<noOfChoi; j++) {
    currentSelected = form.elements[currentElected + j];
      if (currentSelected.checked) {
      answered=true;
        if (currentSelected.value == answer[i]) {
        score++;
        break;
      }
    }
  }
  if (answered ===false){
    alert("Please answer all the questions");
    return false;}
}
form.player.value=score;
}
<!--https://stackoverflow.com/questions/28403558/multiple-choice-quiz-getting-score-->
