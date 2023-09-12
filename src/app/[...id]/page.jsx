import CatalogList from './components/CatalogList/CatalogList';
import CatalogItem from './components/CatalogItem/CatalogItem';

async function getProductItem(id) {
  const response = await fetch(
    `https://korpus.onrender.com/api/products/${id}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}

export default async function Catalog({ params }) {
  const category = params.id;
  console.log(params.id);
  if (category.length === 1) {
    return <CatalogList category={params.id} />;
  } else {
    const itemId = category[1];
    const dataItem = await getProductItem(itemId);
    return <CatalogItem data={dataItem} />;
  }
}
