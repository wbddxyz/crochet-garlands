
  const items = {
    bags: [
      'img/bag1.jpeg',
      'img/bag2.jpeg',
      'img/bag3.jpeg'
    ],
    toys: [
      'img/toy1.jpeg',
      'img/toy2.jpeg',
      'img/toy3.jpeg'
    ],
    accessories: [
      'img/accessory1.jpeg',
      'img/accessory2.jpeg',
      'img/accessory3.jpeg'
    ]
  };

  const buttons = document.querySelectorAll('.category-menu button');
  const grid = document.getElementById('itemGrid');
  console.log(grid);

  function renderGrid(category) {
    grid.innerHTML = ''; // Clear grid
    items[category].forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      grid.appendChild(img);
    });
  }

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      document.querySelector('.category-menu .active').classList.remove('active');
      button.classList.add('active');
      renderGrid(button.dataset.category);
    });
  });

  // Initialize with default category
  renderGrid('bags');

