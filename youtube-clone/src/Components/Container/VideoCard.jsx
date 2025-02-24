const VideoCard = ({ data }) => {
    const { snippet, statistics } = data;
    const { channelTitle, title, thumbnails } = snippet;
    const { viewCount } = statistics;

    return (
        <div className="w-80">
            <img src={thumbnails?.medium?.url} alt="thumbnail" className="rounded-lg w-full" />
            <div className="flex flex-col gap-2 my-3">
                <p className="text-lg font-medium w-full overflow-hidden text-ellipsis whitespace-normal max-h-[3.6em] leading-[1.8em]">
                    {title}
                </p>
                <p className="text-gray-400 text-sm">{channelTitle}</p>
                <p className="text-gray-400 text-sm">{viewCount} views</p>
            </div>
        </div>
    );
};

export default VideoCard;
