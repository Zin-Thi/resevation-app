const Product = require('./model/product')

class SampleDb {
    constructor() {
        this.products = [
            {
                id: 1,
                name: 'Phone XL',
                price: 799,
                description: 'A large phone with one of the best screens',
                coverImage: './assets/img/phone-cover.jpg',
                heading1: 'Size',
                heading2: 'Performance',
                heading3: 'Quality',
                headingtext1: 'The size of Phone XL is mod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.',
                headingtext2: 'And Performance of est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
                headingtext3: 'Is the best Quality?s justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
            },
            {
                id: 2,
                name: 'Phone Mini',
                price: 699,
                description: 'A great phone with one of the best cameras',
                coverImage: './assets/img/phone-cover.jpg',
                heading1: 'Size',
                heading2: 'Performance',
                heading3: 'Quality',
                headingtext1: 'A great size of phone good for watching movie mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.',
                headingtext2: 'The performance fdfodfds us, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
                headingtext3: 'Donec Quality. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
            },
            {
                id: 3,
                name: 'Phone Standard',
                price: 299,
                description: '',
                coverImage: './assets/img/phone-cover.jpg',
                heading1: 'Size',
                heading2: 'Performance',
                heading3: 'Quality',
                headingtext1: 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.',
                headingtext2: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
                headingtext3: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
            },
            {
                id: 3,
                name: 'iPhone',
                price: 1000,
                description: 'This is iPhone',
                coverImage: './assets/img/phone-cover.jpg',
                heading1: 'Size',
                heading2: 'Performance',
                heading3: 'Quality',
                headingtext1: 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.',
                headingtext2: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
                headingtext3: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
            }
        ]
    }

    async initDb() {
        await this.cleanDb()
        this.pushProductsToDb()
    }

    async cleanDb() {
        await Product.deleteMany({})

    }
    
    pushProductsToDb() {
        this.products.forEach(
            (product) => {
                const newProduct = new Product(product)
                newProduct.save()
            }
        )
    }

    seeDb() {
        this.pushProductsToDb()
    }
}

module.exports = SampleDb