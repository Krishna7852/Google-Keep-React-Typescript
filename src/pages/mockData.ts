/* eslint-disable no-labels */
/* eslint-disable @typescript-eslint/no-unused-expressions */
export const mockData = () => {
  return {
    employees: [
      {
        id: 1,
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@abc.com',
        gender: 'Male',
        status: 'Terminated',
      },
      {
        id: 2,
        first_name: 'Jane',
        last_name: 'Doe',
        email: 'janedoe@abc.com',
        gender: 'Female',
        status: 'New',
      },
      {
        id: 3,
        first_name: 'Alice',
        last_name: 'Doe',
        email: 'alicedoe@abc.com',
        gender: 'Female',
        status: 'Leaving',
      },
      {
        id: 4,
        first_name: 'Bob',
        last_name: 'Doe',
        email: 'bobdoe@abc.com',
        gender: 'Male',
        status: 'Active',
      },
    ],
  };
};
