const categories = [
  { cid: 1, parent: [], weight: 1 },
  { cid: 2, parent: [], weight: 2 },
  { cid: 3, parent: [1], weight: 3 },
  { cid: 4, parent: [2], weight: 0 },
  { cid: 5, parent: [1], weight: 2 },
  { cid: 6, parent: [1], weight: 1 },
  { cid: 7, parent: [1], weight: 0 },
  { cid: 8, parent: [2], weight: 3 }
];
const products = [
  { pid: 1, category: [3] },
  { pid: 2, category: [4] },
  { pid: 3, category: [8] },
  { pid: 4, category: [3] },
  { pid: 5, category: [2] },
  { pid: 6, category: [8, 6] },
  { pid: 7, category: [7] },
  { pid: 8, category: [5] }
];

const getCategoriesByParentId = id =>
  categories.filter(category => category.parent[0] === id);
const parentOneCategories = getCategoriesByParentId(1);
console.log("should bring result", parentOneCategories);

const groupProductsByCategoriesId = () => {
  return parentOneCategories
    .sort((a, b) => a.weight - b.weight)
    .reduce(
      arr,
      curr => {
        const productsWithCategory = products.filter(product => {
          return (
            product.category[0] === curr.cid || product.category[1] === curr.cid
          );
        });
        return [...arr, { cid: curr.cid, products: productsWithCategory }];
      },
      []
    );
};
