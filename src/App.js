import { useState } from 'react';
import Banner from './Components/Banner/Banner';
import Form from './Components/Form';

function App() {

  const [employees, setEmployees] = useState([])

  const onNewEmployeeRegistered = (employee) => {
    console.log(employees)
    setEmployees([...employees, employee])
  }

  return (
    <div className="App">
      <Banner />
      <Form onEmployeeRegistered={employee => onNewEmployeeRegistered(employee)}/>
    </div>
  );
}

export default App;
