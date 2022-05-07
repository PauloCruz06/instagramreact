import Image from "./Image";
import IonIcon from "./IonIcon";

export default function Post(props){
    return(
        <div class="post">
            <div class="post-top">
                <Image url={props.userImage}/>
                <p>{props.postName}</p>
                <IonIcon name="ellipsis-horizontal" />
            </div>
            <Image type="img-main" url={props.postImage} />
            <div class="post-bottom">
                <div class="icons">
                    <IonIcon name="heart-outline" />
                    <IonIcon name="chatbubble-outline" />
                    <IonIcon name="paper-plane-outline" />
                    <IonIcon name="bookmark-outline" />
                </div>
                <div class="likes">
                    <Image url={props.likeImage} />
                    <p>Curtido por</p>
                    <strong>{props.likeName}</strong>
                    <p>e</p>
                    <strong>outras {props.likes} pessoas</strong>
                </div>
            </div>
        </div>
    );
}