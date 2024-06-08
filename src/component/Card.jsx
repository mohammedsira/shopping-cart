import React, { useState } from 'react';

function Card({ cardData, setCartValue }) {
    const [toggle, setToggle] = useState(true);

    return (
        // <div className='bg-secondary'>
        <div className="card m-2">
            {/* Card img */}
            {cardData.img1 && (
                <img
                    src="https://m.media-amazon.com/images/I/61VHbPLMIcL._SY741_.jpg"
                    className="card-img-top"
                    alt="Product"
                />
            )}
            {cardData.img2 && (
                <img
                    src="https://m.media-amazon.com/images/I/61rgo4mdwwL._SY741_.jpg"
                    className="card-img-top"
                    alt="Product"
                />
            )}
            {cardData.img3 && (
                <img
                    src="https://m.media-amazon.com/images/I/61HWovW2npL._SY741_.jpg"
                    className="card-img-top"
                    alt="Product"
                />
            )}
            {cardData.img4 && (
                <img
                    src="https://m.media-amazon.com/images/I/61-YkrqcNLL._SY741_.jpg"
                    className="card-img-top"
                    alt="Product"
                />
            )}
            {cardData.img5 && (
                <img
                    src="https://m.media-amazon.com/images/I/618jPAiuDXL._SY741_.jpg"
                    className="card-img-top"
                    alt="Product"
                />
            )}
            {cardData.img6 && (
                <img
                    src="https://m.media-amazon.com/images/I/51Hm-Dq28nL._SY741_.jpg"
                    className="card-img-top"
                    alt="Product"
                />
            )}
            {cardData.img7 && (
                <img
                    src="https://m.media-amazon.com/images/I/61v32-ZnvTL._SY741_.jpg"
                    className="card-img-top"
                    alt="Product"
                />
            )}
            {cardData.img8 && (
                <img
                    src="https://m.media-amazon.com/images/I/51ESBoz2HTL._SY741_.jpg"
                    className="card-img-top"
                    alt="Product"
                />
            )}
            {cardData.isSale && (
                <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>
                    Sale
                </div>
            )}
            {cardData.isSpecial && (
                <div className="badge bg-danger text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>
                    Special
                </div>
            )}
            {cardData.isSoldout && (
                <div className="badge bg-danger text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>
                    Soldout
                </div>
            )}
            <div className="card-body p-4 text-center">
                <h5 className="card-title">{cardData.name}</h5>
                <p className="card-text">
                    {cardData.rating && <div>{cardData.rating}</div>}
                    {cardData.originalPrice ? (
                        <div>
                            <span style={{ textDecoration: 'line-through' }}>
                                {cardData.originalPrice}
                            </span>{' '}
                            {cardData.price}
                        </div>
                    ) : (
                        `Price: ${cardData.price}`
                    )}
                </p>
            </div>
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                    {toggle ? (
                        <button
                            className="btn btn-outline-dark mt-auto"
                            onClick={() => {
                                setCartValue((value) => value + 1);
                                setToggle(false);
                            }}
                        >
                            Add To Cart
                        </button>
                    ) : (
                        <button
                            className="btn btn-outline-dark mt-auto"
                            onClick={() => {
                                setCartValue((value) => value - 1);
                                setToggle(true);
                            }}
                        >
                            Remove from Cart
                        </button>
                    )}
                </div>
            </div>
        </div>
        // </div>
    );
}

function CardGrid({ setCartValue }) {
    const cardData = [
        { name: 'The Souled Store Captain America: Super Soldier Mens Oversized Fit Polos Men T-Shirts', rating: '⭐⭐⭐', price: '₹250-₹280', img1: true },
        { name: 'The Souled Store Spider-Man: Radioactive Men Oversized Full Sleeve T-Shirts', rating: '⭐⭐⭐⭐⭐', originalPrice: '₹1499', price: '₹899', isSpecial: true, img2: true },
        { name: 'The Souled Store| Batman: The Dark Knight Mens  T-Shirts Grey Color Men T-Shirts', rating: '⭐⭐⭐⭐', price: '₹749', isSale: true, img3: true },
        { name: 'The Souled Store Superman: Man of Steel Mens and Womens Cotton Hoodie Black', rating: '⭐⭐⭐', price: '₹1499-₹1899', img4: true },
        { name: 'The Souled Store| Official Harry Potter: Snitch Please Womens and Girls Oversized Hoodies', rating: '⭐⭐⭐⭐⭐', price: '₹749-₹1299', isSale: true, img5: true },
        { name: 'The Souled Store|Official Iron Man: Power Suit Mens and Boys Hoodies 60%  Burgundy Hoodies', rating: '⭐⭐⭐⭐', price: '₹849-₹1499', img6: true },
        { name: 'The Souled Store Men Official Superman: Metropolis Blue  Printed Oversized T-Shirts', rating: '⭐⭐⭐⭐', originalPrice: '₹1799', price: '₹1299', isSoldout: true, img7: true },
        { name: 'The Souled Store Official Alice in Wonderland: Wrong Way Women Oversized T-Shirt', rating: '⭐⭐⭐⭐', price: '₹1799', img8: true },
    ];

    return (
        <div>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                    {cardData.map((card, index) => (
                        <div key={index} className="col-mb-4">
                            <Card cardData={card} setCartValue={setCartValue} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CardGrid;