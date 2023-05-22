import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import RateForm from "./RateForm";
import ThankYou from "./ThankYou";

function App(){
  const [rate, setRate] = useState("");
  let navigate = useNavigate();

  const submit = (ratingLV) => {
    console.log(ratingLV)
    setRate(ratingLV)
    navigate("submit")
  }

  return (
    <main>
      <Routes>
        <Route path="/" element={<RateForm submitFunc={submit}/>}></Route>
        <Route exact path="/submit" element={<ThankYou rate={rate}/>}></Route>
      </Routes>
    </main>
  )
}

export default App;
