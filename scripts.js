document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("gallery");
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
    const caption = document.getElementById("caption");
    const closeModal = document.getElementById("close");

    // List of image filenames (replace with actual filenames or automate generation if possible)
    const imageFiles = [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
        // Add more filenames here
    ];

    // Dynamically create gallery images
    imageFiles.forEach((file) => {
        const img = document.createElement("img");
        img.src = `images/${file}`;
        img.alt = file;
        img.classList.add("gallery-image");

        img.addEventListener("click", () => {
            modal.style.display = "block";
            modalImage.src = img.src;
            caption.textContent = img.alt; // Use file name as caption
        });

        gallery.appendChild(img);
    });

    // Close modal when the close button is clicked
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close modal when clicking outside the image
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
