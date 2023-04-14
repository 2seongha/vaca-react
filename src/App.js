import './App.css';
import DayList from './component/js/DayList';
import Header from './component/js/Header';
import Day from './component/js/Day';
import EmptyPage from './component/js/EmptyPage';
import Menu from './component/js/Menu';
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateWord from './component/js/CreateWord';
import CreateDay from './component/js/CreateDay';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Menu></Menu>
        <Routes>
          <Route path='/' element={<DayList />} />
          <Route path='/day/:day' element={<Day />} />
          <Route path='/*' element={<EmptyPage />} />
          <Route path='/create_word' element={<CreateWord />} />
          <Route path='/create_day' element={<CreateDay />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
//json-server --watch ./src/db/data.json --port 3001