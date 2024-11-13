import PostCard from "./PostCard/PostCard.jsx";
import posts from "../assets/posts.js";

export default function AppMain() {

    return (
        <main>

            <div className="container">
                {posts.map(post =>
                    <PostCard key={post.id}
                        title={post.title}
                        imgage={post.imgage}
                        content={post.content}
                    />)}

            </div>

        </main>
    )
}