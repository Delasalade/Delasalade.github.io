var images = ['objectif2.gif', 'testwavy.gif'];
        $('html').css({
            'background-image': 'url(images/' + images[Math.floor(Math.random() * images.length)] + ')'
        });