import React, { lazy, Suspense } from "react";
import "./index.css";

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
