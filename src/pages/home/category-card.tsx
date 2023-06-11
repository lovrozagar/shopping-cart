import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/shadcnUI/card'
import mustang_red from '@/assets/images/mustang/mustang_red.webp'
import lamborghini_yellow from '@/assets/images/lamborghini/lamborghini_yellow.webp'
import nevera_blue from '@/assets/images/nevera/nevera_blue.webp'

type CategoryCardProps = {
  type: 'sport' | 'super' | 'hyper'
}

function CategoryCard({ type }: CategoryCardProps) {
  return (
    <Card className='grid px-0 shadow-xl sm:grid-cols-2 sm:grid-rows-1 lg:grid lg:grid-cols-1 lg:grid-rows-2'>
      <CardContent className='h-full p-0'>
        <img
          src={
            type === 'sport'
              ? mustang_red
              : type === 'super'
              ? lamborghini_yellow
              : nevera_blue
          }
          alt='bmw'
          className='aspect-video h-full w-full rounded-t-lg object-cover sm:rounded-l-lg sm:rounded-tr-none md:rounded-l-lg lg:rounded-t-lg lg:rounded-bl-none'
        />
      </CardContent>
      <CardHeader>
        <CardTitle className='text-center'>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </CardTitle>
        <CardDescription className='pt-2'>
          {type === 'sport' ? (
            <>
              Unleash passion with Sport cars. Engineered for speed fans, these
              agile vehicles blend sleek style with potent engines. Experience
              quick acceleration, precise handling, and a thrilling ride that
              ignites your love for the road.
            </>
          ) : type === 'super' ? (
            <>
              Unleash supremacy with Super cars. Designed for speed lovers,
              these powerful vehicles combine elegant design with exceptional
              engines. Encounter rapid acceleration, precise control, and an
              electrifying ride that fuels your passion for the road.
            </>
          ) : (
            <>
              Ignite transcendence with Hyper cars. Engineered for speed
              enthusiasts, these extraordinary machines blend breathtaking
              design with mind-blowing power. Experience mind-bending
              acceleration, precise handling, and an exhilarating journey that
              ignites your obsession for the road.
            </>
          )}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}

export default CategoryCard
