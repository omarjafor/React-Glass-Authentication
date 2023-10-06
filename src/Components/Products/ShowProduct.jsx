import ProductCard from "./ProductCard";


const ShowProduct = ({ name, sunglasses }) => {
    return (
        <>
            <div className="px-8 py-12">
                <h1 className="text-3xl font-bold">{name}</h1>
                <br />
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

                    {
                        sunglasses.map((item) => <ProductCard
                            key={item.id}
                            product={item}
                            discount
                        />)
                    }
                </div>
            </div>

        </>
    );
};

export default ShowProduct;