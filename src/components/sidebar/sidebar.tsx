/* eslint-disable react-hooks/exhaustive-deps */
import React, { useLayoutEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { useDashboardContext } from '../../context/DashboardContext';
import './sidebar.scss';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
interface ISidebarProps {}

const Sidebar: React.FunctionComponent<ISidebarProps> = () => {
  let history = useHistory();
  let location = useLocation();
  const [store, setStore] = useDashboardContext();
  const classes = useStyles();
  useLayoutEffect(() => {
    setStore({ selectedRoute: location.pathname });
  }, [location.pathname]);
  const routeHandler = (route: string) => {
    history.push(route);
  };
  return (
    <>
      <Drawer
        className={classes.drawer}
        variant='permanent'
        classes={{
          paper: classes.drawerPaper,
        }}>
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {store.menuItems.map((menu, index) => (
              <div
                key={menu.id}
                className={
                  store.selectedRoute === menu.route ? 'selected-menu' : ''
                }
                onClick={() => routeHandler(menu.route)}>
                <ListItem button>
                  <ListItemIcon>
                    {/* TODO:Map the icon for item */}
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={menu.name} />
                </ListItem>
              </div>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default Sidebar;
