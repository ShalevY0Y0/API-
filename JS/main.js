
function onAsk(ev) {
    const userQuestion = ev.target.value;
    if(!isUserQuestionValid(userQuestion)) {
        console.log('The question is not valid');
        return;
    }

    getAnswer(renderAns)
}

function renderAns(ans) {
    const answer = ans.answer;
    const imgUrl = ans.image;
    document.querySelector('.yes-no-res').textContent = `${answer}`
    document.querySelector('.res-img').src = `${imgUrl}`

    askBasedOnAns(answer,renderBasedOnAns)

}

function renderBasedOnAns(joke,imgUrl) {
    if (!joke){
        document.querySelector('.dog').src = `${imgUrl}`
        document.querySelector('.noris').textContent = ''
    } else{
         document.querySelector('.noris').textContent = `${joke}`
          document.querySelector('.dog').src = ''
    }
    
   
}



