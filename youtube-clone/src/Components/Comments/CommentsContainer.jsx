import { comments } from "../../Config/Config";
import { CommentsList } from "../index";

const CommentsContainer = () => {
    const commentsData = comments;

    return (
        <div className="overflow-y-auto h-fit">
            <h1 className="text-xl font-bold">Comments :</h1>
            <CommentsList data={commentsData} />
        </div>
    );
};

export default CommentsContainer;