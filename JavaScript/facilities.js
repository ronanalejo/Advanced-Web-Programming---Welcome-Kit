function toggleVisibility(id) {
    var allDetails = document.querySelectorAll('.floor-details');
    var allFloors = document.querySelectorAll('.floor-item');
    var targetDetails = document.getElementById(id);

    // Hide all details and show only the clicked one
    allDetails.forEach(detail => detail.style.display = 'none'); // Hide all details first
    allFloors.forEach(floor => floor.style.display = 'none'); // Hide all floor items

    // Show only the target details
    targetDetails.style.display = 'grid'; // Display the clicked floor's details
}

function showFloors() {
    const allDetails = document.querySelectorAll('.floor-details');
    const allFloors = document.querySelectorAll('.floor-item');

    // Hide all details and show all floors
    allDetails.forEach(detail => detail.style.display = 'none');
    allFloors.forEach(floor => floor.style.display = 'block');
}
