import { GlobalStyle } from "./globalStyle";
import { Route, Routes } from "react-router-dom";

import Main from "./pages/Main";
import Form from "./pages/Form";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
