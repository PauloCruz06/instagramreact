import Image from "./Image";

export default function Story(props){
    return(
        <div class="story">
            <Image type="img-back"  url="/images/stories_background.jpg" />
            <Image type="img-front"  url={props.url} />
            <p>{props.name}</p>
        </div>
    );
}