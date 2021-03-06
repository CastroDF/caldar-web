import { ADDBOILERTYPE, DELETEBOILERTYPE, GET_BOILERTYPES_FETCHING, GET_BOILERTYPES_FULFILLED, GET_BOILERTYPES_REJECTED } from '../../constants/actionsBoilerTypes';

const initialState = {
  list: [],
  fecha: '',
  IsLoading: false,
  error: false,
  isAdding: false
};

const boilertypesReducer = (state = initialState, action) => {
  switch (action.type) {
  case ADDBOILERTYPE:
    return {
      ...state,
      list: [
        ...state.list,
        {
          id: action.id,
          skillsId: action.skillsId,
          description: action.description,
          stock: action.stock
        }
      ]
    };
  case DELETEBOILERTYPE:
    return {
      ...state
    };
  case GET_BOILERTYPES_FETCHING:
    return {
      ...state,
      isLoading: true
    };
  case GET_BOILERTYPES_FULFILLED:
    return {
      ...state,
      isLoading: false,
      list: action.datos
    };
  case GET_BOILERTYPES_REJECTED:
    return {
      ...state,
      isLoading: false,
      error: true
    };
  default:
    return state;
  }
};

export default boilertypesReducer;
