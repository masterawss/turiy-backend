import cloudinary from 'cloudinary';

const cloudConfig = () =>
  cloudinary.v2.config({
    cloud_name: 'vittest', 
  api_key: '864198498814525', 
  api_secret: 'vT-ffxcPzr5eWO3EivluvD-Thyg' 
  });

export default cloudConfig;