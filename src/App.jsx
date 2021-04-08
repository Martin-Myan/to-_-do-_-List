import React, { useState } from "react";
// import { useSelector,useDispatch } from "react-redux";
import shortid from "shortid";

import { Input, NewItem } from "./components";

const App = () => {
  const [value, setValue] = useState("");
  const [globalArray, setGlobalArray] = useState([]);

  const changeValueHandler = (e) => {
    setValue(e.target.value);
  };

  const formSubmitFunc = (event) => {
    event.preventDefault();
    if (value.trim()) {
      setGlobalArray([...globalArray, { value, id: shortid.generate() }]);
      setValue("");
    } else if (value.trim() === "") {
      setValue("");
      alert("Input Value empety");
    }
  };

  const deleteCLickHandler = (id) => {
    const newArray = globalArray.filter((item) => item.id !== id);
    setGlobalArray(newArray);
  };

  const renderNewItem = globalArray.map((item) => (
    <NewItem
      newValue={item.value}
      key={shortid.generate()}
      deleteClick={() => deleteCLickHandler(item.id)}
    />
  ));

  return (
    <div className="container">
      <div>
        <form onSubmit={formSubmitFunc}>
          <Input onChange={changeValueHandler} value={value} />
        </form>
      </div>
      {renderNewItem}
    </div>
  );
};

export default App;
