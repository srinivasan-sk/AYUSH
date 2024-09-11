// Plant data with 3D model paths
const plantsData = {
  'aloe-vera': {
    name: 'Aloe Vera',
    botanicalName: 'Aloe barbadensis miller',
    habitat: 'Tropical regions',
    medicinalUses: 'Skin Care, Immunity',
    cultivationMethods: 'Easy to grow in well-drained soil, needs plenty of sunlight.',
    modelFile: '/path_to_your_model/aloe-vera-3d-model.glb'  // Path to 3D model file
  },
  'neem': {
    name: 'Neem',
    botanicalName: 'Azadirachta indica',
    habitat: 'Subtropical regions',
    medicinalUses: 'Skin Care, Digestion',
    cultivationMethods: 'Requires well-drained soil and moderate water.',
    modelFile: './images/neem.glb'  // Path to 3D model file
  },
  'ginger': {
    name: 'Ginger',
    botanicalName: 'Zingiber officinale',
    habitat: 'humid, partly-shaded habitats in moist tropical and subtropical forests of Southeast Asia',
    medicinalUses: 'helps in the management of conditions like diabetes and muscular cramps.',
    cultivationMethods: 'Ginger is usually planted in March or April, when the monsoon starts.',
    modelFile: './images/ginger_tree.glb'  // Path to 3D model file
  }  
};

// Function to filter plants based on search input
function filterPlants() {
  const input = document.getElementById('search-input').value.toLowerCase();
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const plantName = card.getAttribute('data-plant-name').toLowerCase();
    if (plantName.includes(input)) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

// Function to open the model modal and load the 3D model
function openModelModal(plantId) {
  const modal = document.getElementById('model-modal');
  const plantData = plantsData[plantId];

  document.getElementById('model-plant-name').innerText = plantData.name;

  const modelContainer = document.getElementById('3d-model-container');
  modelContainer.innerHTML = '';  // Clear any previous content

  // Load 3D model using model-viewer component
  const modelElement = document.createElement('model-viewer');
  modelElement.src = plantData.modelFile;
  modelElement.alt = plantData.name;
  modelElement.setAttribute('auto-rotate', true);
  modelElement.setAttribute('camera-controls', true);
  modelElement.setAttribute('zoom', true);
  modelElement.style.width = '100%';
  modelElement.style.height = '400px';
  modelContainer.appendChild(modelElement);

  modal.style.display = 'block';
}

// Function to open the details modal and populate plant information
function openDetailsModal(plantId) {
  const modal = document.getElementById('details-modal');
  const plantData = plantsData[plantId];

  document.getElementById('plant-name').innerText = plantData.name;
  document.getElementById('botanical-name').innerText = plantData.botanicalName;
  document.getElementById('habitat').innerText = plantData.habitat;
  document.getElementById('medicinal-uses').innerText = plantData.medicinalUses;
  document.getElementById('cultivation-methods').innerText = plantData.cultivationMethods;

  modal.style.display = 'block';
}

// Function to close the modal
function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}
