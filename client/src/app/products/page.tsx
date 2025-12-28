import React from 'react'
import ProductList from '../../../components/shared/product-list'

const ProductsPage = async ({
	searchParams,
}: {
	searchParams: Promise<{ category: string }>
}) => {
	const category = (await searchParams).category
	return (
		<div className=''>
			<ProductList category={category} />
		</div>
	)
}

export default ProductsPage
