import React, { lazy, Suspense } from "react";

const widgets = { video: lazy(() => import("./widgets/Video")) };

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {React.createElement(widgets["video"])}
    </Suspense>
  );
};

export default App;
