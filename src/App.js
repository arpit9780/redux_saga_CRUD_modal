import './App.css';
import { Create } from './components/Create';
import { Navbar } from './components/Navbar';
import { ShowDetail } from './components/ShowDetail ';
import { Routes,Route} from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Task } from './components/Task';
 

function App() {
  return (
    <div >
      <ToastContainer/>
        <Navbar/>
      <Routes>
        <Route path='/' element={<ShowDetail/>}/>
        <Route path='/create' element={<Create/>}/>
      </Routes>
     {/* <ShowDetail/> */}
     {/* <Task/> */}
    </div>
  );
}

export default App;
