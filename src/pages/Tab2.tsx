import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonButton, IonFooter } from '@ionic/react';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='titulo-ionic'><b>Login</b></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <h1 className='titulo'><b>Login</b></h1>
        <br />
        <p className='subtitulo'>Faça seu login!</p>
        <p className='subsubtitulo'>Para acessar um ambiente de trabalho em realidade virtual por meio de seus dispositivos realize seu login.</p>
        <br />
        <IonItem className='cadastro'>
          <IonInput label="Email" type="email" placeholder="reskyvr@gmail.com"></IonInput>
        </IonItem>
        <br />
        <IonItem className='cadastro'>
          <IonInput label="Senha" type="password"></IonInput>
        </IonItem>
        <br />
          <div>
          <IonButton color="primary" href="/tab1" className='login'>Fazer login</IonButton>
          </div>

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
