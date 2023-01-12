const shareBtns = document.querySelectorAll(".share-btn");
const socialMediaSection = document.querySelector(".social-media");

shareBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        socialMediaSection.classList.toggle("hidden");

        const activeBtn = document.querySelector("[data-active]");
        btn.dataset.active = true;
        delete activeBtn.dataset.active;
    }) 
});
