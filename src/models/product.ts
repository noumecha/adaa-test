class Product {
    constructor (
        public id: number,
        public title: string,
        public description: string,
        public price: number,
        public discountPercentage: string,
        public rating: number,
        public stock: number,
        public brand: string,
        public category: string,
        public thumbnail: string,
        public images: string[]
    ) {}
};

export default Product;