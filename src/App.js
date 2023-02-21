import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-calendar/dist/Calendar.css';

import './App.css';

import Layout from './layout';

import Form from './pages/form1'
import Form2 from './pages/form2';
import Form3 from './pages/form3';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Form />} />
          <Route path='/form1' element={<Form />} />
          <Route path='/form2' element={<Form2 />} />
          <Route path='/form3' element={<Form3 />} />
        </Routes>
      </Layout>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
