const cloudinary = require("cloudinary").v2;
cloudinary.config({ 
    cloud_name: 'donwlbz6n', 
    api_key: '361223377571554', 
    api_secret: '6BlCihQbvk4sIIupIrV_nKWZZTc' 
  });

module.exports = cloudinary;