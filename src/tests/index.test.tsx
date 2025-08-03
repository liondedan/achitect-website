import { render, screen } from '@testing-library/react'
import Home from './index'

describe('Home', () => {
  it('renders the hero section', () => {
    render(<Home />)

    expect(screen.getByRole('heading', { name: /John Doe, Architect/i })).toBeInTheDocument()
    expect(screen.getByText(/I create timeless, functional, and beautiful spaces that are built to last. My work is a reflection of my commitment to quality, detail, and craftsmanship./i)).toBeInTheDocument()
  })
})