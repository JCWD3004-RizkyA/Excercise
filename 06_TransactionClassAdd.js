class Product {
    constructor(name , price){
        this.name = name;
        this.price = price;
    }
}

class Transaction {
    constructor(){

        this.total = 0;   
        this.product = [];

    }
//Add to cart method → Add product to transaction
    addToCart(productName , qty) {
        this.product.push ({
            productName : productName,
            Quantity : qty,
        });
        this.total ++;
        console.log ("Added " + productName + " with Quantity " + qty + " total order " + this.total)
    }

    showTotalMethod() {
        let sumTotal = 0;
        console.log(this.product[0].productName.price)
        console.log(this.product[0].Quantity)
        console.log ("Total is " + ((this.product[0].productName.price)*(this.product[0].Quantity)))
    
        for (let i = 0 ; i< this.product.length ; i++) {

        }
    
    }
}

const product1 = new Product("panci" , 200);
const product2 = new Product("ember" , 200);
const product3 = new Product("piring" , 200);

const transaction = new Transaction ();

transaction.addToCart(product1,2);
transaction.addToCart(product1,1);
transaction.showTotalMethod()
console.log (transaction.product)
// transaction.showTotalMethod()