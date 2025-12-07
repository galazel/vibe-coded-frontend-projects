import React, { useState, createContext } from "react";
import { Register, Login } from "../pages/account-page";
export const AccountContext = createContext();

function AccountManagement() {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <AccountContext.Provider value={setIsRegistering}>
      <main className="w-full h-screen lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
        
        <div className="hidden bg-muted lg:block h-full relative">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
            alt="School Campus"
            className="h-full w-full object-cover grayscale brightness-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
             <h1 className="text-4xl font-bold text-white tracking-widest drop-shadow-md">ACADEMY OS</h1>
          </div>
        </div>

        <div className="flex items-center justify-center py-12 px-6">
          <div className="mx-auto grid w-[350px] gap-6">
            {isRegistering ? <Register /> : <Login />}
          </div>
        </div>
      </main>
    </AccountContext.Provider>
  );
}

export default AccountManagement;