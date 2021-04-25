import { useState, useEffect } from 'react'
import useAPILoader, { ILoaderResult } from './hooks/useAPILoader'
import Header from './components/Header'
import VideoSection from './components/VideoSection'
import SearchResult from './components/SearchResult'
import { API_KEY } from './app/ApiKey'
import './css/App.scss'

function App() {

  const [videoId, setVideoId] = useState('')
  const {videoItems, setSearchText}: ILoaderResult = useAPILoader("", 20)

  useEffect(() => {
    if(videoItems.length > 0) {
      setVideoId(videoItems[0].id)
    }
  }, [videoItems])

  const inputKeyPress = (inputText: string) => {
    // Load Data
    setSearchText(inputText)
  }

  return (
    <>
      <Header inputKeyPress={inputKeyPress} />

      { API_KEY && <VideoSection videoId={videoId} /> }

      { !API_KEY && <section className="key-info">You need to get your own API key: <a href="https://developers.google.com/youtube/v3/getting-started" target="_blank" rel="noreferrer">developers.google.com/youtube/v3/</a><br />Add the Key to src/app/ApiKey.ts</section> }
    
      <SearchResult videoItems={videoItems} setVideoId={setVideoId} />
    </>
  );
}

export default App
