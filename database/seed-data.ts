interface SeedEntry {
  description: string;
  createdAt: number;
  status: string;
}

interface SeedData {
  entries: SeedEntry[];
}

export const seedData: SeedData = {
  entries: [
    {
      description: 'Get out of bed',
      createdAt: Date.now(),
      status: 'pending',
    },
    {
      description: 'Brush teeth',
      createdAt: Date.now() - 1000000,
      status: 'pending',
    },
    {
      description: 'Eat breakfast',
      createdAt: Date.now() - 4000000,
      status: 'pending',
    },
  ],
};
