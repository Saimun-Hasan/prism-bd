document.addEventListener("DOMContentLoaded", function () {
    // Select the placeholder element
    const navbarPlaceholder = document.getElementById("navbar-placeholder");

    // Fetch the navbar content
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            // Insert the navbar content into the placeholder
            navbarPlaceholder.innerHTML = data;
        });
});
