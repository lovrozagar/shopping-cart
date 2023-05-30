import { render, screen, within } from '@testing-library/react'
import user from '@testing-library/user-event'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import Title from './title'

const light = false
const dark = true
const nonActiveLink = false
const activeLink = true

describe('CarQuest title', () => {
  test('renders correctly', () => {
    render(<Title mode={light} isActiveLink={nonActiveLink} />)

    const headingTitleElement = screen.getByRole('heading', { level: 1 })
    expect(headingTitleElement).toBeInTheDocument()
  })

  test('active link title type contains a link', () => {
    render(
      <MemoryRouter>
        <Title mode={light} isActiveLink={activeLink} />
      </MemoryRouter>
    )

    const linkElement = screen.getByRole('link')
    expect(linkElement).toBeInTheDocument()
  })

  test('non active link title type does not contains a link', () => {
    render(
      <MemoryRouter>
        <Title mode={light} isActiveLink={nonActiveLink} />
      </MemoryRouter>
    )

    const linkElement = screen.queryByRole('link')
    expect(linkElement).not.toBeInTheDocument()
  })

  test('title link redirects to / ', async () => {
    user.setup()

    render(
      <MemoryRouter initialEntries={['/cars']}>
        <Title mode={light} isActiveLink={activeLink} />
        <Routes>
          <Route path='/cars' element={<div>cars</div>} />
          <Route
            path='/'
            element={<h2>where automotive dreams become reality</h2>}
          />
        </Routes>
      </MemoryRouter>
    )

    const linkElement = screen.getByRole('link')
    expect(linkElement).toBeInTheDocument()

    await user.click(linkElement)

    const homePageHeading = await screen.findByRole('heading', {
      name: /where automotive dreams become reality/i,
    })
    expect(homePageHeading).toBeInTheDocument()
  })

  test('light mode text shadow', () => {
    const lightModeRedTextShadow = '5px 0px 60px #ef4444'
    const lightModeBlueTextShadow = '5px 0px 60px #3b82f6'

    render(
      <MemoryRouter>
        <Title mode={light} isActiveLink={activeLink} />
      </MemoryRouter>
    )

    const heading = screen.getByRole('heading', {
      level: 1,
    })

    const cLetterElement = within(heading).getByText(/c/i)
    const qLetterElement = within(heading).getByText(/q/i)
    const cStyles = window.getComputedStyle(cLetterElement)
    const qStyles = window.getComputedStyle(qLetterElement)

    expect(cStyles.textShadow).toBe(lightModeRedTextShadow)
    expect(qStyles.textShadow).toBe(lightModeBlueTextShadow)
  })

  test('dark mode text shadow', () => {
    const lightModeRedTextShadow = '5px 0px 20px #ef4444'
    const lightModeBlueTextShadow = '5px 0px 20px #3b82f6'

    render(
      <MemoryRouter>
        <Title mode={dark} isActiveLink={activeLink} />
      </MemoryRouter>
    )

    const heading = screen.getByRole('heading', {
      level: 1,
    })

    const cLetterElement = within(heading).getByText(/c/i)
    const qLetterElement = within(heading).getByText(/q/i)
    const cStyles = window.getComputedStyle(cLetterElement)
    const qStyles = window.getComputedStyle(qLetterElement)

    expect(cStyles.textShadow).toBe(lightModeRedTextShadow)
    expect(qStyles.textShadow).toBe(lightModeBlueTextShadow)
  })
})
