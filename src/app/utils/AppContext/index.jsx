import { createContext, useState } from "react";

const AppContext = createContext();

const defaultDashboardList = [];

export const AppContextProvider = ({children}) => {
  const [dashboardList, setDashboardList] = useState(defaultDashboardList);
  const [filteredDashboardList, setFilteredDashboardList] = useState(defaultDashboardList);
  const [isDashboardListLoading, setDashboardListLoading] = useState(false);

  return (
    <AppContext.Provider value={{
        dashboardList,
        setDashboardList: carList =>
          setDashboardList(carList == null ? defaultDashboardList : carList),
        filteredDashboardList,
        setFilteredDashboardList: carList =>
          setFilteredDashboardList(carList === null ? defaultDashboardList : carList),
        isDashboardListLoading,
        setDashboardListLoading: isLoading =>
          setDashboardListLoading(isLoading)
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
