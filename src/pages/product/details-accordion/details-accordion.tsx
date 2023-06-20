import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/shadcnUI/accordion'

function DetailsAccordion() {
  return (
    <Accordion type='single' collapsible className='mt-6 w-full'>
      <AccordionItem value='item-1'>
        <AccordionTrigger>Technical data</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger>Features</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other components'
          aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3'>
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default DetailsAccordion
