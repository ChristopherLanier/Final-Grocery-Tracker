import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomeScreen from '../../pages/home-screen'
import ContactScreen from '../../pages/contact-screen'
import GroceryListScreen from '../../pages/grocery-list-screen'

const AppRouter = () => {
  return (
    <Switch>
        <Route exact path={'/'} component={HomeScreen} />
        <Route exact path={'/contact'} component={ContactScreen} />
        <Route exact path={'/grocery-list'} component={GroceryListScreen} />
    </Switch>
  )
}

export default AppRouter