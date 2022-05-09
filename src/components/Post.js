import React from "react";

import Image from "./Image";
import IonIcon from "./IonIcon";

export default function Post(props){
    const VALOR_INICIAL =  "heart-outline";
    const [heart, setHeart] = React.useState(VALOR_INICIAL);

    function heartShape(){
        if(heart === "heart-outline"){
            setHeart("heart");
        }
    }

    function heartShape2(){
        if(heart === "heart-outline"){
            setHeart("heart");
        }else if(heart === "heart"){
            setHeart("heart-outline");
        }
    }
    
    return(
        <div class="post" onClick={heartShape} >
            <div class="post-top">
                <Image url={props.userImage}/>
                <p>{props.postName}</p>
                <IonIcon name="ellipsis-horizontal" />
            </div>
            <Image type="img-main" url={props.postImage} />
            <div class="post-bottom">
                <div class="icons">
                    <IonIcon id={heart} name={heart} click={heartShape2}/>
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