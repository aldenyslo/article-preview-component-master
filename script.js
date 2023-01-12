const shareBtns = document.querySelectorAll(".share-btn");
const socialMediaSection = document.querySelector(".social-media");

shareBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        socialMediaSection.classList.toggle("hidden");
        btn.classList.toggle("active");
    }) 
});
