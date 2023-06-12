import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/shadcnUI/form'
import { Input } from '@/components/shadcnUI/input'
import LoadingButton from '@/components/loading-button/loading-button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const formSchema = z.object({
  email: z
    .string()
    .min(10, {
      message: 'Email must be at least 10 characters.',
    })
    .max(64, {
      message: 'Email must be at most 40 characters.',
    })
    .email({
      message: 'Please enter a valid email address.',
    }),
})

function NotifyMeForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  })

  const onSubmit = () => {
    form.reset()
  }

  return (
    <div className='w-full'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='grid gap-2 sm:grid-cols-[1fr_auto] sm:space-y-8'
        >
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-muted-foreground'>
                  Receive an email once upgrades are available
                </FormLabel>
                <FormControl>
                  <Input placeholder='Your email address' {...field} />
                </FormControl>
                <FormMessage className='pl-1' />
              </FormItem>
            )}
          />
          <LoadingButton
            variant='secondary'
            isValidSubmit={form.formState.isValid}
            text='Notify Me'
            loadingText='Saving'
            successText='Awaiting notification'
          />
        </form>
      </Form>
    </div>
  )
}

export default NotifyMeForm
