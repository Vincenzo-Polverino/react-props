export default function PostCard(props) {

    return (
        <div className="postCard">

            <img src={props.image} />

            <h3 className="postTitle">

                {props.title}

            </h3>
            <p className="postText">

                {props.content}

            </p>

            <h5>{props.tags}</h5>

        </div>

    )
}