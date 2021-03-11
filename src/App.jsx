import React, { lazy, Suspense } from "react";

const widgets = { video: lazy(() => import("./widgets/Video")) };

const App = () => {
  return (
    <div className="appinion-widget">
      <Suspense fallback={<div>Loading...</div>}>
        {React.createElement(widgets["video"])}
      </Suspense>
    </div>
  );
};

export default App;
