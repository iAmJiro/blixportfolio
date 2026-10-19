
export const categories = [
  "All",
  "Weddings",
  "Portraits",
  "Nature",
  "Urban",
  "Events",
];

export const galleryData = [
  {
    id: 1,
    title: "The Quiet Ceremony",
    category: "Weddings",
    number: "01",
    height: 480,
    featured: true,
  },
  {
    id: 2,
    title: "A Study in Light",
    category: "Portraits",
    number: "02",
    height: 340,
    featured: true,
  },
  {
    id: 3,
    title: "Beyond the Horizon",
    category: "Nature",
    number: "03",
    height: 560,
    featured: true,
  },
  {
    id: 4,
    title: "After Dark",
    category: "Urban",
    number: "04",
    height: 390,
    featured: true,
  },
  {
    id: 5,
    title: "The Gathering",
    category: "Events",
    number: "05",
    height: 460,
  },
  {
    id: 6,
    title: "Golden Hour",
    category: "Weddings",
    number: "06",
    height: 320,
  },
  {
    id: 7,
    title: "Human Stories",
    category: "Portraits",
    number: "07",
    height: 510,
  },
  {
    id: 8,
    title: "Still Waters",
    category: "Nature",
    number: "08",
    height: 380,
  },
  {
    id: 9,
    title: "Concrete Poetry",
    category: "Urban",
    number: "09",
    height: 530,
  },
  {
    id: 10,
    title: "A Night to Remember",
    category: "Events",
    number: "10",
    height: 350,
  },
  {
    id: 11,
    title: "Forever Begins",
    category: "Weddings",
    number: "11",
    height: 500,
  },
  {
    id: 12,
    title: "Unspoken",
    category: "Portraits",
    number: "12",
    height: 410,
  },
  {
    id: 13,
    title: "Wild Earth",
    category: "Nature",
    number: "13",
    height: 570,
  },
  {
    id: 14,
    title: "City Silence",
    category: "Urban",
    number: "14",
    height: 360,
  },
  {
    id: 15,
    title: "Shared Moments",
    category: "Events",
    number: "15",
    height: 440,
  },
];

export const featuredGallery = galleryData.filter(
  (image) => image.featured
);

export const portfolioStats = [
  {
    value: "120+",
    label: "Projects Completed",
  },
  {
    value: "85+",
    label: "Happy Clients",
  },
  {
    value: "12",
    label: "Awards & Features",
  },
];
