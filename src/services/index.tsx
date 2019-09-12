export { databaseSecret } from 'firebaseConfig';
export const BASE_PATH: string = 'https://g-evento.firebaseio.com/';

export { default as getMonths } from './events/getEvents';
export { default as getSpecificMonth } from './events/getSpecificEvent';
export { default as addMonth } from './events/addEvent';
export { default as deleteMonth } from './events/deleteEvent';
export { default as addInvoice } from './musicians/addMusician';
export { default as editInvoice } from './musicians/editMusician';
// export { default as updateBalance } from './musicians/updateBalance';
export { default as deleteInvoice } from './musicians/deleteMusician';
