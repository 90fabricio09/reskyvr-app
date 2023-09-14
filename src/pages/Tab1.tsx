import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton } from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='titulo-ionic'>ReskyVR</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
      <img alt="Silhouette of mountains" src="https://media.discordapp.net/attachments/1106689706521006113/1110903669341294602/Resky_vr.png?width=701&height=701" />
      <IonCardHeader>
        <IonCardTitle>ReskyVR</IonCardTitle>
        <IonCardSubtitle>o que é a ReskyVR?</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>ReskyVR é um aplicativo móvel e desktop que oferece aos usuários a possibilidade de acessar um ambiente de trabalho em realidade virtual por meio de seus dispositivos.</IonCardContent>
      <IonButton color="primary" href="/tab2" className='login'>Fazer login</IonButton>
    </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
