import baseRoute from './base-route'

const LINK_PATHS = {
  TO_HOME: baseRoute,
  TO_CARS_ALL: `${baseRoute}/cars/all`,
  TO_CARS_SPORT: `${baseRoute}/cars/sport`,
  TO_CARS_SUPER: `${baseRoute}/cars/super`,
  TO_CARS_HYPER: `${baseRoute}/cars/hyper`,
  goToProduct(category: string, carName: string) {
    return `${baseRoute}/cars/${category}/${carName}`
  },
}

export default LINK_PATHS
