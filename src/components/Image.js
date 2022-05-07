export default function Image(props){
    return(
        <img class={props.type} src={props.url} alt={props.alt} />
    );
}