import IonIcon from "./IonIcon";
import Image from "./Image";

export default function Top() {
    return(
        <div class="top">
            <div class="desktop">
                <div class="logo">
                    <div><IonIcon name="logo-instagram" /></div>
                    <div class="border"></div>
                    <Image url="/images/logo.png" alt="Logo Instagram" />
                </div>
                <div class="browser">
                    <p>Pesquisar</p>
                </div>
                <div class="four-icons">
                    <IonIcon name="paper-plane-outline" />
                    <IonIcon name="compass-outline" />
                    <IonIcon name="heart-outline" />
                    <IonIcon name="person-outline" />
                </div>
            </div>
            <div class="mobile">
                <IonIcon name="logo-instagram" />
                <Image url="/images/logo.png" alt="Logo Instagram" />
                <IonIcon name="paper-plane-outline" />
            </div>
        </div>
    );
}

