

export const Post = ({post, likeCount}) => {

    return (
        <div key={post.id} className="underline">
            <section className="post">
                <div className="post-info">@{post.user.userName}/ <span className="post-topic">{post.topic.name}</span></div>
                <div className="post-title">{post.title}</div>
                <div className="post-body">{post.body}</div>
                <div className="like-object">
                    <button className="like-heart">♥</button>
                    <span className="like-count">{likeCount}</span>
                </div>
            </section>
        </div>
    )
}