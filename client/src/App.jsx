import React, { useState, useEffect } from "react";
import { AuthProvider } from "./auth/auth_provider";
import AppRoutes from './routes';
import Header from "./components/header";
import Footer from "./components/footer";

function App(props) {
  return (
    <React.Fragment>
      <AuthProvider>
        <div className="relative w-full min-w-[340px] h-screen flex flex-col">
          <Header />
          <AppRoutes />
          <Footer />
        </div>
      </AuthProvider>
    </React.Fragment>
  );
}

export default App;
