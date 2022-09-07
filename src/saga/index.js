
import { all} from 'redux-saga/effects'
import Getpost from './Getpost';

export default function* RootSaga() {
  yield all([
     Getpost()
  ]);
}