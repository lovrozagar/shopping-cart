import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import user from '@testing-library/user-event'
import Navbar from '@/components/navbar/navbar'
// IMPORT OBSERVER, UNDEFINED BY DEFAULT
global.ResizeObserver = require('resize-observer-polyfill')

describe('Navbar', () => {
  test('renders links correctly', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    )

    const homeLinkElement = screen.getByRole('link', {
      name: /home/i,
    })
    const productsLinkElement = screen.getByRole('link', {
      name: /cars/i,
    })

    expect(homeLinkElement).toBeVisible()
    expect(productsLinkElement).toBeVisible()
  })

  test('renders buttons correctly', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    )

    const settingsButtonElement = screen.getByTestId('settings-button')
    expect(settingsButtonElement).toBeVisible()

    const settingMenuElement = screen.queryByRole('menu')
    expect(settingMenuElement).not.toBeInTheDocument()
  })

  test('settings button opens menu', async () => {
    user.setup()

    render(
      <Router>
        <Navbar />
      </Router>
    )

    const settingsButtonElement = screen.getByTestId('settings-button')
    await user.click(settingsButtonElement)

    const settingMenuElement = screen.getByRole('menu')
    expect(settingMenuElement).toBeInTheDocument()
  })

  test('settings button double click closes menu', async () => {
    user.setup()

    render(
      <Router>
        <Navbar />
      </Router>
    )

    const settingsButtonElement = screen.getByTestId('settings-button')
    const documentElement = document.documentElement

    await user.click(settingsButtonElement)
    await user.click(documentElement)

    const settingMenuElement = screen.queryByRole('menu')
    expect(settingMenuElement).not.toBeInTheDocument()
  })

  test('switch renders in settings menu', async () => {
    user.setup()

    render(
      <Router>
        <Navbar />
      </Router>
    )

    const settingsButtonElement = screen.getByTestId('settings-button')
    await user.click(settingsButtonElement)

    const switchElement = screen.getByTestId('mode-switch')
    expect(switchElement).toBeVisible()
  })

  test('switch in settings menu toggles dark mode', async () => {
    user.setup()

    render(
      <Router>
        <Navbar />
      </Router>
    )

    const settingsButtonElement = screen.getByTestId('settings-button')
    await user.click(settingsButtonElement)

    const switchElement = screen.getByTestId('mode-switch')
    await user.click(switchElement)

    const documentElement = document.documentElement
    expect(documentElement.classList.contains('dark')).toBeTruthy()
  })
})
