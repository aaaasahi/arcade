import { Home } from "./components/Home"
import { Login } from "./components/auth/Login"
import { Signup } from "./components/auth/Signup"

import { Route, Switch } from "react-router-dom"
import { IndexCommunity } from "./components/community/IndexCommunity"
import { Profile } from "./components/profile/Profile"
import { IndexEvent } from "./components/event/IndexEvent"

export const Router = () => {
  return (
    <Switch>
      <Route exact path={"/signup"} component={Signup} />
      <Route exact path={"/login"} component={Login} />
      <Route exact path={"/"} component={Home} />
      <Route path={"/community"} component={IndexCommunity} />
      <Route exact path={"/profile"} component={Profile} />
      <Route exact path={"/event"} component={IndexEvent} />
    </Switch>
  )
}