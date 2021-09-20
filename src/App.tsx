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
import Trash from './pages/trash/trash';

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
                <Route exact path='/notes' component={Dashboard} />
                <Route path='/reminders' component={Reminders} />
                <Route path='/archive' component={Archive} />
                <Route path='/trash' component={Trash} />
              </Switch>
            </div>
          </div>
        </DashboardContextProvider>
      </Router>
    </div>
  );
}

export default App;
