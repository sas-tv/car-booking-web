export const getSortByDetails = ([
  {
    id: 1,
    name: "Popularity",
  },
  {
    id: 2,
    name: "Price -- Low to High",
  },
  {
    id: 3,
    name: "Price -- High to Low",
  }
]);

export const getFilteredCarList = (carsList, type, searchQuery, sort) => {
  let filteredCars = null;
  
  if(type === 'search') filteredCars = getSearchFilteredCars(searchQuery, carsList);
  else filteredCars = getSortFilteredCars(sort, carsList);
    
  return filteredCars;
};

const getSearchFilteredCars = (searchQuery, carsList) => {
  searchQuery = searchQuery.toUpperCase();

  if(!carsList.length > 0 || searchQuery === '') return carsList;
  
  const filteredCars = carsList.filter(({ name }) => name.toUpperCase().includes(searchQuery));
  if(filteredCars && filteredCars.length > 0) return filteredCars;
  else return [];
}

export const getSortFilteredCars = (sort, carsList) => {
  let filteredCars = null;

  if(sort === 2) filteredCars = carsList.sort((carA, carB) => carA.avg_price - carB.avg_price);
  else if(sort === 3) filteredCars = carsList.sort((carA, carB) => carB.avg_price - carA.avg_price);
  else filteredCars = carsList;
  
  return filteredCars;
}
