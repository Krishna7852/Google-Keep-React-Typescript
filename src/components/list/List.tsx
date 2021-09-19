import { Container } from '@material-ui/core';
import * as React from 'react';
import { useDashboardContext } from '../../context/DashboardContext';
import { Employee } from '../../models/Employee.interface';

interface IListProps {
  listItems: Employee[];
}

const List: React.FunctionComponent<IListProps> = (props) => {
  const { listItems } = props;
  const [, setStore] = useDashboardContext();
  return (
    <>
      <Container maxWidth='sm'>
        <button onClick={() => setStore({ name: 'krishna bhamare' })}>
          Update name
        </button>
        {listItems.map((emp: any) => (
          <div style={{ margin: '20px' }} key={emp.id}>
            {emp.first_name}
          </div>
        ))}
      </Container>
    </>
  );
};

export default List;
