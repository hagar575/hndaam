// Show measurements section on page load with all fields visible initially

document.addEventListener("DOMContentLoaded", function() {
  const measurementsSection = document.querySelector(".measurements-section");

  // Define fields for each type of garment

  const garmentFields = {
    dishdasha: ['length', 'shoulder', 'sleeves', 'chest', 'half-chest', 'vest-measurement', 'bottom', 'hem-fold'],
    dagla: ['length', 'shoulder', 'sleeves', 'chest', 'bottom'],
    vest: ['length', 'shoulder', 'chest', 'half-chest', 'bottom'],
    shirt: ['length', 'shoulder', 'sleeves', 'chest'],
    pants: ['length', 'waist', 'bottom']
  };

  // Get all garment checkboxes including reset

  const checkboxes = document.querySelectorAll('#dishdasha, #dagla, #vest, #shirt, #pants, #reset-measurements');

  // Function to update measurements visibility

  function updateMeasurements() {
    const resetChecked = document.getElementById('reset-measurements').checked;
    const selectedGarments = Array.from(checkboxes).filter(checkbox => checkbox.checked && checkbox.id !== 'reset-measurements').map(checkbox => checkbox.id);

    if (resetChecked || selectedGarments.length === 0) {
      measurementsSection.style.display = 'block';
      // Show all fields
      document.querySelectorAll('.measurement-grid > div').forEach(div => {
        div.style.display = 'block';
      });
      return;
    }

    measurementsSection.style.display = 'block';

    // Collect unique fields to show

    const fieldsToShow = new Set();
    selectedGarments.forEach(garment => {
      garmentFields[garment].forEach(field => fieldsToShow.add(field));
    });

    //Hide all measurement fields first

    document.querySelectorAll('.measurement-grid > div').forEach(div => {
      div.style.display = 'none';
    });

    //Show the required fields

    fieldsToShow.forEach(field => {
      const fieldDiv = document.querySelector(`.field-${field}`);
      if (fieldDiv) {
        fieldDiv.style.display = 'block';
      }
    });
  }

  // Add event listeners to checkboxes
  checkboxes.forEach(checkbox => checkbox.addEventListener('change', updateMeasurements));

  // Initialize
  updateMeasurements();
});