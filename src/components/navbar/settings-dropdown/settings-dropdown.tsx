import { Button } from '@/components/shadcnUI/button'
import { Label } from '@/components/shadcnUI/label'
import { Switch } from '@/components/shadcnUI/switch'
import { Settings } from 'lucide-react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/shadcnUI/popover'
import { Separator } from '@/components/shadcnUI/separator'

type SettingsDropdownProps = {
  mode: boolean
  modeToggle: (checked: boolean) => void
  isInMenu?: boolean
}

function SettingsDropdown({
  mode,
  modeToggle,
  isInMenu = false,
}: SettingsDropdownProps) {
  return (
    <div className='flex items-center'>
      <Popover>
        <Button
          asChild
          type='button'
          data-testid='settings-button'
          variant='ghost'
          className={`${isInMenu ? 'flex w-full justify-start' : ''}`}
        >
          <PopoverTrigger>
            <Settings className='w-5' /> {isInMenu ? 'Settings' : ''}
          </PopoverTrigger>
        </Button>
        <PopoverContent className='grid w-auto gap-2'>
          <div className='flex w-auto items-center gap-x-10 gap-y-4 px-3 py-2'>
            <Label htmlFor='dark-mode'>Dark mode</Label>
            <Switch
              checked={mode}
              onCheckedChange={modeToggle}
              id='dark-mode'
              data-testid='mode-switch'
              className='ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
            />
          </div>
          <Separator />
          <div className='flex w-auto items-center justify-between gap-x-6 gap-y-4 px-3 py-2'>
            <Label>Local storage</Label>
            <Switch
              disabled
              className='ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
            />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default SettingsDropdown
