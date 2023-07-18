import React, {useEffect, useState, ChangeEvent} from 'react';
import ProductService from '../services/ProductServices';
import Product from '../models/product';
import Pagination from '@material-ui/lab/Pagination';

const ProductList: React.FC = () => {

    const [products, setProducts] = useState<Array<Product>>([]);
    const [searchTitle, setSearchTitle] = useState<string>("");

    const [page, setPage] = useState(1); // current page
    const [count, setCount] = useState(0); // total pages
    const [pageSize, setPageSize] = useState(3); // items per page

    const pageSizes = [3, 6, 9];

    useEffect(() => {
        retrieveProducts();
    }, [page, pageSize]);

    const onChangeSearchTitle = (e: ChangeEvent<HTMLInputElement>) => {
        const searchTitle = e.target.value;
        setSearchTitle(searchTitle);
    };

    const handlePageChange = (event: any, value: number) => {
        setPage(value);
    };

    const handlePageSizeChange = (event: any) => {
        setPageSize(event.target.value);
        setPage(1);
    }

    const getRequestParams = (searchTitle: any, page: number, pageSize: any) => {
        let params = {
            title: "",
            page: 1,
            size: 5
        };

        if (searchTitle) {
            params["title"] = searchTitle;
        }
        if (page) {
            params["page"] = page - 1;
        }
        if (pageSize) {
            params["size"] = pageSize;
        }

        return params;
    }

    const retrieveProducts = () => {
        const p = getRequestParams(searchTitle, page, pageSize);

        ProductService.getAll(p)
        .then((res: any) => {
            setProducts(res.data.products);
            console.log(res.data.products);
        })
        .catch((err: Error) => {
            console.log(err);
        });
    };

    const findByTitle = () => {
        ProductService.findByTitle(searchTitle)
        .then((res: any) => {
            setProducts(res.data);
            console.log(res.data);
        })
        .catch((err: Error) => {
            console.log(err);
        })
    }

    return (
        <div className='list row'>
            <div className="col-md-12">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder='chercher par mots clés'
                        value={searchTitle}
                        onChange={onChangeSearchTitle}
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-outline-secondary"
                            type='button'
                            onClick={retrieveProducts}
                        >
                            Rechercher
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-md-12">
                <h3>Product List</h3>
                <div className='mt-3'>
                    {"Nombre d'items à afficher"}
                    <select
                        onChange={handlePageSizeChange}
                        value={pageSize}
                    >
                        {pageSizes.map((size)=>(
                            <option
                                value={size}
                                key={size}
                            >
                                {size}
                            </option>
                        ))}
                    </select>
                    <Pagination
                        className="my-3"
                        count={count}
                        siblingCount={1}
                        boundaryCount={1}
                        variant='outlined'
                        shape='rounded'
                        onChange={handlePageChange}
                    />
                </div>
                <ul className="list-group">
                    { products && products.map((p,i) => (
                        <li
                            className='list-group-item'
                            key={i}
                        >
                            {p.title}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProductList;