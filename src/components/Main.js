import Image from "./Image";

export default function Main(props){
    return (
        <div class="main">
            <Image url={props.url} />
            <p>{props.name}</p>
            <p>{props.subname}</p>
        </div>
    );
}