import { useState, useEffect, KeyboardEvent, ChangeEvent } from 'react'
import useAPILoader, { ILoaderResult } from './hooks/useAPILoader'
import Header from './components/Header'
import VideoSection from './components/VideoSection'
import SearchResult from './components/SearchResult'
import './css/App.scss'

function App() {

  const [inputText, setInputText] = useState('')
  const [videoId, setVideoId] = useState('')
  const {videoItems, setSearchText}: ILoaderResult = useAPILoader(inputText, 20)

  useEffect(() => {
    if(videoItems.length > 0) {
      setVideoId(videoItems[0].id)
    }
  }, [videoItems])

  const onChange = (ev:ChangeEvent<HTMLInputElement>) =>  {
    setInputText(ev.currentTarget.value)
  }

  const onKeyPress = (ev:KeyboardEvent) => {
    if( ev.key === "Enter") {
      // Load Data
      setSearchText(inputText)
    }
  }

  return (
    <>
      <Header inputText={inputText} onChange={onChange} onKeyPress={onKeyPress} />

      <VideoSection videoId={videoId} />
    
      <SearchResult videoItems={videoItems} setVideoId={setVideoId} />
    </>
  );
}

export default App
