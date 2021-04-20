import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'
import Header from '../components/Header'

test('Renders for header, video-section and search-result element', () => {
  const { getByTestId } = render(<App />)
  const headerElement = getByTestId('header')
  expect(headerElement).toBeInTheDocument()

  const videoElement = getByTestId('video-section')
  expect(videoElement).toBeInTheDocument()

  const searchResultElement = getByTestId('search-result')
  expect(searchResultElement).toBeInTheDocument()
})

test('Renders for text-input change event', () => { 
  const onChange = jest.fn()
  const onKeyPress = jest.fn()

  const { getByTestId } = render(<Header inputText="" onChange={onChange} onKeyPress={onKeyPress} />)
  const inputField = getByTestId('q-input')
  const inputText = 'test-input-text'

  expect(inputField).toBeInTheDocument()
  userEvent.type( inputField, inputText )
  expect(onChange).toHaveBeenCalledTimes(inputText.length)
})
