import { useState } from 'react';
import Banner from './Components/Banner/Banner';
import Form from './Components/Form';
import Team from './Components/Team';

function App() {

  const teams = [
    {
      name: 'Programming',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      name: 'DevOps',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    {
      name: 'UX & Design',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5'
    },
    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    }
  ]

  const [employees, setEmployees] = useState([])

  const onNewEmployeeRegistered = (employee) => {
    console.log(employees)
    setEmployees([...employees, employee])
  }

  return (
    <div className="App">
      <Banner />
      <Form onEmployeeRegistered={employee => onNewEmployeeRegistered(employee)}/>
      {
        teams.map(team => 
          <Team 
            key={team.name}
            title={team.name} 
            primaryColor={team.primaryColor} 
            secondaryColor={team.secondaryColor}
          />
        )
      }
    </div>
  );
}

export default App;
