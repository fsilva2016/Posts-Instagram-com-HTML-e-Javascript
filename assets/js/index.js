const token = 'SUdRVkpZWkFYTlNjV056YVVObWFURjFUbEpUTW5sak4xcG5XVU5JUlVkdFZsQk5OWEp2VXpaQTFURWhXWkFUTTRVek4zU2xOMVQwUlVUWEJKYjIxR1RFMU9XWEpUUVVGaGNuazVhVjl3VUZCdVRVTmZiRzFRVFRkVFRtOUJNVlZyZEhSTWNFUnpia3h1UjBSUlFVaEVjSEF3UkFaRFpE'
const newChave = atob(token);
// https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=token;

const feed = new Instafeed({
    accessToken: `${token}`,
    limit: 10,
    template: `<div class='item'><a href="{{link}}"><img title="{{caption}}" src="{{image}}" /></a></div>`,
    after: function() {
        $('.carousel').slick(carousel());
    }
});

feed.run();

const carousel = () => {
    return {
        dots: false,
        arrows: true,
        infinite: false,
        centerPadding: '60px',
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                    arrows: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                }
            }
        ]
    }


}