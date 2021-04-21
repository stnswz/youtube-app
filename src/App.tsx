import { useState, useEffect } from 'react'
import useAPILoader, { ILoaderResult } from './hooks/useAPILoader'
import Header from './components/Header'
import VideoSection from './components/VideoSection'
import SearchResult from './components/SearchResult'
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

      <VideoSection videoId={videoId} />
    
      <SearchResult videoItems={videoItems} setVideoId={setVideoId} />
    </>
  );
}

export default App
