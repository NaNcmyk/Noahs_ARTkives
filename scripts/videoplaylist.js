const thumbnails = document.querySelectorAll('.video-playlist-wrapper .video-thumbnail');
const displayVideo = document.querySelector('.display-video iframe');
let title = document.querySelector('.display-video h3');

function clearActive() {
    thumbnails.forEach(video => video.classList.remove('active'));
}

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        clearActive();
        thumbnail.classList.add('active');
        if (thumbnail.classList.contains('active')) {
            let src = thumbnail.children[0].getAttribute('src');

            // instead of setting the src URL directly to the iframe element itself (in the external DOM), reset URL in the contentWindow (the iframe's internal DOM) whenever a new thumbnail is clicked--so that playlist history is not saved to browser's history
            // browser's back button behaves as expected--displays page user previously viewed on website vs. user's past YouTube viewing history within the current page
            displayVideo.contentWindow.location.replace(`${src}?autoplay=1&modestbranding=1`);

            let updatedTitle = thumbnail.children[1].textContent;
            title.textContent = updatedTitle;
        }
    });
});
