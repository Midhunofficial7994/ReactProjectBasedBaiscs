import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import Measure from './ApolloApi/Measure.jsx';
import GoogleSignIn from "./Authentications/GoogleSignIn.jsx";
import FacebookSignIn from "./Authentications/FaceBook.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AntDesign from "./Antdesign/AntDesign.jsx";
import ChakraUi from './ChakraUi/ChakraUi.jsx'
import ReactTable from "./ReactTables/ReactTables";

function App() {
  const clientId = '459947292244-964qsu7q4mgac98vd1o5854j8i3blbjp.apps.googleusercontent.com';

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LocalStorage />} />
        <Route path="/localStorage" element={<LocalStorage />} />
        <Route path="/database" element={<Database />} />
        <Route path="/paginationStep/:page" element={<PaginationButton />} />
        <Route path="/paginationScroll" element={<PagNationScroll />} />
        <Route path="/swrPagination" element={<SwrPagination />} />
        <Route path="/formValidation" element={<FormValidation />} />
        <Route path="/formValidationInformed" element={<Informed />} />
        <Route path="/urlSearch" element={<UrlSearch />} />
        <Route path="/antdesign" element={<AntDesign />} />
        <Route path="/chakraui" element={<ChakraUi/>} />
        <Route path="/reacttable" element={<ReactTable/>} />
     
        <Route path="/measure" element={<ApolloProvider client={client}><Measure /></ApolloProvider>} />
        <Route path="/google" element={
          
          <GoogleOAuthProvider clientId={clientId}>
            <GoogleSignIn />         
          </GoogleOAuthProvider>
        } />
        <Route path="/facebook" element={<FacebookSignIn />} />
      </Routes>
    </BrowserRouter>


      
   
  );
}

export default App;
