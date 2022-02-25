import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={""}></Route> {/* Root route */}
        <Route path="*" element={<Navigate to="/" />} />
        {/* ^^ Any route that is not yet defined redirects to the root route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
