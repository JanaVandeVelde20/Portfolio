const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');

// Sidebar elements //
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon')


// const hoverSign = document.querySelector('.hover-sign');

// const videoList =[video1, video2, video3];

// videoList.forEach (function(video){
//     video.addEventListener("mouseover", function(){
//         video.play()
//     })
//     video.addEventListener("mouseout", function(){
//     video.pause();
// })
// })

// Sidebar elements //
document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".menu-icon");
  const sideBar = document.querySelector(".sidebar");
  const closeIcon = document.querySelector(".close-icon");

  if (!menu || !sideBar || !closeIcon) {
    console.error("One or more elements not found:", { menu, sideBar, closeIcon });
    return;
  }

  menu.addEventListener("click", function () {
    console.log("Menu clicked");
    sideBar.classList.remove("close-sidebar");
    sideBar.classList.add("open-sidebar");
  });

  closeIcon.addEventListener("click", function () {
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
  });
});

// Play video once visible in viewport//
const video = document.getElementById("skillsVideo");
  const section = document.getElementById("skills-video-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      });
    },
    {
      threshold: 0.5, // play when 50% visible
    }
  );

  observer.observe(section);

