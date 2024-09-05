import React from 'react';
import { useLocation } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
  const location = useLocation();
  const showImages = location.pathname === '/' || location.pathname === '/category/productos';

  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      {showImages && (
        <div>
          <img src="/imagenes/imagen1.png" alt="Descripción de la imagen 1" />
          <img src="/imagenes/imagen2.png" alt="Descripción de la imagen 2" />
          <img src="/imagenes/imagen3.png" alt="Descripción de la imagen 3" />
          <img src="/imagenes/imagen4.png" alt="Descripción de la imagen 4" />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
