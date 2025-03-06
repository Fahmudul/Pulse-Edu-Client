import { getUser } from "@/Utils/getUser";
import { TUserType } from "@/types/global";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
interface IUserProviderValues {
  user: TUserType | null;
  isLoading: boolean;
  setUser: (user: TUserType | null) => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const UserContext = createContext<IUserProviderValues | undefined>(
  undefined
);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<TUserType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    console.log("called");
    const currentUser = async () => {
      const user = await getUser();
      setUser(user);
    };
    currentUser();
  }, [isLoading]);
  return (
    <UserContext.Provider value={{ user, setUser, isLoading, setIsLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
