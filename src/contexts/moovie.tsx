import * as React from "react";

import { Moovie } from "../constants/types";

export type MoovieContextType = {
  selectedMoovie: Moovie | null;
  setSelectedMoovie: (moovie: Moovie | null) => void;
};

export const MoovieContext = React.createContext<MoovieContextType>({
  selectedMoovie: null,
  setSelectedMoovie: () => console.warn("no moovie provider"),
});

export const useMoovie = () => React.useContext(MoovieContext);

interface MooviePersistorProviderProps {
  children: React.ReactChild;
}

export const MooviePersistorProvider = ({
  children,
}: MooviePersistorProviderProps) => {
  const [selectedMoovie, setSelectedMoovie] = React.useState<Moovie | null>(
    null
  );

  React.useEffect(() => {
    const persistor = localStorage.getItem("selectedMoovie");
    if (persistor) {
      setSelectedMoovie(JSON.parse(persistor));
    }
  }, []);

  React.useEffect(() => {
    if (selectedMoovie)
      localStorage.setItem("selectedMoovie", JSON.stringify(selectedMoovie));
  }, [selectedMoovie]);

  return (
    <MoovieContext.Provider value={{ selectedMoovie, setSelectedMoovie }}>
      {children}
    </MoovieContext.Provider>
  );
};
