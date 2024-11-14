import Button from "../Button/Button.jsx";

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

            <div><Button /></div>

            <h5>{props.tags}</h5>

        </div>

    )
}