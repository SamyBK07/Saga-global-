import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-photo-wrapper">
        <img src="/images/georgette.jpg" alt="Georgette Azonnadou" className="about-photo" />
      </div>
      <div className="about-text">
        <h2>Saga Global</h2>
        <p>
          Créée en 2021, Saga Global est née d'une
          passion pour la cosmétique.
        </p>
        <p>
          Elle s'est étendue aujourd'hui et couvre plusieurs autres domaines :
          Thé, Savons, Encens etc
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
