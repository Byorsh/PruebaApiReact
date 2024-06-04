import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import CreateUser from './component/CreateUser';
import ListUser from './component/ListUser';
import EditUser from './component/EditUser';

function App() {
  return (
    <div className="container">
    <div className="App">
      <h1 className="page-header text-center">React CRUD (Create Read Update and Delete) with PHP MySQL</h1>
        <BrowserRouter>
        <Link to="user/create" className='btn btn-success'>ADD NEW USER</Link>

        <Routes>
          <Route index element={<ListUser />} />
          <Route path='user/create' element={<CreateUser />}/>
          <Route path='user/:id/edit' element={<EditUser />}/>
        </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
