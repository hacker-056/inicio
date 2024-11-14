document.addEventListener("DOMContentLoaded", function() {
  const mainVideo = document.getElementById("mainVideo");
  const thumbnails = document.querySelectorAll(".thumbnail");

  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", function() {
      const videoUrl = this.getAttribute("data-url");
      mainVideo.src = videoUrl;
    });
  });
});
