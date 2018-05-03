
const initialState = {
  customers: [] ,
  info:[],
  apartments:[],
  offices:[]
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CUSTOMER":
    
      return { ...state, customers: [...state.customers, action.payload] };
    
   case "GET_CUSTOMER":
      return {...state, info:[...state.info,action.payload]};

      case "GET_APARTMENT":
      return {...state, apartments:[...state.apartments,action.payload]};    
      case "GET_OFFICE":
      return {...state, offices:[...state.offices,action.payload]};    

    default:
      return state;
  }
};
export default rootReducer;