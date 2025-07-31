import { render, screen } from '@testing-library/react'
import Header from '@/components/Header'

describe('Header', () => {
  it('renders navigation links', () => {
    render(<Header />)

    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Portfolio/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /About Me/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Process & Services/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Contact/i })).toBeInTheDocument()
  })
})