import './App.css';

import React, { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const [progress, setProgress] = useState(0);
  let pageSize = 5;
  const apiKey = "e1296b54db1a455689be9455bfa8033e";

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path="/" element={<News apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} country="in" category="general" />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/business" element={<News apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} country="in" category="business" />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/entertainment" element={<News apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} country="in" category="entertainment" />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/health" element={<News apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} country="in" category="health" />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/science" element={<News apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} country="in" category="science" />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/sports" element={<News apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} country="in" category="sports" />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/technology" element={<News apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} country="in" category="technology" />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
