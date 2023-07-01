import bmw_2_series_coupe_2021_main from '@/assets/images/bmw/2series/2seriesFront.jpg'
import bmw_2_series_coupe_2021_secondary from '@/assets/images/bmw/2series/2seriesSide.jpg'
import bmw_2_series_coupe_2021_inside from '@/assets/images/bmw/2series/2seriesInside.jpg'
import lamborghini_huracan_2021_main from '@/assets/images/lamborghini/huracan/lamborghini_huracan_grey_front.webp'
import lamborghini_huracan_2021_secondary from '@/assets/images/lamborghini/huracan/lamborghini_huracan_grey_side.webp'
import lamborghini_huracan_2021_inside from '@/assets/images/lamborghini/huracan/lamborghini_huracan_grey_inside.webp'
import rimac_nevera_2022_main from '@/assets/images/nevera/2022/rimac_front.jpg'
import rimac_nevera_2022_secondary from '@/assets/images/nevera/2022/nevera_hyper_blue_side.webp'
import rimac_nevera_2022_inside from '@/assets/images/nevera/2022/rimac-inside.jpg'
import pininfarina_battista_2023_main from '@/assets/images/pininfarina_batista/main.webp'
import pininfarina_battista_2023_secondary from '@/assets/images/pininfarina_batista/secondary.webp'
import pininfarina_battista_2023_inside from '@/assets/images/pininfarina_batista/inside.webp'
import alpine_2023_main from '@/assets/images/alpine/main.webp'
import alpine_2023_secondary from '@/assets/images/alpine/secondary.webp'
import alpine_2023_inside from '@/assets/images/alpine/inside.webp'
import bugatti_super_sport_2023_main from '@/assets/images/bugatti/main.webp'
import bugatti_super_sport_2023_secondary from '@/assets/images/bugatti/secondary.webp'
import bugatti_super_sport_2023_inside from '@/assets/images/bugatti/inside.webp'
import mercedes_c_class_2023_main from '@/assets/images/mercedes/c-class/main.webp'
import mercedes_c_class_2023_secondary from '@/assets/images/mercedes/c-class/secondary.webp'
import mercedes_c_class_2023_inside from '@/assets/images/mercedes/c-class/inside.webp'
import audi_tt_2023_main from '@/assets/images/audi/tt/main.webp'
import audi_tt_2023_secondary from '@/assets/images/audi/tt/secondary.jpg'
import audi_tt_2023_inside from '@/assets/images/audi/tt/inside.webp'
import bmw_m4_2021_main from '@/assets/images/bmw/m4/main.webp'
import bmw_m4_2021_secondary from '@/assets/images/bmw/m4/back.webp'
import bmw_m4_2021_inside from '@/assets/images/bmw/m4/inside.jpg'

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
      rimac_nevera_2022_secondary,
      rimac_nevera_2022_inside,
    ],
    upgrades: [
      { option: 'Enhanced Suspension', cost: 1500, selected: false },
      { option: 'Custom Interior Trim', cost: 5000, selected: false },
      { option: 'Premium Sound System', cost: 2500, selected: false },
    ],
  },
  {
    quantity: 1,
    price: 37_900,
    basePrice: 37_900,
    name: 'BMW 2 series Coupe 2021',
    type: 'Sport',
    color: 'Violet',
    brand: 'BMW',
    id: 'bmw-2-series-coupe-2021',
    description: `Revving the BMW 2 Series Coupe, where style meets unleashed might. This captivating coupe commands attention with its bold design and thrilling engine options. Immerse in the luxe cabin, where opulence embraces sporty elegance. Advanced tech enhances drives, keeps you connected. Experience unmatched power and style with the BMW 2 Series Coupe.`,
    images: [
      bmw_2_series_coupe_2021_main,
      bmw_2_series_coupe_2021_secondary,
      bmw_2_series_coupe_2021_inside,
    ],
    upgrades: [],
  },
  {
    quantity: 1,
    price: 262_500,
    basePrice: 262_500,
    name: 'Lamborghini Huracan 2021',
    type: 'Super',
    color: 'Grey',
    brand: 'Lamborghini',
    id: 'lamborghini-huracan-2021',
    description: `Introducing the Lamborghini Huracan 2021, a masterpiece of automotive engineering and design. With its striking grey exterior and powerful performance, this supercar demands attention on the road. Step into the luxurious cabin and experience the perfect blend of comfort and exhilaration. Advanced technology and seamless connectivity enhance your driving experience.`,
    images: [
      lamborghini_huracan_2021_main,
      lamborghini_huracan_2021_secondary,
      lamborghini_huracan_2021_inside,
    ],
    upgrades: [
      { option: 'Lamborghini Dynamic Steering', cost: 6000, selected: false },
      { option: 'Magneto-Rheological Suspension', cost: 8500, selected: false },
      { option: 'Lamborghini Telemetry System', cost: 3000, selected: false },
    ],
  },
  {
    quantity: 1,
    price: 77_600,
    basePrice: 77_600,
    name: 'BMW M4 2021',
    type: 'Super',
    color: 'Grey',
    brand: 'BMW',
    id: 'bmw-m4-2021',
    description: `Rev up the BMW M4 2021, a true symbol of performance and luxury. This sleek and stylish supercar captures the essence of speed and elegance. With its impressive grey exterior, the BMW M4 commands attention wherever it goes. Slide into the meticulously crafted interior and feel the perfect fusion of comfort and sportiness. Experience the exhilaration of driving with advanced technology and seamless connectivity.`,
    images: [bmw_m4_2021_main, bmw_m4_2021_secondary, bmw_m4_2021_inside],
    upgrades: [
      { option: "M Driver's Package", cost: 3500, selected: false },
      { option: 'M Carbon Ceramic Brakes', cost: 8000, selected: false },
      {
        option: 'Harman Kardon Surround Sound System',
        cost: 1200,
        selected: false,
      },
    ],
  },
  {
    quantity: 1,
    price: 2_500_000,
    basePrice: 2_500_000,
    name: 'Pinifarina Battista 2023',
    type: 'Hyper',
    color: 'Black',
    brand: 'Pinifarina',
    id: 'pinifarina-battista-2023',
    description: `Introducing the Pininfarina Battista 2023, a hypercar that pushes the boundaries of speed and innovation. With its sleek black exterior and aerodynamic design, this masterpiece captivates the senses. Step inside the meticulously crafted cabin and indulge in the perfect blend of luxury and performance. Advanced technology and seamless connectivity enhance your driving experience.`,
    images: [
      pininfarina_battista_2023_main,
      pininfarina_battista_2023_secondary,
      pininfarina_battista_2023_inside,
    ],
    upgrades: [
      { option: 'Interior Alcantara Package', cost: 15000, selected: false },
      { option: 'Exterior Carbon Fiber Package', cost: 25000, selected: false },
      {
        option: 'High-Performance Track Package',
        cost: 50000,
        selected: false,
      },
    ],
  },
  {
    quantity: 1,
    price: 74_000,
    basePrice: 74_000,
    name: 'Alpine A110 2023',
    type: 'Sport',
    color: 'Blue',
    brand: 'Alpine',
    id: 'alpine-a110-2023',
    description: `Experience the thrill of driving with the Alpine A110 2023, a sports car that embodies passion and precision. With its vibrant blue exterior, this dynamic beauty catches the eye on every corner. Slip into the driver's seat and embrace the perfect balance of agility and comfort. Advanced technology and seamless connectivity elevate your driving experience to new heights.`,
    images: [alpine_2023_main, alpine_2023_secondary, alpine_2023_inside],
    upgrades: [
      { option: 'Sport Exhaust System', cost: 1800, selected: false },
      { option: 'Lightweight Alloy Wheels', cost: 2500, selected: false },
      { option: 'Focal Premium Audio System', cost: 1200, selected: false },
    ],
  },
  {
    quantity: 1,
    price: 5_100_000,
    basePrice: 5_100_000,
    name: 'Bugatti Super Sport 2023',
    type: 'Super',
    color: 'Gold',
    brand: 'Bugatti',
    id: 'bugatti_super_sport_2023',
    description: `Unleash the extraordinary with the Bugatti Super Sport 2023, a supercar that defines luxury and performance. With its dazzling gold exterior, this masterpiece exudes opulence and sophistication. Slide into the sumptuous interior and experience the pinnacle of comfort and speed. Advanced technology and seamless connectivity enhance your driving pleasure.`,
    images: [
      bugatti_super_sport_2023_main,
      bugatti_super_sport_2023_secondary,
      bugatti_super_sport_2023_inside,
    ],
    upgrades: [],
  },
  {
    quantity: 1,
    price: 46_000,
    basePrice: 46_000,
    name: 'Mercedes C Class 2023',
    type: 'Sport',
    color: 'Yellow',
    brand: 'Mercedes',
    id: 'mercedes-c-class-2023',
    description: `Introducing the Mercedes C Class 2023, a sports car that combines elegance and athleticism in perfect harmony. With its vibrant yellow exterior, this beauty stands out from the crowd. Step into the refined cabin and indulge in the ultimate comfort and luxury. Advanced technology and seamless connectivity ensure a connected and exhilarating driving experience.`,
    images: [
      mercedes_c_class_2023_main,
      mercedes_c_class_2023_secondary,
      mercedes_c_class_2023_inside,
    ],
    upgrades: [
      { option: 'Head-Up Display', cost: 1200, selected: false },
      { option: 'AMG Performance Exhaust System', cost: 1500, selected: false },
      {
        option: 'Burmester 3D Surround Sound System',
        cost: 3500,
        selected: false,
      },
    ],
  },
  {
    quantity: 1,
    price: 53_295,
    basePrice: 53_295,
    name: 'Audi TT 2023',
    type: 'Sport',
    color: 'Red',
    brand: 'Audi',
    id: 'audi-tt-2023',
    description: `Experience the thrill of the Audi TT 2023, a sports car that embodies style and performance. With its captivating red exterior, this dynamic beauty demands attention on the road. Slip into the driver's seat and feel the perfect fusion of comfort and sportiness. Advanced technology and seamless connectivity keep you connected and in control.`,
    images: [audi_tt_2023_main, audi_tt_2023_secondary, audi_tt_2023_inside],
    upgrades: [
      { option: 'S Sport Suspension', cost: 2000, selected: false },
      { option: 'Technology Package', cost: 2500, selected: false },
      { option: 'Bang & Olufsen Sound System', cost: 1800, selected: false },
    ],
  },
]

export default CAR_LIST
