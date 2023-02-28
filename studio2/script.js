(function(){
    'use strict'
    console.log('reading js');

    window.onbeforeunload = function() {
        window.scrollTo(0, 0);
    }

    window.addEventListener('load', function(){

        const posts = document.querySelectorAll('section');
        let postTops = [];
        let pageTop;
        let counter = 1;
        let prevCounter = 1;
        let doneResizing;


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

                //image variable
                let myImage = document.querySelector('figure img');

                //fade out image
                myImage.className = 'animateGif fadeOut';

                //change image src according to section number when fadeout animation ends
                myImage.addEventListener('animationend', function(){
                    myImage.src = "images/earring" + counter + ".gif";
                    myImage.className = 'animateGif fadeIn';
                })

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