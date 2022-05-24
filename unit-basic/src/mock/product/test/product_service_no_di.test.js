const ProductService = require('../product_service_no_di.js');
const ProductClient = require('../product_client.js');
jest.mock('../product_client'); // ProductClient 모듈 전체를 mock 처리

describe('ProductService', () => {
  // mock 함수로 대체
  const fetchItems = jest.fn(async () =>
    // mock data
    [
      { item: 'milk', available: true },
      { item: 'banana', available: false },
    ]
  );
  // mock 클래스에 mock 함수 연결
  ProductClient.mockImplementation(() => {
    return { fetchItems };
  });

  let productService;

  beforeEach(() => {
    productService = new ProductService();

    // 수동적으로 mock clear
    ProductClient.mockClear();
    fetchItems.mockClear();
  });

  it('should filter out only available items', async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: 'milk', available: true }]);
  });

  it('test', async () => {
    const items = await productService.fetchAvailableItems();
    expect(fetchItems).toHaveBeenCalledTimes(1);
  });
});
