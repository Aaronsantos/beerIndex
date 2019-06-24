import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import BeerList from './BeerList'
import BeerDetail from './BeerDetail'

export default function AppLayout() {
    return (
        <div>
            <Switch>
                <Route path='/' exact component={BeerList} />
                <Route path='/beer/:id' render={(props) => <BeerDetail id={props.match.params.id} />} />
                <Route render={() => <div><h3>Page Not Found</h3></div>} />
            </Switch>
        </div>
    )
}
