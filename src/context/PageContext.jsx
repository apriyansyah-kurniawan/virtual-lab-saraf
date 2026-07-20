import { createContext, useContext } from "react";

export const PageContext = createContext(1);

export function usePageKey() {
  return useContext(PageContext);
}
