import IVideoItem from '../app/definitions/IVideoItem'

interface ISearchItemProps {
  videoItem: IVideoItem,
  setVideoId: (id:string) => void,
}

function PreviewBox({videoItem, setVideoId}: ISearchItemProps) {

  return (
    <article className="item" onClick={() => setVideoId(videoItem.id)}>
      <div className="imageBox">
        <img src={videoItem.thumb} alt="" className="thumb" />
      </div>
      <div className="details">
        <h4>{videoItem.title}</h4>
        <p>{videoItem.description}</p>
      </div>
    </article>
  )
}

export default PreviewBox
