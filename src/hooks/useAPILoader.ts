import { useState, useEffect } from 'react'
import IVideoItem from '../app/definitions/IVideoItem'
import { API_KEY } from '../app/ApiKey'
import axios from 'axios'

export interface ILoaderResult {
  videoItems: Array<IVideoItem>,
  setSearchText: Function, 
  setMaxResults: Function,
}

const useAPILoader = (qText:string, rMax:number): ILoaderResult => {

  const [searchText, setSearchText] = useState(qText)
  const [maxResults, setMaxResults] = useState(rMax)
  const [videoItems, setVideoItems] = useState(new Array<IVideoItem>())

  useEffect(() => {
    const url = 'https://youtube.googleapis.com/youtube/v3/search'

    const loadData = async () => {
      const options = {
        key: API_KEY,
        part: 'snippet',
        maxResults: 20,
        type: 'video',
        q: searchText
      }
      await axios.get(url, {params: options})
      .then ((response: any) => {
        if(response.data.items) {
          parseResponseData(response.data.items)
        }
        console.log(response.data.items)
      })
      .catch((error) => {
        // setIsError(true)
      })
    }

    if(API_KEY) loadData()

  }, [searchText, maxResults])
  
  function parseResponseData(responseItems: Array<any>) {
    const parsedVideoItems: Array<IVideoItem> = []

    for(let i=0; i<responseItems.length; i++) {
      const item: any = responseItems[i]
      const videoItem:IVideoItem = {
        thumb: item.snippet.thumbnails.default.url,
        title: item.snippet.title,
        description: item.snippet.description,
        id: item.id.videoId,
      }
      parsedVideoItems.push(videoItem)
    }

    setVideoItems(parsedVideoItems)
  }

  return {videoItems, setSearchText, setMaxResults}
}

export default useAPILoader