type PageSectionHeadingProps = {
  title: string
  description: string
}

function PageSectionHeading({ title, description }: PageSectionHeadingProps) {
  return (
    <>
      <h2 className='scroll-m-20 text-center text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
        {title}
      </h2>
      <p className='border-b pb-2 text-center text-sm leading-7 text-neutral-400'>
        {description}
      </p>
      <div className='mt-3 w-full items-center justify-between gap-2 sm:flex'></div>
    </>
  )
}

export default PageSectionHeading
