import React, {
  createContext,
  ReactNode,
  useMemo,
} from "react";

export interface Theme {
  primary: string;
  background: string;
}

interface Props {
  theme: Theme;
  children: ReactNode;
}

export const ThemeContext =
  createContext<Theme>({
    primary: "#FF9933",
    background: "#FFFFFF",
  });

export const ThemeProvider = ({
  theme,
  children,
}: Props) => {
  const value = useMemo(
    () => theme,
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};