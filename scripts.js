// Get all modals
const modals = document.querySelectorAll(".modal");

// Close modal when clicking on the close button or outside the modal
modals.forEach(modal => {
    const closeBtn = modal.querySelector(".close");

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

// Open modal when clicking on an image
const links = document.querySelectorAll(".image-link");

links.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const modalId = link.getAttribute("href").substring(1);
        const modal = document.getElementById(modalId);
        modal.style.display = "block";
    });
});
