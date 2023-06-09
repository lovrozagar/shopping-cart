import baseRoute from './base-route'

const ROUTE_PATHS = {
  HOME: baseRoute,
  CARS: `${baseRoute}/cars/:category`,
  CAR_PRODUCT: `${baseRoute}/cars/:category/:product`,
}

export default ROUTE_PATHS
