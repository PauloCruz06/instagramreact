import Image from "./Image";

export default function Follow(props) {
    return(
        <div class="follows">
            <Image url={props.url} />
            <p class="gramname">{props.gramName}</p>
            <p class="gramstatus">{props.gramStatus}</p>
            <p class="follow">Seguir</p>
        </div>
    );
}