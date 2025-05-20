"use client";

import { CPHikeContextState, Handles } from "@/types/global";
import { createContext, ReactNode, useContext, useState } from "react";

const CPHikeContext = createContext<CPHikeContextState | null>(null);

export const CPHikeContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [handles, setHandles] = useState<Handles>({
    name: "",
    cf: "",
    lc: "",
    cc: "",
    hr: "",
  });

  return (
    <CPHikeContext.Provider value={{ handles, setHandles }}>
      {children}
    </CPHikeContext.Provider>
  );
};

export const useCPHikeContext = (): CPHikeContextState => {
  const context = useContext(CPHikeContext);
  if (!context) {
    throw new Error(
      "useCPHikeContext must be used within an CPHikeContextProvider"
    );
  }
  return context;
};
