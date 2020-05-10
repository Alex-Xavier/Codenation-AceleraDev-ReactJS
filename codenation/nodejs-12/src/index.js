let shoppingCart = {
	products: [
		{
      name: '',
      category: ''
		},
		{
      name: '',
      category: ''
		},
		{
      name: '',
      category: ''
		},
		{
      name: '',
      category: ''
    }
	],
	promotion: '',
  totalPrice: 0,
  discountValue: 0,
  discountPercentage: ''
}

const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

function filterProducts (ids, productsList) {
	for (let i = 0; i < productsList.length; i++) {
		for (let j = 0; j < ids.length; j++) {
			if (productsList[i].id === ids[j]) {
				shoppingCart.products[j].name = productsList[i].name
				shoppingCart.products[j].category = productsList[i].category

				//shoppingCart.products[j] = 
			}
		}
	}

	console.log(shoppingCart)
	return shoppingCart
	/*shoppingCart = ids.map((id, index) => {
		return {
			products: [index] = {
				name: name,				
				category: category
			}
		}
	})*/
}

function getShoppingCart(ids, productsList) {

	shoppingCart = filterProducts(ids, productsList)

	console.log(shoppingCart)
	return shoppingCart;
}

module.exports = { getShoppingCart };
