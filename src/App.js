import './App.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux'; // Import connect từ redux
import ManageUser from './components/Container/ManageUser';
import Nav from './components/Container/Nav';
import AttendanceToday from './components/Container/AttendanceToday';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import History from './components/Container/History';
class App extends Component {
  render() {
    return (
      <Router>
        <div className='app-container'>
          <Nav />
          <Routes>
            <Route path='/manage-user' element={<ManageUser />} />
            <Route path='/history' element={<History />} />
            <Route path='/contact' element={<div>Contact</div>} />
            <Route path='/' element={<AttendanceToday />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

// Hàm mapStateToProps để lấy state từ Redux store
const mapStateToProps = (state) => {
  return {
    // Chọn các state cần thiết từ Redux store
    // allAttandanceToday: state.admin.allAttandanceToday,
  };
};

// Kết nối component với Redux store
export default connect(mapStateToProps)(App);
