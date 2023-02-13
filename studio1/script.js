(function(){
    'use strict';
    console.log('reading JS');

    const myForm = document.querySelector('#myForm');
    const madLibs = document.querySelector('#madLibs');

    myForm.addEventListener('submit', function(event){

        event.preventDefault();

        const badHabit = document.querySelector('#badHabit').value;
        const favActivity = document.querySelector('#favActivity').value;
        const adjective = document.querySelector('#adjective').value;
        const emotion = document.querySelector('#emotion').value;
        const list = document.querySelector('#list').value;
        const colorDay = document.querySelector('#colorDay').value;

        let myText;

        if (badHabit == ''){
            myText = "Please tell me your bad habit, no one is judging";
            document.querySelector('#badHabit').focus();
        } else if (adjective == ''){
            myText = "Please tell me an adjective, no one is judging";
            document.querySelector('#adjective').focus();
        } else if (favActivity == ''){
            myText = "Please tell me what you love to do, no one is judging";
            document.querySelector('#favActivity').focus();
        } else if (emotion == ''){
            myText = "Please tell me how you feel, no one is judging";
            document.querySelector('#emotion').focus();
        } else if (list == ''){
            myText = "Please tell me how you feel, no one is judging";
            document.querySelector('#list').focus();
        } else if (colorDay== ''){
            myText = "Please tell me how you feel, no one is judging";
            document.querySelector('#colorDay').focus();
        } else {
            myText = `I will focus on shifting my pattern of ${badHabit}.
            Who I’m becoming will be ${adjective}.
            I feel like I can be my best self when I ${favActivity}.
            When I think about my future self, I feel ${emotion}.
            ${list} are the three words I want to keep in mind all day.`;
            // document.querySelector('#container img').style.backgroundColor = '#colorDay';

            document.querySelector('#badHabit').value = '';
            document.querySelector('#adjective').value = '';
            document.querySelector('#favActivity').value = '';
            document.querySelector('#emotion').value = '';
            document.querySelector('#list').value = '';
            document.querySelector('#colorDay').value = '';
        }

        // document.querySelector('#container img').style.backgroundColor = 'blue';

        madLibs.innerHTML = myText;

    });
    // document.querySelector('#container img').style.backgroundColor = 'blue';
}());