var cart = { name: '도서', price: 1500 };
var getTotal = function(cart){return`${cart.price}원`};
var myCart = `장바구니에${cart.name}가 있습니다. 
총 금액은${getTotal(cart)}입니다.`;



var array1 = ['one', 'two'];
var array2 = ['three', 'four'];

const combined = [...array1, ...array2];
const [ first, second, three = 'empty', ...others ] = array1;
func(...args){var [first, ...others] = args; }
