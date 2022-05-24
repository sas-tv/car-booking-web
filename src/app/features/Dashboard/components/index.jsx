import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Spinner } from "@chakra-ui/react";
import CSSModules from "react-css-modules";

import AppContext from "../../../utils/AppContext";
import { getFilteredCarList } from "../helpers";
import DashboardFilters from "./DashboardFilters";
import DashboardCardList from "./DashboardCardList";

import styles from "./index.module.css";

const Dashboard = () => {
  const { 
    dashboardList, 
    setDashboardList,
    filteredDashboardList,
    setFilteredDashboardList,
    isDashboardListLoading, 
    setDashboardListLoading
  } = useContext(AppContext);

  async function fetchData() {
    setDashboardListLoading(true);
    const response = await axios.get('https://private-anon-f3930cb735-carsapi1.apiary-mock.com/manufacturers');
    const { data: carsList } = response;
    setDashboardList(carsList);
    setFilteredDashboardList(carsList);
    setDashboardListLoading(false);
  };

  useEffect(() => {
    if(dashboardList.length === 0 && !isDashboardListLoading) fetchData();
  }, []);

  const filterCarsList = (type, search, sort) => {
    const carsList = getFilteredCarList(dashboardList, type, search, sort);
    setFilteredDashboardList(carsList);
  };

  return (
    <div styleName="dashboard-root">
      <DashboardFilters filterCarsList={filterCarsList}/>
      {isDashboardListLoading 
        ? <div styleName="dashboard-list-spinner">
            <Spinner 
              color='red.500'
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              size='xl'
            />
          </div>
        : <DashboardCardList carList={filteredDashboardList} />
      }
    </div>
  );
};

export default CSSModules(Dashboard, styles);
