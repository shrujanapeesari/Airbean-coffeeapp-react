import orderReducer from './orderReducer';
import counterReducer from './counterReducer';
import { combineReducers } from 'redux';

//Detta behövs egentligen inte för inlämningsuppgiften men ifall man vill kombinera flera
//reducers behöver man använde combineReducers nedan 
const reducer = combineReducers({
  counter: counterReducer,
  menu: orderReducer
});

export default reducer;