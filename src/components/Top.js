export default function Top() {
    return(
        <div class="top">
        <div class="desktop">
          <div class="logo">
            <div><ion-icon name="logo-instagram"></ion-icon></div>
            <div class="border"></div>
            <img src="/images/logo.png" />
          </div>
          <div class="browser">
            <p>Pesquisar</p>
          </div>
          <div class="four-icons">
            <ion-icon name="paper-plane-outline"></ion-icon>
            <ion-icon name="compass-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="person-outline"></ion-icon>
          </div>
        </div>
        <div class="mobile">
          <ion-icon name="logo-instagram"></ion-icon>
          <img src="/images/logo.png" />
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
      </div>
    );
}