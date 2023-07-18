import http from "../http-common";
import Product from "../models/product";

const getAll = (params: any) => {
    return http.get<Array<Product>>(`/products`, {params});
}
const get = (id: any) => {
    return http.get<Product>(`/${id}`);
}
const findByTitle = (title: string) => {
    return http.get<Array<Product>>(`/search?q=${title}`);
}

const ProductService = {
    getAll,
    get,
    findByTitle
};

export default ProductService;