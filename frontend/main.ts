/// <reference lib="dom" />
import Alpine from 'alpinejs';
import { APP_TITLE } from '@workspace/lib';

//
// This is apparently not required, even though Alpine doc says it is
//
// The declare global block tells TypeScript that you're extending existing global types, and the interface Window declaration merges with the existing Window interface to add the Alpine property.
// declare global {
//     interface Window {
//         Alpine: typeof Alpine;
//     }
// }
//window.Alpine = Alpine
//Alpine.start()

// Set the browser title when the script loads
document.title = APP_TITLE;

const store = {
  display: 'value from alpine store',
};
Alpine.store('clock', store);

//
// Example store that backs the User Information Form
//
const userInformationFormStore = {
  firstName: '...first...',
  lastName: '...last...',
  directions: 'Please fill out the form and press Submit. This text comes from an Alpine store.',
};
Alpine.store('userInformationForm', userInformationFormStore);


Alpine.start();
