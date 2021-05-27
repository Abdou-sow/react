import { useState, useEffect } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import StudentList from './views/StudentList'
import Add from './views/AddStudents';

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Students</h1>


        <Switch>
          <Route path="/" exact>
            <StudentList />
            <Add />

          </Route>

          <Route path="studentAdded" exact>

          </Route>

        </Switch>
      </div>
      <div className={"col-6"}>
        



      </div>


    </BrowserRouter>
  );
}

export default App;