import * as fs from 'fs';
import * as path from 'path';
import { LocalizationKeys } from './localization-model';

function convertToJSON(localizationKeys: any): any {
  const result: any = {};

  for (const key in localizationKeys) {
    if (typeof localizationKeys[key] === 'object' && localizationKeys[key] !== null) {
      if ('key' in localizationKeys[key] && 'value' in localizationKeys[key]) {
        result[key] = localizationKeys[key].value;
      } else {
        result[key] = convertToJSON(localizationKeys[key]);
      }
    }
  }

  return result;
}

const jsonResult = convertToJSON(LocalizationKeys);
const outputPath = path.resolve(__dirname, '../../resources/locales/en.json');

console.log('Output path:', outputPath);

try {
  fs.mkdirSync(path.dirname(outputPath), { recursive: true }); // Dizinlerin var olduğunu ve oluşturulacağını kontrol eder
  fs.writeFileSync(outputPath, JSON.stringify(jsonResult, null, 2));
  console.log('JSON result:', JSON.stringify(jsonResult, null, 2));

  console.log('Localization keys have been converted to JSON format.');
} catch (error) {
  console.error('An error occurred while writing the JSON file:', error);
}
