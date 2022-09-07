import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";

function apiCall() {
  return axios.get("https://62d168bcd4eb6c69e7dcdea3.mockapi.io/post").then((res) => res.data);
}

function createApi(data) {
 const body={ "name" : data.name, "email" : data.email, }
return axios.post("https://62d168bcd4eb6c69e7dcdea3.mockapi.io/post",body).then((res) => res.data );
}

function delApi(id){
  console.log(787,id)
  return axios.delete(`https://62d168bcd4eb6c69e7dcdea3.mockapi.io/post/${id}`).then((res)=>res.data)
}


function upApi(data) {
 console.log("upApi",data);
 const id = data.id
 console.log("Idddd",id);
 const body = {
  name : data.name
 }
 return axios.put(`https://62d168bcd4eb6c69e7dcdea3.mockapi.io/post/${id}`,body).then((res)=>res.data)
}

function* fetchData() {
  try {
    const resData = yield call(apiCall)
    // const resData = yield call(apiCall); // call api by call()
    // console.log(resData)
    yield put({ 
      type: "LOAD_DATA", 
      payload: resData }); // put someting dispatch in saga send data reducer by check type
  } catch (e) {
    console.log(40,"e callllll");
  }
}

function* createData(data) {
  try { 
    console.log("Create data",data.payload)
    const newData = yield call(createApi,data.payload)
    console.log("newData",newData);
    yield put({ type: "CREATE_NEW_DATA", payload: newData});
  } catch (e){
    console.log(4040,"error",e);
  }
}

function* deleteData(id){
  try {
    console.log("delete data",id.payload)
    const delData = yield call(delApi,id.payload)
    console.log(111,delData);
    yield put({type :"DELETE_DATA", payload:delData})
  }
  catch(e){
console.log(404040,e);
  }
}

function* updateData(data){
try {
  console.log(4444,data)
  const upData = yield call(upApi,data.payload)
  console.log("upData",upData)
  yield put({type :"UPDATA_DATA",payload:upData})
}
catch(err){
  console.log(err)
}
}

function* Getpost() {
  
  yield takeEvery("GET_DATA", fetchData);
  yield takeEvery("CREATE_DATA", createData);
  yield takeEvery("DELETE_USER", deleteData);
  yield takeEvery("UPDATE_USER", updateData)
  // yield takeEvery("ADD_TO_CART", addProductInCart(ele));
}

export default Getpost;