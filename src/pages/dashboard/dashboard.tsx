import React, { useEffect, useState } from 'react';
import { mockData } from '../mockData';
import { Employee } from '../../models/Employee.interface';
// import Footer from '../../components/footer/Footer';
import './dashboard.scss';
const { employees: mockEmployees } = mockData();

interface IAppProps {}

const Dashboard: React.FunctionComponent<IAppProps> = (props) => {
  const [, setemployees] = useState<Employee[]>([]);

  const loadMoreEmployee = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        response.json().then((res) => {
          setemployees(mockEmployees);
        });
      })
      .then((json) => console.log(json));
  };
  useEffect(() => {
    loadMoreEmployee();
  }, []);

  return (
    <div>
      <h1>All Notes</h1>
    </div>
  );
};

export default Dashboard;
