// Интерфейс для создания заказа (что отправляет фронт)
export interface CreateOrderDto {
  userId: number;
  cart: {
    items: CartItem[];
    summary: CartSummary;
  };
}

// Интерфейс элемента корзины
export interface CartItem {
  id: string;
  productId: number;
  productName: string;
  productImage: string;
  selectedSize: string;
  quantity: number;
  price: number;
  total: number;
}

// Интерфейс итогов корзины
export interface CartSummary {
  subtotal: number;
  discount: number;
  discountPercentage: number;
  deliveryFee: number;
  total: number;
}

// Статусы заказа
export type OrderStatus =
  | 'pending'
  | 'confirmed'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled';

// Полный интерфейс заказа (что возвращает бекенд)
export interface Order {
  id: number;
  userId: number;
  user: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  cart: {
    items: CartItem[];
    summary: CartSummary;
  };
  status: OrderStatus;
  createdAt: string;
  updatedAt: string;
}

// Тестовые данные - пользователь со всеми статусами заказов
export const ORDERS: Order[] = [
  {
    id: 1,
    userId: 1,
    user: {
      id: 1,
      email: 'anna.mueller@example.de',
      firstName: 'Anna',
      lastName: 'Müller',
      street: 'Hauptstraße 15',
      city: 'Berlin',
      postalCode: '10115',
      country: 'Germany',
    },
    cart: {
      items: [
        {
          id: 'item1',
          productId: 1,
          productName: 'Gradient Graphic T-shirt',
          productImage: '/images/products/1.jpg',
          selectedSize: 'Large',
          quantity: 2,
          price: 145,
          total: 290,
        },
        {
          id: 'item2',
          productId: 3,
          productName: 'Black Striped T-shirt',
          productImage: '/images/products/3.jpg',
          selectedSize: 'Medium',
          quantity: 1,
          price: 120,
          total: 120,
        },
      ],
      summary: {
        subtotal: 410,
        discount: 20,
        discountPercentage: 5,
        deliveryFee: 15,
        total: 405,
      },
    },
    status: 'pending',
    createdAt: '2024-11-15T10:30:00.000Z',
    updatedAt: '2024-11-15T10:30:00.000Z',
  },
  {
    id: 2,
    userId: 1,
    user: {
      id: 1,
      email: 'anna.mueller@example.de',
      firstName: 'Anna',
      lastName: 'Müller',
      street: 'Hauptstraße 15',
      city: 'Berlin',
      postalCode: '10115',
      country: 'Germany',
    },
    cart: {
      items: [
        {
          id: 'item3',
          productId: 4,
          productName: 'Skinny Fit Jeans',
          productImage: '/images/products/4.jpg',
          selectedSize: '32',
          quantity: 1,
          price: 240,
          total: 240,
        },
      ],
      summary: {
        subtotal: 240,
        discount: 0,
        discountPercentage: 0,
        deliveryFee: 15,
        total: 255,
      },
    },
    status: 'confirmed',
    createdAt: '2024-11-10T14:20:00.000Z',
    updatedAt: '2024-11-11T09:15:00.000Z',
  },
  {
    id: 3,
    userId: 1,
    user: {
      id: 1,
      email: 'anna.mueller@example.de',
      firstName: 'Anna',
      lastName: 'Müller',
      street: 'Hauptstraße 15',
      city: 'Berlin',
      postalCode: '10115',
      country: 'Germany',
    },
    cart: {
      items: [
        {
          id: 'item4',
          productId: 2,
          productName: 'Polo with Tipping Details',
          productImage: '/images/products/2.jpg',
          selectedSize: 'Large',
          quantity: 1,
          price: 180,
          total: 180,
        },
      ],
      summary: {
        subtotal: 180,
        discount: 0,
        discountPercentage: 0,
        deliveryFee: 15,
        total: 195,
      },
    },
    status: 'processing',
    createdAt: '2024-11-05T16:45:00.000Z',
    updatedAt: '2024-11-07T11:30:00.000Z',
  },
  {
    id: 4,
    userId: 1,
    user: {
      id: 1,
      email: 'anna.mueller@example.de',
      firstName: 'Anna',
      lastName: 'Müller',
      street: 'Hauptstraße 15',
      city: 'Berlin',
      postalCode: '10115',
      country: 'Germany',
    },
    cart: {
      items: [
        {
          id: 'item5',
          productId: 5,
          productName: 'Checkered Shirt',
          productImage: '/images/products/5.jpg',
          selectedSize: 'Medium',
          quantity: 2,
          price: 185,
          total: 370,
        },
      ],
      summary: {
        subtotal: 370,
        discount: 37,
        discountPercentage: 10,
        deliveryFee: 15,
        total: 348,
      },
    },
    status: 'shipped',
    createdAt: '2024-10-28T12:00:00.000Z',
    updatedAt: '2024-11-02T14:20:00.000Z',
  },
  {
    id: 5,
    userId: 1,
    user: {
      id: 1,
      email: 'anna.mueller@example.de',
      firstName: 'Anna',
      lastName: 'Müller',
      street: 'Hauptstraße 15',
      city: 'Berlin',
      postalCode: '10115',
      country: 'Germany',
    },
    cart: {
      items: [
        {
          id: 'item6',
          productId: 6,
          productName: 'Sleeve Striped T-shirt',
          productImage: '/images/products/6.jpg',
          selectedSize: 'Small',
          quantity: 1,
          price: 130,
          total: 130,
        },
      ],
      summary: {
        subtotal: 130,
        discount: 13,
        discountPercentage: 10,
        deliveryFee: 15,
        total: 132,
      },
    },
    status: 'cancelled',
    createdAt: '2024-10-20T09:30:00.000Z',
    updatedAt: '2024-10-21T13:45:00.000Z',
  },
  // Второй пользователь с доставленным заказом
  {
    id: 6,
    userId: 2,
    user: {
      id: 2,
      email: 'thomas.schmidt@example.de',
      firstName: 'Thomas',
      lastName: 'Schmidt',
      street: 'Königsallee 42',
      city: 'München',
      postalCode: '80331',
      country: 'Germany',
    },
    cart: {
      items: [
        {
          id: 'item7',
          productId: 7,
          productName: 'Vertical Striped Shirt',
          productImage: '/images/products/7.jpg',
          selectedSize: 'Large',
          quantity: 1,
          price: 212,
          total: 212,
        },
        {
          id: 'item8',
          productId: 8,
          productName: 'Courage Graphic T-shirt',
          productImage: '/images/products/8.jpg',
          selectedSize: 'Medium',
          quantity: 1,
          price: 145,
          total: 145,
        },
      ],
      summary: {
        subtotal: 357,
        discount: 0,
        discountPercentage: 0,
        deliveryFee: 15,
        total: 372,
      },
    },
    status: 'delivered',
    createdAt: '2024-10-15T11:15:00.000Z',
    updatedAt: '2024-10-25T16:30:00.000Z',
  },
];
