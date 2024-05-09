const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-6">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="my-4">
        <button className="bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-white p-4 px-12 mx-2 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle
