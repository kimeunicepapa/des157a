(function(){
    'use strict';
    console.log('reading JS');

    const myForm = document.querySelector('#myForm');
    const madLibs = document.querySelector('#madLibs');
    const error = document.querySelector('#error');


    myForm.addEventListener('submit', function(event){

        event.preventDefault();

        const badHabit = document.querySelector('#badHabit').value;
        const favActivity = document.querySelector('#favActivity').value;
        const adjective = document.querySelector('#adjective').value;
        const emotion = document.querySelector('#emotion').value;
        const list = document.querySelector('#list').value;
        const colorDay = document.querySelector('#colorDay');
        const colorValue = document.querySelector('#colorDay').value;



        let myText;

        if (badHabit == ''){

            const errorBadHabit = document.querySelector('#errorBadHabit');

            errorBadHabit.innerHTML = "Please tell me your bad habit, no one is judging";
            errorBadHabit.style.color = '#FFF8F8';
            errorBadHabit.style.backgroundColor = '#0400B7';

            document.querySelector('#badHabit').focus();

        } else if (adjective == ''){

            const errorAdjective = document.querySelector('#errorAdjective');

            errorAdjective.innerHTML = "Please tell me who you want to be, no one is judging";
            errorAdjective.style.color = '#FFF8F8';
            errorAdjective.style.backgroundColor = '#0400B7';

            document.querySelector('#adjective').focus();

        } else if (favActivity == ''){

            const errorFavActivity = document.querySelector('#errorFavActivity');

            errorFavActivity.innerHTML = "Please tell me what you love to do, no one is judging";
            errorFavActivity.style.color = '#FFF8F8';
            errorFavActivity.style.backgroundColor = '#0400B7';

            document.querySelector('#favActivity').focus();

        } else if (emotion == ''){

            const errorEmotion = document.querySelector('#errorEmotion');

            errorEmotion.innerHTML = "Please tell me how you feel, no one is judging";
            errorEmotion.style.color = '#FFF8F8';
            errorEmotion.style.backgroundColor = '#0400B7';
            
            document.querySelector('#emotion').focus();

        } else if (list == ''){

            const errorList = document.querySelector('#errorList');

            errorList.innerHTML = "Please tell me three things you love, no one is judging";
            errorList.style.color = '#FFF8F8';
            errorList.style.backgroundColor = '#0400B7';

            document.querySelector('#list').focus();

        } 
        // else if (colorValue == '#8BB174'){

        //     const errorList = document.querySelector('#errorColor');

        //     errorColor.innerHTML = "Are you sure you want this green?";
        //     errorColor.style.color = '#FFF8F8';
        //     errorColor.style.backgroundColor = '#0400B7';

        //     document.querySelector('#list').focus();

        // } 
        else {
            const listWords = document.querySelector

            myText = `I will focus on shifting my pattern of <span id="badHabitText"> ${badHabit}</span>.
            Who I’m becoming will be <span id="adjectiveText">${adjective}</span>.
            I feel like I can be my best self when I <span id="favActivityText">${favActivity}</span>.
            When I think about my future self, I feel <span id="emotionText">${emotion}</span>.
            <span id="listText">${list}</span> are the three words I want to keep in mind all day.`;     
            
            document.body.style.backgroundImage = 'none';


            document.querySelector('#image img').style.backgroundColor = colorDay.value;

            document.getElementById ('output').className= 'showing';
            document.getElementById ('input').className= 'hidden';
            document.querySelector('#badHabit').value = '';
            document.querySelector('#adjective').value = '';
            document.querySelector('#favActivity').value = '';
            document.querySelector('#emotion').value = '';
            document.querySelector('#list').value = '';
            document.querySelector('#colorDay').value = '#8BB174';
        }

        // document.querySelector('#container img').style.backgroundColor = 'blue';

        madLibs.innerHTML = myText;


        // name.innerHTML=

    });

}());