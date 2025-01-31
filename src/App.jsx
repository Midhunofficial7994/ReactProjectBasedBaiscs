import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import messages from './InformedComponents/messages.js';
import LocalStorage from './Components/LocalStorage';
import Database from './Components/Database';
import PaginationButton from './Components/PaginationButton';
import PagNationScroll from './Components/PaginationScroll';
import SwrPagination from './Components/SwrPagination';
import FormValidation from './Components/FormValidation';
import Informed from './Informed/Informed';
import UrlSearch from './UrlConnection/UrlSearch';
import MultiForm from './MultiStepForm./MultiForm.jsx'

function App() {
  const language = 'en'; // Default language, you can dynamically change this

  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/localStorage" />} />
          <Route path="/localStorage" element={<LocalStorage />} />
          <Route path="/database" element={<Database />} />
          <Route path="/paginationStep/:page" element={<PaginationButton />} />
          <Route path="/paginationScroll" element={<PagNationScroll />} />
          <Route path="/paginationScroll" element={<SwrPagination />} />
          <Route path="/formValidation" element={<FormValidation />} />
          <Route path="/formValidationInformed" element={<Informed />} />
          <Route path="/urlSearch" element={<UrlSearch />} />
          <Route path="/multi" element={<MultiForm />} />
        </Routes>
      </BrowserRouter>
    </IntlProvider>
  );
}

export default App;
