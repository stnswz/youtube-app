import PreviewBox from './PreviewBox'
import IVideoItem from '../app/definitions/IVideoItem'

interface ISearchResultProps {
  videoItems: Array<IVideoItem>,
  setVideoId: (id: string) => void,
}

function SearchResult({ videoItems, setVideoId }: ISearchResultProps) {
  return (
    <main data-testid="search-result">
      {videoItems.map( (item, index) => <PreviewBox key={item.id + index} videoItem={item} setVideoId={setVideoId} /> )}
    </main>
  )
}

export default SearchResult
