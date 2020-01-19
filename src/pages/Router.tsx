import React from "react";
import { Switch, Route, Router as HistoryRouter } from "react-router-dom";
import { PAGE_ROUTES } from "../utils/constants";
import { Root } from ".";
import history from "../utils/history";

export default function Router() {
  return (
    <HistoryRouter history={history}>
      <Switch>
        <Route path={PAGE_ROUTES.ROOT} component={Root} />
      </Switch>
    </HistoryRouter>
  );
}
