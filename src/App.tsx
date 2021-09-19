import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.scss';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/sidebar';
import { DashboardContextProvider } from './context/DashboardContext';
import Archive from './pages/archive/archive';
import Dashboard from './pages/dashboard/dashboard';
import Reminders from './pages/reminders/reminders';

function App() {
  return (
    <div className='App'>
      <Router>
        <DashboardContextProvider>
          <div className='parent'>
            <div className='header-wrapper'>
              <Header />
            </div>
            <div className='sidebar-wrapper'>
              <Sidebar />
            </div>
            <div className='notes-wrapper'>
              <Switch>
                <Route
                  exact
                  path='/'
                  render={() => {
                    return <Redirect to='/notes' />;
                  }}
                />
                <Route exact path='/notes'>
                  <Dashboard />
                </Route>
                <Route path='/reminders'>
                  <Reminders />
                </Route>
                <Route path='/archive'>
                  <Archive />
                </Route>
                <Route path='/trash'>
                  <Archive />
                </Route>
              </Switch>
            </div>
          </div>
        </DashboardContextProvider>
      </Router>
    </div>
  );
}

export default App;
