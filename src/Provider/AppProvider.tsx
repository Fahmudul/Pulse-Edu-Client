"use client";
import UserProvider from "@/Context/UserContext";
import { AppStore, makeStore } from "@/Redux/store";
import Loader from "@/components/Loader/Loader";

import React, { useRef } from "react";
import { Provider } from "react-redux";
import { persistStore, type Persistor } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const storeRef = useRef<AppStore | null>(null);
  const persistorRef = useRef<Persistor>({} as Persistor);
  // const [loading, setLoading] = useState(true);
  // const [user, setUser] = useState(null);
  // useEffect(() => {});
  if (!storeRef.current) {
    storeRef.current = makeStore();
    persistorRef.current = persistStore(storeRef.current);
  }

  return (
    <UserProvider>
      <Provider store={storeRef.current}>
        <PersistGate loading={<Loader />} persistor={persistorRef.current}>
          {children}
        </PersistGate>
      </Provider>
      ;
    </UserProvider>
  );
};
export default AppProvider;
