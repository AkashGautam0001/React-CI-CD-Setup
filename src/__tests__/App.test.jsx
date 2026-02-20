import {fireEvent, render, screen} from '@testing-library/react'
import App from '../App'
import { test } from 'vitest'

test('render a component', () => {
    render(<App />);
    const linkElement = screen.getByText(/Vite \+ React/i)
    expect(linkElement).toBeInTheDocument()
})

test('increment count on button click', () => {
    render(<App />)
    const buttonElement = screen.getByText(/count is 0/i)
    expect(buttonElement).toBeInTheDocument()

    fireEvent.click(buttonElement)
    expect(buttonElement).toHaveTextContent('count is 1')

    fireEvent.click(buttonElement)
    expect(buttonElement).toHaveTextContent('count is 2')
})