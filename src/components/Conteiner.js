import IonIcon from "./IonIcon";
import Post from "./Post";
import Story from "./Story";

export default function Conteiner(){
    return(
         <div class="conteiner">
            <div class="feed">
                <div class="stories">
                    <IonIcon name="chevron-forward-circle" />
                    {stories.map((story) => (<Story url={story.url} name={story.name} />))}
                </div>
                {posts.map((post) => (
                    <Post userImage={post.userImage} postName={post.postName} postImage={post.postImage} likeImage={post.likeImage} likeName={post.likeName} />
                ))}
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

const posts = [
    {userImage: "/images/meowed.jpg", postName: "meowed", postImage: "/images/gato-telefone.png", likeImage: "/images/respondeai.jpg", likeName: "respondeai", likes: "101.523"},
    {userImage: "/images/barked.jpg", postName: "barked", postImage: "/images/dog.png", likeImage: "/images/adorableanimals.jpg", likeName: "adorable_animals", likes: "99.159"}
];