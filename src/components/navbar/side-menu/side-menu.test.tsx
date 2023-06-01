import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import user from '@testing-library/user-event'
import SideMenu from './side-menu'

global.ResizeObserver = require('resize-observer-polyfill')
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

describe('side menu', () => {
  test('trigger renders correctly', () => {
    render(
      <MemoryRouter>
        <SideMenu />
      </MemoryRouter>
    )

    const triggerElement = screen.getByTestId('side-menu-button')
    expect(triggerElement).toBeInTheDocument()
  })

  test('trigger opens side menu', async () => {
    user.setup()
    render(
      <MemoryRouter>
        <SideMenu />
      </MemoryRouter>
    )

    const triggerElement = screen.getByTestId('side-menu-button')
    await user.click(triggerElement)

    const sideMenuElement = screen.getByRole('dialog')
    expect(sideMenuElement).toBeVisible()
  })

  test('close button closes side menu', async () => {
    user.setup()
    render(
      <MemoryRouter>
        <SideMenu />
      </MemoryRouter>
    )

    const triggerElement = screen.getByTestId('side-menu-button')
    await user.click(triggerElement)

    const closeText = screen.getByText(/Close/i, {
      selector: 'button > span.sr-only',
    })
    const closeButtonElement = closeText.closest('button')

    if (!closeButtonElement) return
    await user.click(closeButtonElement)

    const sideMenuElement = screen.queryByRole('dialog')
    expect(sideMenuElement).not.toBeInTheDocument()
  })

  test('done button closes side menu', async () => {
    user.setup()
    render(
      <MemoryRouter>
        <SideMenu />
      </MemoryRouter>
    )

    const triggerElement = screen.getByTestId('side-menu-button')
    await user.click(triggerElement)

    const doneButtonElement = screen.getByRole('button', { name: /done/i })
    await user.click(doneButtonElement)

    const sideMenuElement = screen.queryByRole('dialog')
    expect(sideMenuElement).not.toBeInTheDocument()
  })

  test('side menu home link routes to home', async () => {
    user.setup()
    render(
      <MemoryRouter initialEntries={['/shopping-cart/cars']}>
        <SideMenu />
        <Routes>
          <Route
            path='/shopping-cart/'
            element={<h2>where automotive dreams become reality</h2>}
          />
          <Route path='/shopping-cart/cars' element={<div>cars</div>} />
        </Routes>
      </MemoryRouter>
    )

    const triggerElement = screen.getByTestId('side-menu-button')
    await user.click(triggerElement)

    const homeLinkElement = screen.getByRole('link', { name: /home/i })
    await user.click(homeLinkElement)

    const homePageHeading = await screen.findByRole('heading', {
      name: /where automotive dreams become reality/i,
    })
    expect(homePageHeading).toBeInTheDocument()
  })

  test('side menu cars link routes to all cars', async () => {
    user.setup()
    render(
      <MemoryRouter initialEntries={['/shopping-cart/']}>
        <SideMenu />
        <Routes>
          <Route
            path='/shopping-cart/'
            element={<h2>where automotive dreams become reality</h2>}
          />
          <Route
            path='/shopping-cart/cars'
            element={<h2>cars are awesome</h2>}
          />
        </Routes>
      </MemoryRouter>
    )

    const triggerElement = screen.getByTestId('side-menu-button')
    await user.click(triggerElement)

    const carNavigationButton = screen.getByRole('button', { name: /cars/i })
    await user.click(carNavigationButton)

    const homePageHeading = await screen.findByRole('heading', {
      name: /cars are awesome/i,
    })
    expect(homePageHeading).toBeInTheDocument()
  })

  test('side menu saved link routes to saved', async () => {
    user.setup()
    render(
      <MemoryRouter initialEntries={['/shopping-cart/']}>
        <SideMenu />
        <Routes>
          <Route
            path='/shopping-cart/'
            element={<h2>where automotive dreams become reality</h2>}
          />
          <Route
            path='/shopping-cart/saved'
            element={<h2>your saved items</h2>}
          />
        </Routes>
      </MemoryRouter>
    )

    const triggerElement = screen.getByTestId('side-menu-button')
    await user.click(triggerElement)

    const homeLinkElement = screen.getByRole('link', { name: /saved/i })
    await user.click(homeLinkElement)

    const homePageHeading = await screen.findByRole('heading', {
      name: /your saved items/i,
    })
    expect(homePageHeading).toBeInTheDocument()
  })

  test('side menu cart link routes to cart', async () => {
    user.setup()
    render(
      <MemoryRouter initialEntries={['/shopping-cart/']}>
        <SideMenu />
        <Routes>
          <Route
            path='/shopping-cart/'
            element={<h2>where automotive dreams become reality</h2>}
          />
          <Route
            path='/shopping-cart/cart'
            element={<h2>your cart is empty</h2>}
          />
        </Routes>
      </MemoryRouter>
    )

    const triggerElement = screen.getByTestId('side-menu-button')
    await user.click(triggerElement)

    const homeLinkElement = screen.getByRole('link', { name: /cart/i })
    await user.click(homeLinkElement)

    const homePageHeading = await screen.findByRole('heading', {
      name: /your cart is empty/i,
    })
    expect(homePageHeading).toBeInTheDocument()
  })
})
