import { Comment } from '../index';

const CommentsList = ({ data }) => {
    return (
        <div className='bg-gray-900 h-fit p-2 '>
            {data.map((comment, index) => (
                <div key={index} className='border-l-2'>
                    <Comment commentData={comment} />
                    <div className='ml-8 '>
                        <CommentsList data={comment.replies} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CommentsList;