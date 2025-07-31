import { render, screen } from '@testing-library/react'
import Home from './index'

describe('Home', () => {
  it('renders the hero section', () => {
    render(<Home />)

    expect(screen.getByRole('heading', { name: /Welcome, Architect/i })).toBeInTheDocument()
    expect(screen.getByText(/A brief introductory text about the architect./i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /Hero Image/i })).toBeInTheDocument()
  })
})