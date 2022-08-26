import React from 'react'

export default function Home() {
	return (
		<div>
			<div className="add-to-cart">
				<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.WVB1LvIUWKxcmR8ZocorEAAAAA%26pid%3DApi&f=1" alt="" />
			</div>
			<div className="cart-wrapper">
				<div className="image-wrapper item">
					<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.DYTzOz3HPokogrTrRg1i2wAAAA%26pid%3DApi&f=1" alt="iphone" />
				</div>
				<div className="text-wrapper item">
					<span>IPhone</span>
					<span>Price: $1000</span>
				</div>
				<div className="button-wrapper item">
					<button>Add to Cart</button>
				</div>
			</div>
		</div>
	)
}