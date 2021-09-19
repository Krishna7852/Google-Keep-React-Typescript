import React from 'react';

// Defines the structure of global context store, and default values.
// If you're using a non-built-in type, use "as" to declare the type.
// This structure is the *ONLY THING* you need to customize in this file,
// everything else will adapt accordingly.
const initialState = {
  name: 'Krisshna', //as string,
  menuItems: [
    { id: 1, name: 'Notes', route: '/notes' },
    { id: 2, name: 'Reminders', route: '/reminders' },
    { id: 3, name: 'Archive', route: '/archive' },
    { id: 4, name: 'Trash', route: '/trash' },
  ],
  selectedRoute: '/notes', // default Notes page is selected
  isModalOpen: false,
  list: [],
};

// Global app context.
type StateT = typeof initialState;
type StateGetSetT = [StateT, React.Dispatch<React.SetStateAction<StateT>>];

const DashboardContext = React.createContext<StateGetSetT | undefined>(
  undefined
);

// Context provider, should wrap entire application.
type DashboardContextProviderProps = {
  children: React.ReactNode;
};

function DashboardContextProvider({ children }: DashboardContextProviderProps) {
  const contextGetSet = React.useState(initialState);
  return (
    <DashboardContext.Provider value={contextGetSet}>
      {children}
    </DashboardContext.Provider>
  );
}

// Custom hook to retrieve and set context state.
type SetPartialStateT = (newVals: Partial<StateT>) => void;
type UseDashboardContextT = [StateT, SetPartialStateT];

function useDashboardContext(): UseDashboardContextT {
  const [state, setState] = React.useContext(DashboardContext) as StateGetSetT;
  function setPartialState(newVals: Partial<StateT>) {
    setState({ ...state, ...newVals });
  }
  console.log('state::---', state);
  return [state, setPartialState];
}

export { DashboardContextProvider, useDashboardContext };
