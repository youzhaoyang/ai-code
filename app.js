const images = [
  'https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=60'
];

const grid = document.querySelector('.image-grid');

images.forEach(src => {
  const card = document.createElement('div');
  card.className = 'card';
  const img = document.createElement('img');
  img.src = src;
  img.alt = 'AI 作品';
  card.appendChild(img);
  grid.appendChild(card);
});
