import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteProps,
} from "react-router-dom"

import { ErrorView, HomeView, ReceiptsView, CaptureKeyView } from "./views"
import { DefaultLayout } from "./layouts"

interface Props extends RouteProps {
  component: any // TODO: new (props: any) => React.Component
  from: string
}

const RouteWithHeader = ({ component: Component, ...rest }: Props) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <DefaultLayout {...rest}>
          <Component {...matchProps} />
        </DefaultLayout>
      )}
    />
  )
}

export const Routes = () => (
  <Router>
    <Switch>
      <RouteWithHeader exact path="/" component={HomeView} from="/" />
      <Route path="/error">
        <ErrorView />
      </Route>
      <RouteWithHeader
        path="/receipts"
        component={ReceiptsView}
        from="/receipts"
      />
      <Route path="/settings">
        <CaptureKeyView />
      </Route>
    </Switch>
  </Router>
)
