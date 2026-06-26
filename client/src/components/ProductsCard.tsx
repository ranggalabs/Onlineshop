import { useNavigate } from "react-router-dom";
import type { Product } from "../types";

interface Props {
    product: Product;
}


const ProductsCard = ({ product }: Props) => {


    const currency = import.meta.env.VITE_CURRENCY_SYMBOL || "$";

    const { addToCart } = { addToCart: (_data: any) => { } }
    const navigate = useNavigate()


    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-md transition-all duration-300 group animate-fade-in cursor-pointer" onClick={() => navigate(`/products/${product._id}`)}>

            {/* Image */}

            <div className="relative aspect-squere overflow-hidden ">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover p-4 group-hover:p-2 transition-all duration-300" />


                {/* badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {product.discount > 0 &&
                        <span className="px-2 py-0.5 text-[10px] font-semibold uppercase bg-app-orange text-white rounded-full">{product.discount}% OFF</span>}
                </div>
            </div>
            {/* Info */}
            <div className="p-3.5 text-zinc-700">
                <h3 className="text-sm leading-snug mb-1.5 line-clamp-2">{product.name}</h3>

            </div>

        </div>
    )
}

export default ProductsCard