import IonIcon from "./IonIcon";
import Follow from "./Follow";
import Main from "./Main";
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
            <div class="sidebar">
                <Main url="/images/catanacomics.jpg" name="catanacomics" subname="Catana" />
                <div class="suggestion">
                    <p>Sugestões para você</p>
                    <p>Ver tudo</p>
                </div>
                {follows.map((fllw) =>(
                    <Follow url={fllw.url} gramName={fllw.gramName} gramStatus={fllw.gramStatus}/>
                ))}
                <p>
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
                    Localizações • Contas mais relevantes • Hashtags • idioma
                </p>
                <p>© 2021 INSTAGRAM DO FACEBOOK</p>
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

const follows = [
    {url: "/images/badvibesmemes.jpg", gramName: "bad.vibes.memes", gramStatus: "Segue você"},
    {url: "/images/chibirdart.jpg", gramName: "chibirdart", gramStatus: "Segue você"},
    {url: "/images/razoesparaacreditar.jpg", gramName: "razoesparaacreditar", gramStatus: "Novo no Instagram"},
    {url: "/images/adorableanimals.jpg", gramName: "adorable_animals", gramStatus: "Segue você"},
    {url: "/images/smallcutecats.jpg", gramName: "smallcutecats", gramStatus: "Segue você"}
];