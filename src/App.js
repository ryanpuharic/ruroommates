//-----------------------
//TO RUN FILE:
//in backend terminal:
//cd server
//nodemon index.js
//in frontend terminal:
//cd client
//npm start
//-----------------------

import './App.css';
import { useState, useEffect } from "react";
import Axios from "axios";
import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#06283D'
    },
    secondary: {
      main: '#DFF6FF'
    }
  },
  spacing: 8,

});

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [gradYear, setGradYear] = useState(0)
  const [lottoNum, setLottoNum] = useState("")
  const [morningPerson, setMorningPerson] = useState(true)
  const [isNeat, setIsNeat] = useState(true)
  const [wantsQuiet, setWantsQuiet] = useState(true)
  const [smokes, setSmokes] = useState(true)
  const [overnightGuests, setOvernightGuests] = useState(true)
  const [isOutgoing, setIsOutgoing] = useState(true)

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, [listOfUsers]);

  const createUser = () => {
    Axios.post("http://localhost:3001/createUser", {
      name,
      email,
      gradYear,
      lottoNum,
      morningPerson,
      isNeat,
      wantsQuiet,
      smokes,
      overnightGuests,
      isOutgoing,
      }).then((response) => {
      alert("USER CREATED");

    });
  };

  return (
    
    <div className="App">
      <div className = "Title">
        RURoommates
      </div>
      <div>
         <input type = "text" placeholder = "Name..." onChange={(event) => {setName(event.target.value);}}/> 
         <input type = "text" placeholder = "Email..." onChange={(event) => {setEmail(event.target.value);}}/> 
         <input type = "number" placeholder = "Grad Year..." onChange={(event) => {setGradYear(event.target.value);}}/> 
         <input type = "text" placeholder = "Lotto Num..." onChange={(event) => {setLottoNum(event.target.value);}}/> 
         <input type = "boolean" placeholder = "Morning Person (yes/no)..." onChange={(event) => {setMorningPerson(event.target.value);}}/> 
         <input type = "boolean" placeholder = "Is Neat (yes/no)..." onChange={(event) => {setIsNeat(event.target.value);}}/> 
         <input type = "boolean" placeholder = "Wants Quiet (yes/no)..." onChange={(event) => {setWantsQuiet(event.target.value);}}/> 
         <input type = "boolean" placeholder = "Smokes (yes/no)..." onChange={(event) => {setSmokes(event.target.value);}}/> 
         <input type = "boolean" placeholder = "Overnight Guests (yes/no)..." onChange={(event) => {setOvernightGuests(event.target.value);}}/> 
         <input type = "boolean" placeholder = "Is Outgoing (yes/no)..." onChange={(event) => {setIsOutgoing(event.target.value);}}/> 
         <button onClick={createUser}> Create User </button>
      </div>

      <Box pl={4} pr={4} pb={8}>
            <div className="UsersDisplay">
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell align="right">Email</TableCell>
                      <TableCell align="right">Grad Year</TableCell>
                      <TableCell align="right">Lotto Num</TableCell>
                      <TableCell align="right">Morning Person</TableCell>
                      <TableCell align="right">Is Neat</TableCell>
                      <TableCell align="right">Wants Quiet</TableCell>
                      <TableCell align="right">Smokes</TableCell>
                      <TableCell align="right">Overnight Guests</TableCell>
                      <TableCell align="right">Is Outgoing</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {listOfUsers.map((user) => (
                      <TableRow
                        key={user.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {user.name}
                        </TableCell>
                        <TableCell align="right">{user.age}</TableCell>
                        <TableCell align="right">{user.email.toString()}</TableCell>
                        <TableCell align="right">{user.gradYear.toString()}</TableCell>
                        <TableCell align="right">{user.lottoNum.toString()}</TableCell>
                        <TableCell align="right">{user.morningPerson}</TableCell>
                        <TableCell align="right">{user.isNeat.toString()}</TableCell>
                        <TableCell align="right">{user.wantsQuiet.toString()}</TableCell>
                        <TableCell align="right">{user.smokes.toString()}</TableCell>
                        <TableCell align="right">{user.overnightGuests.toString()}</TableCell>
                        <TableCell align="right">{user.isOutgoing.toString()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Box>
      
      
    </div>
  );
}

export default App;
