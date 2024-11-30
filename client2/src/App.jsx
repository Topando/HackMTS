import './App.css';
import DashBoardWrapper from './components/DashBoardWrapper';
import UsersTable from './components/UsersTable/UsersTable';
import UserProfile from './components/UserProfile/UserProfile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Graph from './components/Graph/Graph';

function App() {
  return (
    <DashBoardWrapper>
      <Router>
        <Routes>
          <Route path="/" element={<UsersTable />} />
          <Route path="users/:userId" element={<UserProfile />} />
          <Route path="graph" element={<Graph/>} />
        </Routes>
      </Router> 
    </DashBoardWrapper>
  );
}

export default App;