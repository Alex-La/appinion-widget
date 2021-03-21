import React, { lazy, Suspense, useEffect, useState } from "react";
import "./index.css";

const widgets = { video: lazy(() => import("./widgets/Video")) };

const App = ({
  token = "$2y$10$dRviOZhcoc.MFOkrsemIEONHjwpXVMTTE2wDm7z.wruArVp9qCq2u",
}) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://app.appinion.digital/api/projects/hash/${token}/comments`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              accept: "application/json",
            },
          }
        );
        const data = await response.json();
        setData(data.data.data[data.data.data.length - 1]);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [token]);

  return (
    <div className="appinion-widget">
      <Suspense fallback={<div>Loading...</div>}>
        {loading ? "" : React.createElement(widgets["video"], { data })}
      </Suspense>
    </div>
  );
};

export default App;
