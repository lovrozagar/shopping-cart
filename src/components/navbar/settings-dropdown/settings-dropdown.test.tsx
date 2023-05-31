import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import SettingsDropdown from './settings-dropdown'
global.ResizeObserver = require('resize-observer-polyfill')

const light = false
const modeToggle = () => {}

describe('settings dropdown', () => {
  test('trigger renders correctly', () => {
    render(<SettingsDropdown mode={light} modeToggle={modeToggle} />)

    const settingsTriggerElement = screen.getByTestId('settings-trigger')
    expect(settingsTriggerElement).toBeInTheDocument()
  })

  test('trigger opens settings menu', async () => {
    user.setup()
    render(<SettingsDropdown mode={light} modeToggle={modeToggle} />)

    const settingsTriggerElement = screen.getByTestId('settings-trigger')
    await user.click(settingsTriggerElement)

    const menuElement = screen.getByRole('dialog')
    expect(menuElement).toBeVisible()
  })

  test('double trigger closes settings menu', async () => {
    user.setup()
    render(<SettingsDropdown mode={light} modeToggle={modeToggle} />)

    const settingsTriggerElement = screen.getByTestId('settings-trigger')
    await user.click(settingsTriggerElement)
    await user.click(settingsTriggerElement)

    const menuElement = screen.queryByRole('dialog')
    expect(menuElement).not.toBeInTheDocument()
  })

  test('first tab focuses first switch', async () => {
    render(<SettingsDropdown mode={light} modeToggle={modeToggle} />)

    const settingsTriggerElement = screen.getByTestId('settings-trigger')
    await user.click(settingsTriggerElement)

    const firstSwitchElement = screen.getByTestId('first-switch')
    expect(firstSwitchElement).toHaveFocus()
  })

  test('second tab focuses second switch', async () => {
    user.setup()
    render(<SettingsDropdown mode={light} modeToggle={modeToggle} />)

    const settingsTriggerElement = screen.getByTestId('settings-trigger')
    await user.click(settingsTriggerElement)
    await user.tab()

    const secondSwitchElement = screen.getByTestId('second-switch')
    expect(secondSwitchElement).toHaveFocus()
  })

  test('escape closes the menu', async () => {
    user.setup()
    render(<SettingsDropdown mode={light} modeToggle={modeToggle} />)

    const settingsTriggerElement = screen.getByTestId('settings-trigger')
    await user.click(settingsTriggerElement)

    await user.keyboard('{Escape}')
    const menuElement = screen.queryByRole('dialog')
    expect(menuElement).not.toBeInTheDocument()
  })
})
