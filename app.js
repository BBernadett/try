import { initForm } from './index.js';
import './styles.css';

// If the template and the assets did not change we don't have to emit the html 
const assetJson = JSON.stringify(self.getAssetFiles(assets)); 
if (isCompilationCached && self.options.cache && assetJson === self.assetJson) { 
  return callback(); 
} else { 
  self.assetJson = assetJson; 
} 


window.addEventListener('DOMContentLoaded', () => {
    initForm();
})