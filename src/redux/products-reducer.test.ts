import productsReducer, {
  InitialStateType,
  setProducts,
} from './products-reducer';

let state: InitialStateType;

beforeEach(() => {
  state = {
    products: [],
    carouselProducts: {},
    brands: [],
  };
});

test('set products data success', () => {
  const newState = productsReducer(
    state,
    setProducts([
      {
        brandId: 6,
        count: 1,
        info: [''],
        id: 16,
        img: 'c33d3d63-4179-46f8-8529-81cb9c940653.jpg',
        name: 'Reebok Nano X3 Rich Froning',
        price: 220,
        priceTotal: 220,
        rating: 0,
        typeId: 1,
      },
    ])
  );

  expect(newState.products[0].typeId).toBe(1);
});
