import bmw_2_series_coupe_2021_main from '@/assets/images/bmw/2series/2seriesFront.jpg'
import bmw_2_series_coupe_2021_side from '@/assets/images/bmw/2series/2seriesSide.jpg'
import bmw_2_series_coupe_2021_inside from '@/assets/images/bmw/2series/2seriesInside.jpg'
import porsche_911_speedster_2019 from '@/assets/images/porsche/911 Speedster/porsche.jpg'
import lamborghini_huracan_super_grey from '@/assets/images/lamborghini/huracan/lamborghini_huracan_grey_front.webp'
// import lotus from '@/assets/images/lotus/lotus.jpg'
// import m4 from '@/assets/images/bmw/m4/bmw_m4_sport_grey.webp'
import rimac_nevera_2022_main from '@/assets/images/nevera/2022/rimac_front.jpg'
import rimac_nevera_2022_side from '@/assets/images/nevera/2022/nevera_hyper_blue_side.webp'
import rimac_nevera_2022_inside from '@/assets/images/nevera/2022/rimac-inside.jpg'
// import pininfarina_battista from '@/assets/images/pininfarina_batista/pininfarina_batista_front.webp'
import { CarProduct } from '@/types/car-types'

const CAR_LIST: CarProduct[] = [
  {
    quantity: 1,
    price: 2_400_000,
    basePrice: 2_400_000,
    name: 'Rimac Nevera 2022',
    type: 'Hyper',
    color: 'Blue',
    brand: 'Rimac',
    id: 'Rimac-Nevera-2022',
    description: `Introducing the rimac nevera 2022, an electric hypercar that redefines speed and luxury. With 1,914 horsepower and a 0-60 mph time of 1.85 seconds, it's a true performance marvel. Combining cutting-edge technology, remarkable range, and exquisite craftsmanship, the nevera is the pinnacle of automotive excellence. Experience the future of electric power and unleash unmatched power and style with the rimac nevera 2022.`,
    images: [
      rimac_nevera_2022_main,
      rimac_nevera_2022_side,
      rimac_nevera_2022_inside,
    ],
    upgrades: [
      { option: 'Suspension', cost: 1300.67, selected: false },
      { option: 'Sound System', cost: 2800.67, selected: false },
      { option: 'Bulletproof glass', cost: 5000.02, selected: false },
      { option: 'Bulletproof tires', cost: 6500.03, selected: false },
    ],
  },
  {
    quantity: 1,
    price: 37_900,
    basePrice: 37_900,
    name: 'BMW 2 series Coupe 2021',
    type: 'Sport',
    color: 'Purple',
    brand: 'BMW',
    id: 'bmw-2-series-coupe-2021',
    description: `Revving the BMW 2 Series Coupe, where style meets unleashed might. This captivating coupe commands attention with its bold design and thrilling engine options. Immerse in the luxe cabin, where opulence embraces sporty elegance. Advanced tech enhances drives, keeps you connected. Experience unmatched power and style with the BMW 2 Series Coupe.`,
    images: [
      bmw_2_series_coupe_2021_main,
      bmw_2_series_coupe_2021_side,
      bmw_2_series_coupe_2021_inside,
    ],
    upgrades: [
      { option: 'Suspension', cost: 1300.67, selected: false },
      { option: 'Sound System', cost: 2800.67, selected: false },
      { option: 'Bulletproof glass', cost: 5000.02, selected: false },
      { option: 'Bulletproof tires', cost: 6500.03, selected: false },
    ],
  },
  // {
  //   image: lamborghini_huracan_super_grey,
  //   name: 'Lamborghini Huracan 2021',
  //   price: 453_396,
  //   type: 'Super',
  //   color: 'Grey',
  //   brand: 'Lamborghini',
  //   id: 'lamborghini-huracan-2021',
  //   description: `Unleash the Lamborghini Huracan, a power-packed masterpiece that oozes prestige. Its stunning design demands attention, while its thrilling performance leaves an impact. Step into the lavish cockpit, where luxury meets precision. Cutting-edge tech enhances your drive, ensuring seamless connectivity and total control. Experience the fusion of raw power and unmatched style in the Huracan.`,
  // },
  // {
  //   image: porsche_911_speedster_2019,
  //   name: 'Porsche 911 Speedster 2019',
  //   price: 172_780,
  //   type: 'Super',
  //   color: 'Red',
  //   brand: 'Porsche',
  //   id: 'porsche-911-speedster-2019',
  //   description: `Introducing the Porsche 911 Speedster, a pinnacle of automotive artistry. Its iconic design commands respect, while its exhilarating performance leaves a lasting impression. Step into the cockpit where luxury meets agility. Advanced tech enhances your drive, ensuring seamless connectivity. Experience unmatched power and timeless style with the Porsche 911 Speedster.`,
  // },
  // {
  //   name: 'car',
  //   price: '202310.93',
  //   type: 'sport',
  //   color: 'black',
  //   image: lotus,
  //   brand: '',
  //   id: 'bmw-series2-sport-purple',
  //   description: 'a',
  // },
  // {
  //   name: 'car',
  //   price: '117820.42',
  //   type: 'super',
  //   color: 'blue',
  //   image: m4,
  //   brand: '',
  //   id: 'bmw-series2-sport-purple',
  //   description: 'a',
  // },
  // {
  //   name: 'car',
  //   price: '266240.78',
  //   type: 'hyper',
  //   color: 'black',
  //   image: pininfarina_battista,
  //   brand: '',
  //   id: 'bmw-series2-sport-purple',
  //   description: 'a',
  // },
]

export default CAR_LIST
