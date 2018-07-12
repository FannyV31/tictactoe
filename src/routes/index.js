import React from 'react'
import {Route, indexRoute} from 'react-router'


const createRoutes = () => {
    return (
        <Route
            path='/'
            component={Template}

        >

        </Route>
    )
}
const Routes = createRoutes()

export default Routes