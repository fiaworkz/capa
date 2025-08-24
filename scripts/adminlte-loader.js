const fs = require('fs');
const path = require('path');

const filesToCopy = [
  {
    src: 'node_modules/admin-lte/dist/js/adminlte.min.js',
    dest: 'src/assets/admin-lte/js/adminlte.min.js'
  },
];

filesToCopy.forEach(file => {
  const dir = path.dirname(file.dest);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.copyFileSync(file.src, file.dest);
  console.log(`Copied ${file.src} → ${file.dest}`);
});
