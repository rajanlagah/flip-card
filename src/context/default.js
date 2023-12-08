import React, { createContext, useState } from "react";

export const DefaultContext = createContext();


const DefaultContextValue = ({ children }) => {
    return (
        <DefaultContext.Provider value={{ }}>{children}</DefaultContext.Provider>
    );
};

export default DefaultContextValue;
