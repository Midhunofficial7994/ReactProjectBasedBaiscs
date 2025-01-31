import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import LocalStorage from "./Components/LocalStorage";
import Database from "./Components/Database";
import PaginationButton from "./Components/PaginationButton";
import PagNationScroll from "./Components/PaginationScroll";
import SwrPagination from "./Components/SwrPagination";
import FormValidation from "./Components/FormValidation";
import Informed from "./Informed/Informed";
import UrlSearch from "./UrlConnection/UrlSearch";
import './InformedComponents/i18.js'
// import "./App.css";
import MultiForm from './MultiStepForm./MultiForm.jsx'
import FormatForm from "./FormatForm.js/Form.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/localStorage" />} />
        <Route path="/localStorage" element={<LocalStorage />} />
        <Route path="/database" element={<Database />} />
        <Route path="/paginationStep/:page" element={<PaginationButton />} />
        <Route path="/paginationScroll" element={<PagNationScroll />} />
        <Route path="/paginationScroll" element={<SwrPagination />} />
        <Route path="/formValidation" element={<FormValidation />} />
        <Route path="/formValidationInformed" element={<Informed/>} />
        <Route path="/urlSearch" element={<UrlSearch/>} />
        <Route path="/multi" element={<MultiForm/>} />
        <Route path="/format" element={<FormatForm/>} />
      </Routes>
    </BrowserRouter>  
  );
}

export default App;              
                               