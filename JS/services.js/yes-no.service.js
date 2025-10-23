function getAnswer(cb) {
    const xhr = new XMLHttpRequest()

    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const ans = JSON.parse(xhr.responseText)
            cb(ans)
        }
    }
    xhr.open('GET', 'https://yesno.wtf/api', true)
    xhr.send()

}

function isUserQuestionValid(userQuestion) {
    if(userQuestion.length < 3 || userQuestion[userQuestion.length - 1] !== '?') {
        return false;
    }
    return true;
}


function askBasedOnAns(answer,cb) {
    const xhr = new XMLHttpRequest()

    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const ans = JSON.parse(xhr.responseText)
            const joke = ans.value;
            const imgUrl = ans.message;
            console.log(joke,imgUrl);
            cb(joke,imgUrl);

        }
    }
    if(answer === 'yes'){
        xhr.open('GET', 'https://api.chucknorris.io/jokes/random', true)
        xhr.send()
    } else {
        xhr.open('GET', 'https://dog.ceo/api/breeds/image/random', true)
        xhr.send()
    }
   

}