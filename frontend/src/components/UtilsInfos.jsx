import React from "react";

function UtilsInfos() {
  return (
    <div className="utils-infos-container">
      <h1>Infos utiles</h1>
      <div className="info-section">
        <h2>Localisation et Accès</h2>
        <p>
          <strong>Adresse :</strong> L'EPSI Nantes se trouve au cœur de la
          ville, généralement au quartier Île de Nantes ou dans le quartier
          Zola, selon le campus.
        </p>
        <p>
          <strong>Transports en commun :</strong> La ville de Nantes dispose
          d'un excellent réseau de transports en commun, géré par la SEMITAN
          (TAN). Vous avez accès aux lignes de tramway (notamment les lignes 1,
          2 et 3), ainsi qu'à de nombreux bus qui passent à proximité de
          l'école.
        </p>
        <p>
          <strong>Vélo :</strong> Nantes est une ville très propice aux
          cyclistes avec des pistes cyclables aménagées et un service de vélos
          en libre-service appelé Bicloo.
        </p>
      </div>
      <div className="info-section">
        <h2>Espaces verts</h2>
        <p>
          <strong>Île de Nantes :</strong> Si l'EPSI se situe sur l'île, vous
          êtes proche des espaces verts comme le Parc des Chantiers, un lieu
          agréable pour se détendre, proche des Machines de l’Île.
        </p>
        <p>
          <strong>Jardin des Plantes :</strong> Non loin du centre-ville, un
          grand jardin botanique accessible à pied ou en tram pour faire une
          pause au vert.
        </p>
        <p>
          <strong>Parc de Procé :</strong> Ce grand parc est idéal pour se
          promener, courir ou organiser des pique-niques avec des amis.
        </p>
      </div>
      <div className="info-section">
        <h2>Commerces et services</h2>
        <p>
          <strong>Centres commerciaux :</strong> À proximité de l'école, vous
          avez des centres commerciaux comme Beaulieu sur l'île de Nantes et le
          Centre commercial Atlantis un peu plus loin.
        </p>
        <p>
          <strong>Commerces locaux :</strong> De nombreux restaurants,
          boulangeries, et supermarchés (Carrefour City, Monoprix) sont
          disponibles pour les repas rapides ou les courses entre deux cours.
        </p>
        <p>
          <strong>Espaces de coworking :</strong> Si vous avez besoin d'un
          espace pour travailler en dehors de l'école, il existe plusieurs
          espaces de coworking comme La Cantine ou CoWork In Nantes.
        </p>
      </div>
    </div>
  );
}

export default UtilsInfos;
