
import getTestData from'./testData'
import ScheduleCalendar from './components/ScheduleCalendar'
import { useEffect, useState } from 'react';
import React from 'react'
import { Button, Nav, Navbar, NavItem, NavDropdown, NavLink, Form, FormControl, Container, Row, Col} from 'react-bootstrap';
import Header from './components/Header'
import avatar from './images/profile-pic.png';
import './main.css';
import Class from './components/Class';

function App() {
  const [enrolledClasses, setEnrolledClasses] = useState([])
  useEffect(()=>{
    setEnrolledClasses([])
    getTestData.getTestClassIDs(4).then(classIDs => classIDs.forEach(id => {
      setEnrolledClasses(prev => [...prev, id])
    }))
  }, [])
  return (
    <div align = "center">
      <Header></Header>
      {enrolledClasses.map(classID => {console.log(enrolledClasses); return (<Class classID={classID}></Class>)})} 
      <ScheduleCalendar classIDs={[enrolledClasses[enrolledClasses.length - 1]]} style="width: 100%" />
    </div> 
  )
}

export default App;
