import IonIcon from "./IonIcon";

export default function Top() {
    return(
        <div class="top">
        <div class="desktop">
          <div class="logo">
            <div><IonIcon name="logo-instagram" /></div>
            <div class="border"></div>
            <img src="/images/logo.png" />
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
            <img src="/images/logo.png" />
            <IonIcon name="paper-plane-outline" />
        </div>
      </div>
    );
}

