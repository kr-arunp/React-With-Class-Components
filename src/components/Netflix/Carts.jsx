import React from 'react'
import './NetflixCSS/Cart.css'
const Carts = () => {
  return (
    <>
		<div className="main-container">
			<div className="poster-container">
				<a href="#"><img src="https://i.ibb.co/Zd51z5c/justice-league.jpg" className="poster" /></a>
			</div>
			<div className="ticket-container">
				<div className="ticket__content">
					<h4 className="ticket__movie-title">Justice League</h4>
					<p className="ticket__movie-slogan">You can't save the world alone.</p>
					<p className="ticket__current-price">$20.75</p>
					<p className="ticket__old-price">$40.99</p>
					<button className="ticket__buy-btn">Buy now</button>
				</div>
			</div>
		</div>
	
    </>
  )
}

export default Carts
