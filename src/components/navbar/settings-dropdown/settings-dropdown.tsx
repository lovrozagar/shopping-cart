import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/shadcnUI/dropdown-menu'
import { Button } from '@/components/shadcnUI/button'
import { Label } from '@/components/shadcnUI/label'
import { Switch } from '@/components/shadcnUI/switch'
import { Settings } from 'lucide-react'

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
      <DropdownMenu>
        <Button
          asChild
          type='button'
          data-testid='settings-button'
          variant='ghost'
          className={`${isInMenu ? 'flex w-full justify-start' : ''}`}
        >
          <DropdownMenuTrigger className='flex gap-4'>
            <Settings className='w-5' /> {isInMenu ? 'Settings' : ''}
          </DropdownMenuTrigger>
        </Button>
        <DropdownMenuContent className='grid gap-y-2 px-4 py-2'>
          <DropdownMenuLabel className='px-0'>Settings</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <div>
            <div className='flex items-center justify-between space-x-4 py-2'>
              <Label htmlFor='dark-mode'>Dark mode</Label>
              <Switch
                checked={mode}
                onCheckedChange={modeToggle}
                id='dark-mode'
                data-testid='mode-switch'
              />
            </div>
          </div>
          <div>
            <div className='flex items-center justify-between space-x-4 py-2'>
              <Label htmlFor='local-storage'>Local storage</Label>
              <Switch
                disabled
                id='local-storage'
                data-testid='storage-switch'
              />
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default SettingsDropdown
