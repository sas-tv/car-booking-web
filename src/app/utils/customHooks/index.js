import { useContext } from "react";

import AppContext from "../AppContext";


export const useCars = () => {
  const { setDashboardList } = useContext(AppContext);

  return setDashboardList;
};

export const useCarsLoading = () => {
  const { setDashboardListLoading } = useContext(AppContext);

  return setDashboardListLoading;
};
