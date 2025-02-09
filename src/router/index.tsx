import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";

const Router = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Routes>
        {routes.map((routeItem) => {
          const Component = lazy(() => import(`../pages/${routeItem.component}`));
          return routeItem.path.map((path) => (
            <Route
              key={path}
              path={path}
              element={<Component />}
            />
          ));
        })}
      </Routes>
      <Footer />
    </Suspense>
  );
};

export default Router;
