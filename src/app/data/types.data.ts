export interface Type {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export const TYPES: Type[] = [
  {
    id: 1,
    name: 'Casual',
    createdAt: '2024-07-15T14:23:15.232Z',
    updatedAt: '2024-07-15T14:23:15.232Z',
  },
  {
    id: 2,
    name: 'Formal',
    createdAt: '2024-07-15T14:26:34.866Z',
    updatedAt: '2024-07-15T14:26:34.866Z',
  },
  {
    id: 3,
    name: 'Party',
    createdAt: '2024-07-15T14:26:46.021Z',
    updatedAt: '2024-07-23T18:25:09.339Z',
  },
  {
    id: 4,
    name: 'Gym',
    createdAt: '2024-07-23T18:29:52.820Z',
    updatedAt: '2024-07-24T12:46:16.050Z',
  },
];
