import Link from 'next/link'
import Categories from './categories'
import ProductCard from '../cards/product.card'
import { products } from '../../constants'

const ProductList = ({ category }: { category: string }) => {
	return (
		<div className='w-full'>
			<Categories />
			<div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12'>
				{products.map(product => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
			<Link
				href={category ? `/products/?category=${category}` : '/products'}
				className='flex justify-end mt-4 underline text-sm text-gray-500'
			>
				View all products
			</Link>
		</div>
	)
}

export default ProductList
