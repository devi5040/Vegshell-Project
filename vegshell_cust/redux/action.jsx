import axios from 'axios';
const serverUrl = 'http://3.1.249.239/api';

export const login = values => async dispatch => {
  try {
    console.log('====================================');
    console.log(values);
    console.log('====================================');
    dispatch({type: 'auth/loginRequest'});
    const {data} = await axios.post(`${serverUrl}/auth/login`, values, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    dispatch({type: 'auth/loginSuccess', payload: data});
    console.log('====================================');
    console.log(data);
    console.log('====================================');
  } catch (error) {
    console.log(error, 'error');
    dispatch({
      type: 'auth/loginFailure',
      payload: error,
    });
  }
};

//logout
export const logout = () => async dispatch => {
  try {
    dispatch({type: 'auth/logoutSuccess'});
  } catch (error) {
    dispatch({
      type: 'auth/logoutFailure',
      payload: error.response.data.message,
    });
  }
};

export const getAllProduct = () => async dispatch => {
  try {
    dispatch({type: 'product/requestProduct'});
    const {data} = await axios.post(`${serverUrl}/get-products`);
    console.log('====================================');
    console.log(data);
    console.log('====================================');
    dispatch({type: 'product/getAllProducts', payload: data});
  } catch (error) {
    dispatch({
      type: 'auth/requestFailure',
      payload: error.response.data.message,
    });
  }
};
