import React from 'react';
import './Product.scss';

function Product({ product }) {
  return (
    <><div className="product-grid">
      <div className="product-card">
        <div className="thumbnail">
          <img src="/images/book1.jpg" alt="book" className="product-image" />
        </div>
        <div className="prod-details">
          <span className="name">Five Nights at Freddys</span>
          <span className="price">4990 KZT</span>
        </div>
      </div>

      <div className="product-card">
        <div className="thumbnail">
          <img src="/images/book2.jpg" alt="book" className="product-image" />
        </div>
        <div className="prod-details">
          <span className="name">Мятная сказка</span>
          <span className="price">2990 KZT</span>
        </div>
      </div>

      <div className="product-card">
        <div className="thumbnail">
          <img src="/images/book3.jpg" alt="book" className="product-image" />
        </div>
        <div className="prod-details">
          <span className="name">Индивидуум</span>
          <span className="price">499  KZT</span>
        </div>
      </div>

      <div className="product-card">
        <div className="thumbnail">
          <img src="/images/book4.jpg" alt="book" className="product-image" />
        </div>
        <div className="prod-details">
          <span className="name">Orange Juice</span>
          <span className="price">3990 KZT</span>
        </div>
      </div>
    </div><div className="product-grid">
        <div className="product-card">
          <div className="thumbnail">
            <img src="/images/book5.jpg" alt="book" className="product-image" />
          </div>
          <div className="prod-details">
            <span className="name">Жестокий принц</span>
            <span className="price">9990 KZT</span>
          </div>
        </div>

        <div className="product-card">
          <div className="thumbnail">
            <img src="/images/book6.jpg" alt="book" className="product-image" />
          </div>
          <div className="prod-details">
            <span className="name">Дыши</span>
            <span className="price">2590 KZT</span>
          </div>
        </div>

        <div className="product-card">
          <div className="thumbnail">
            <img src="/images/book7.jpg" alt="book" className="product-image" />
          </div>
          <div className="prod-details">
            <span className="name">Государство Строгого режима</span>
            <span className="price">499 KZT</span>
          </div>
        </div>

        <div className="product-card">
          <div className="thumbnail">
            <img src="/images/book8.jpg" alt="book" className="product-image" />
          </div>
          <div className="prod-details">
            <span className="name">Часы звезд</span>
            <span className="price">3790 KZT</span>
          </div>
        </div>
      </div></>
  );
}

export default Product;
