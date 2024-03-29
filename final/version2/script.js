(function(){
    'use strict'
    console.log('reading js');

    document.querySelector('.close').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('overlay').className = 'hidden';
    });

    document.addEventListener('keydown', function(event){
        if (event.key === 'Escape'){
            document.getElementById('overlay').className = 'hidden';
        }
    })

    window.onbeforeunload = function() {
        window.scrollTo(0, 0);
    }

    window.addEventListener('load', function(){

        const posts = document.querySelectorAll('article');
        let postTops = [];
        let pageTop;
        let counter = 1;
        let prevCounter = 1;
        let doneResizing;

        //image variable
        const myImageLeft = document.querySelector('#earringLeft');
        const myImageRight = document.querySelector('#earringRight');
        const myShirt = document.querySelector('#shirtColor');

        //variables for setting scroll direction
        let exitDirection;
        let enterDirection;

        resetPagePosition();

        window.addEventListener('scroll', function(){

            pageTop = window.pageYOffset + 300;

            //if the user is scrolling down
            if (pageTop > postTops[counter]) {
                counter++;
                console.log(`scrolling down to section ${counter}`);
            }
            //if the user is scrolling up
            else if (counter > 1 && pageTop < postTops[counter-1]){
                counter--;
                console.log(`scrolling up to section ${counter}`);
            }

            if (counter != prevCounter) {               

                //fade out image
                myImageLeft.className = 'fadeOut';
                myImageRight.className = 'fadeOut';
                myShirt.className = 'shirtOut';

                //start timer
                const myTimer=setTimeout(changeEarrings, 1000);

                //change image src according to section number when fadeout animation ends

                function changeEarrings(){
                    console.log('changeEarrings');

                    // clear the timer so that it doesn't get called again until the user scrolls again
                    clearTimeout(myTimer);

                    myImageLeft.src = "images/earring" + counter + ".gif";
                    myImageRight.src = "images/earring" + counter + "-right.gif";
                    myShirt.src = "images/shirt" + counter + ".svg";

                    myImageLeft.className = 'fadeIn';
                    myImageRight.className = 'fadeIn';
                    myShirt.className = 'shirtIn';
                }

                prevCounter = counter;
            }


        }); //end window scroll function

        window.addEventListener('resize', function(){

            clearTimeout(doneResizing);

            doneResizing = this.setTimeout(function() {

                resetPagePosition();

            }, 500);

        });

        function resetPagePosition(){
            postTops = [];
            posts.forEach(function(post){
                postTops.push(Math.floor(post.getBoundingClientRect().top) + window.pageYOffset); 
            })

            const pagePosition = window.pageYOffset + 300;
            counter = 0;

            postTops.forEach(function(post){
                if (pagePosition > post) {
                    counter++;
                }
            })
        }

    });//end load function

}())