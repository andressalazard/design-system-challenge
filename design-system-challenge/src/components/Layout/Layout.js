import React from 'react';
import styles from './Layout.module.css';

import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import ButtonsPage from '../Pages/ButtonsPage/ButtonsPage';
import HomePage from '../Pages/HomePage/HomePage';
import InputsPage from '../Pages/InputsPage/InputsPage';
import NotFoundPage from '../Pages/NotFoundPage/NotFoundPage';
import SidebarButton from '../Button/SidebarButton/SideBarButton';
import { sideBarIcons } from '../../files/consts';

const Layout = ({ children, ...rest }) => {
  return (
    <div className={styles.layout}>
      <Router>
        <div className={styles.app_content}>
          <div className={styles.sidebar}>
            <div className={styles.heading}>
              <h1><span style={{ color: '#F7542E' }}>
                Dev</span>challenges.io</h1>
            </div>
            <div className={styles.options_list}>
              <div className={styles.option}>
                <Link to="/home" className={styles.link}>
                  <SidebarButton icon ={sideBarIcons.HOME} 
                    value = {'Home'}/>
                </Link>
              </div>
              <div className={styles.option}>
                <Link to="/buttons" className={styles.link}>
                  <SidebarButton icon ={sideBarIcons.BUTTON} 
                      value = {'Buttons'}/>
                </Link>
              </div>
              <div className={styles.option}>
                <Link to="/inputs" className={styles.link}>
                  <SidebarButton icon ={sideBarIcons.INPUT} 
                      value = {'Inputs'}/>
                </Link>
              </div>
            </div>

          </div>
          <div className={styles.page_content}>
            <Switch>
              <Route exact path="/">
                  <Redirect to="/home" />
              </Route>
              <Route exact path="/home" component={HomePage}/>
              <Route exact path="/buttons" component={ButtonsPage}/>
              <Route exact path="/inputs" component={InputsPage}/>
              <Route component={NotFoundPage}/>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default Layout;