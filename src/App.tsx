import React, {useState} from 'react';
import {IxButton} from "@siemens/ix-react";

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

import '@siemens/ix-icons/dist/css/ix-icons.css';
import '@siemens/ix/dist/siemens-ix/siemens-ix.css';

import './App.css';

function ToggleMe(props: { toggle: boolean }) {
  return <IxButton>{props.toggle ? 'Test 1' : 'Test 2'}</IxButton>;
}

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
    <div className="App">
      <IxButton onClick={()=> setToggle(!toggle)}>Toggle!</IxButton>
      <ToggleMe toggle={toggle} />
    </div>
    </>
  );
}

export default App;
