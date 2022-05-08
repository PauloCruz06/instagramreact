export default function IonIcon(props){
    return(
        <ion-icon id={props.id} name={props.name} onClick={props.click}></ion-icon>
    );
}