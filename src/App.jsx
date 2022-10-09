import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";

import router from "./routes/routes.config";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "./App.scss";

const App = () => {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
