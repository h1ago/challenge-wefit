import type { Product } from '@/types';
import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { Search, ProductCard, Loading, Empty } from '@/components';
import { useSearchParams } from 'react-router-dom';
import { fetchProducts, findProducts } from '@/services/productServices';

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get('search-query');

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);

      const items = searchQuery?.length
        ? await findProducts(searchQuery)
        : await fetchProducts();

      setProducts(items);
      setIsLoading(false);
    };

    void getProducts();
  }, [searchQuery]);

  const renderContent = () => {
    switch (true) {
      case isLoading:
        return <Loading />;

      case !!products.length:
        return products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ));

      default:
        return <Empty />;
    }
  };

  if (isLoading && !searchQuery?.length) return <Loading />;

  return (
    <S.Container data-testid="div-home">
      <Search />

      <S.Content>{renderContent()}</S.Content>
    </S.Container>
  );
};

export default Home;
