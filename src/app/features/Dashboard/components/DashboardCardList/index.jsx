import CSSModules from "react-css-modules";
import PropTypes from "prop-types";
import { Button, Grid } from "@chakra-ui/react";

import DefaultCar from "../../../../../DefaultCar.png";
import styles from "./index.module.css";

const DashboardCardList = ({ carList }) => {
  const renderCarCardItem = ({ id, name, avg_horsepower, avg_price }) => (
    <div key={id} styleName="car-details">
      <img src={DefaultCar} alt={name} styleName="car-image" />
      <span>{name.toUpperCase()}</span>
      <span>Horse Power: {avg_horsepower}</span>
      <span>Showroom Price: {avg_price}</span>
      <Button color="red" styleName="car-card-click">Explore</Button>
    </div>
  )

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={10} styleName="dashboard-list">
      {carList.map(carItem => renderCarCardItem(carItem))}
    </Grid>
  );
};

DashboardCardList.propTypes = {
  dashboardList: PropTypes.array.isRequired
};

export default CSSModules(DashboardCardList, styles);
