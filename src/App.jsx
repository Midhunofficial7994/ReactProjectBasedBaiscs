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
import "./InformedComponents/i18.js";
import { ApolloProvider } from "@apollo/client";
import client from "./ApolloApi/apolloClient.js";
import FormWithQuery from "./ApolloApi/FormWithQuery.jsx";
import Measure from './ApolloApi/Measure.jsx'
import GoogleLoginComponent from "./Authentications/GoogleSignIn.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleSignIn from "./Authentications/GoogleSignIn.jsx";
import FacebookSignIn from "./Authentications/FaceBook.jsx";

function App() {

  const clientId = '459947292244-964qsu7q4mgac98vd1o5854j8i3blbjp.apps.googleusercontent.com';
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Navigate to="/localStorage" />} />
    //     <Route path="/localStorage" element={<LocalStorage />} />
    //     <Route path="/database" element={<Database />} />
    //     <Route path="/paginationStep/:page" element={<PaginationButton />} />
    //     <Route path="/paginationScroll" element={<PagNationScroll />} />
    //     <Route path="/paginationScroll" element={<SwrPagination />} />
    //     <Route path="/formValidation" element={<FormValidation />} />
    //     <Route path="/formValidationInformed" element={<Informed/>} />
    //     <Route path="/urlSearch" element={<UrlSearch/>} />
    //     <Route path="/multi" element={<MultiForm/>} />
    //     <Route path="/format" element={<FormatForm/>} />
    //   </Routes>
    // </BrowserRouter>
    



  //   <ApolloProvider client={client}>
  //   <Measure/>
  //  </ApolloProvider> 

    //   <GoogleOAuthProvider clientId={clientId}>
    //   <div >
    //     <GoogleSignIn/>
    //   </div>
    // </GoogleOAuthProvider>
    
<div><FacebookSignIn/></div>
  );
}

export default App;
