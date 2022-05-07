import IonIcon from "./IonIcon";
import Story from "./Story";

export default function Conteiner(){
    return(
         <div class="conteiner">
            <div class="feed">
                <div class="stories">
                    <IonIcon name="chevron-forward-circle" />
                    {stories.map((story) => (<Story url={story.url} name={story.name} />))}
                </div>
            </div>
        </div>
    );
}

const stories = [
    {url: "/images/9gag.jpg", name: "9gag"},
    {url: "/images/meowed.jpg", name: "meowed"},
    {url: "/images/barked.jpg", name: "barked"},
    {url: "/images/nathanwpylestrangeplanet.jpg", name: "nathanwpyle..."},
    {url: "/images/wawawiwacomicsa.jpg", name: "wawawiwac..."},
    {url: "/images/respondeai.jpg", name: "respondeai"},
    {url: "/images/filomoderna.jpg", name: "filomoderna"},
    {url: "/images/memeriagourmet.jpg", name: "memeriago"}  
];