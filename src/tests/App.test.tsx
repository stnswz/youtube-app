import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'
import SearchResult from '../components/SearchResult'
import Header from '../components/Header'
import IVideoItem from '../app/definitions/IVideoItem'

test('Renders for existing header, video-section and search-result element', () => {
  render(<App />)
  const headerElement = screen.getByTestId('header')
  expect(headerElement).toBeInTheDocument()

  const videoElement = screen.getByTestId('video-section')
  expect(videoElement).toBeInTheDocument()

  const searchResultElement = screen.getByTestId('search-result')
  expect(searchResultElement).toBeInTheDocument()
})

test('Renders for testing text-input element', () => { 
  render(<Header inputKeyPress={() => {}} />)

  const inputField = screen.getByTestId('q-input')
  const inputText = 'test-input-text'
  userEvent.type( inputField, inputText )
  expect(inputField).toHaveValue(inputText)
})

test('Renders for existing PriviewBox elements', () => { 
  const videoItems: Array<IVideoItem> = [
    {
      thumb: "1.jpg",
      title: "Title 1",
      description: "Description 1",
      id: "Id1",
    },
    {
      thumb: "2.jpg",
      title: "Title 2",
      description: "Description 2",
      id: "Id1",
    }
  ]

  render(<SearchResult videoItems={videoItems} setVideoId={() => {}} />)

  expect(screen.getByText(/Title 1/)).toBeInTheDocument();
  expect(screen.getByText(/Description 1/)).toBeInTheDocument();
  expect(screen.getByText(/Title 2/)).toBeInTheDocument();
  expect(screen.getByText(/Description 2/)).toBeInTheDocument();
})
