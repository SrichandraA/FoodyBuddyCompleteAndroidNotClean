import data from '../data/data';
import apartmentData from '../data/loginDropdown';
import officeData from '../data/officeData';

export const addCustomer = customer => ({ type: "ADD_CUSTOMER", payload: customer });
export const getCustomer = info => ({ type: "GET_CUSTOMER", payload: data });
export const getApartment = apartment => ({type:"GET_APARTMENT", payload:apartmentData});
export const getOffice = office => ({type:"GET_OFFICE", payload:officeData});
