export interface Artwork {
  id: string;
  number: string;
  title: string;
  image: string;
  layout: 'carousel' | 'equigrid' | 'alternate' | 'wheel';
  date: string;
  description: string;
  category: 'artworks' | 'archives';
  galleryImages: string[];
}

const loremBody = `Churchkill's 'Mona' is part of Huxley Parlour's 'The Female Lens: 9 Contemporary Female Photographers' at the Photo London 2018 art fair. The body of work explores Churchkill's relationship to female intimacy through the use of multiple art forms, shadows, and color.Churchkill's 'Mona' is part of Huxley Parlour's 'The Female Lens: 9 Contemporary Female Photographers' at the Photo London 2018 art fair. The body of work explores Churchkill's relationship to female intimacy through the use of multiple art forms, shadows, and color.`;

export const artworks: Artwork[] = [
  {
    id: 'return-of-the-title',
    number: '01',
    title: 'Another title',
    image: '/images/placeholder/placeholder-1.jpg',
    layout: 'carousel',
    date: '07 May 2026',
    description: loremBody,
    category: 'artworks',
    galleryImages: [
      '/images/placeholder/placeholder-1.jpg',
      '/images/placeholder/placeholder-2.jpg',
      '/images/placeholder/placeholder-3.jpg',
      '/images/placeholder/placeholder-4.jpg',
    ],
  },
  {
    id: 'est-another',
    number: '02',
    title: 'Est Another',
    image: '/images/placeholder/placeholder-7.jpg',
    layout: 'equigrid',
    date: '07 May 2026',
    description: loremBody,
    category: 'artworks',
    galleryImages: [
      '/images/placeholder/placeholder-5.jpg',
      '/images/placeholder/placeholder-4.jpg',
      '/images/placeholder/placeholder-2.jpg',
      '/images/placeholder/placeholder-3.jpg',
      '/images/placeholder/placeholder-7.jpg',
      '/images/placeholder/placeholder-1.jpg',
    ],
  },
  {
    id: 'oh-look-one-more',
    number: '03',
    title: 'Oh look one more',
    image: '/images/placeholder/placeholder-2.jpg',
    layout: 'alternate',
    date: '07 May 2026',
    description: loremBody,
    category: 'artworks',
    galleryImages: [
      '/images/placeholder/placeholder-5.jpg',
      '/images/placeholder/placeholder-4.jpg',
      '/images/placeholder/placeholder-3.jpg',
      '/images/placeholder/placeholder-2.jpg',
      '/images/placeholder/placeholder-1.jpg',
    ],
  },
  {
    id: 'title-again',
    number: '04',
    title: 'Title, again',
    image: '/images/placeholder/placeholder-10.jpg',
    layout: 'wheel',
    date: '07 May 2026',
    description: loremBody,
    category: 'artworks',
    galleryImages: [
      '/images/placeholder/placeholder-1.jpg',
      '/images/placeholder/placeholder-5.jpg',
      '/images/placeholder/placeholder-7.jpg',
      '/images/placeholder/placeholder-3.jpg',
    ],
  },
  {
    id: 'return-of-the-title-2',
    number: '05',
    title: 'Return of the title',
    image: '/images/placeholder/placeholder-5.jpg',
    layout: 'carousel',
    date: '07 May 2026',
    description: loremBody,
    category: 'artworks',
    galleryImages: [
      '/images/placeholder/placeholder-5.jpg',
      '/images/placeholder/placeholder-4.jpg',
      '/images/placeholder/placeholder-2.jpg',
    ],
  },
  {
    id: 'title-returns',
    number: '06',
    title: 'Title Returns',
    image: '/images/placeholder/placeholder-4.jpg',
    layout: 'equigrid',
    date: '07 May 2026',
    description: loremBody,
    category: 'artworks',
    galleryImages: [
      '/images/placeholder/placeholder-4.jpg',
      '/images/placeholder/placeholder-3.jpg',
      '/images/placeholder/placeholder-2.jpg',
      '/images/placeholder/placeholder-1.jpg',
    ],
  },
  {
    id: 'title-1',
    number: '07',
    title: 'Title 1',
    image: '/images/placeholder/placeholder-3.jpg',
    layout: 'alternate',
    date: '07 May 2026',
    description: loremBody,
    category: 'artworks',
    galleryImages: [
      '/images/placeholder/placeholder-3.jpg',
      '/images/placeholder/placeholder-7.jpg',
      '/images/placeholder/placeholder-5.jpg',
      '/images/placeholder/placeholder-1.jpg',
      '/images/placeholder/placeholder-2.jpg',
    ],
  },
  {
    id: 'title-the-third',
    number: '08',
    title: 'Title the third',
    image: '/images/placeholder/placeholder-8.jpg',
    layout: 'wheel',
    date: '07 May 2026',
    description: loremBody,
    category: 'artworks',
    galleryImages: [
      '/images/placeholder/placeholder-8.jpg',
      '/images/placeholder/placeholder-5.jpg',
      '/images/placeholder/placeholder-4.jpg',
    ],
  },
  {
    id: 'this-is-a-title',
    number: '09',
    title: 'This is a title',
    image: '/images/placeholder/placeholder-11.jpg',
    layout: 'carousel',
    date: '07 May 2026',
    description: loremBody,
    category: 'artworks',
    galleryImages: [
      '/images/placeholder/placeholder-11.jpg',
      '/images/placeholder/placeholder-10.jpg',
      '/images/placeholder/placeholder-9.jpg',
    ],
  },
];

export const archives: Artwork[] = [
  {
    id: 'nostalgia',
    number: '01',
    title: 'Nostalgia',
    image: '/images/archives/nostalgia/transistor.jpg',
    layout: 'carousel',
    date: 'September 2017',
    description: '',
    category: 'archives',
    galleryImages: [
      '/images/archives/nostalgia/candy-collage.jpg',
      '/images/archives/nostalgia/glass-jar.jpeg',
      '/images/archives/nostalgia/transistor.jpg',
      '/images/archives/nostalgia/radio.jpeg',
    ],
  },
];

export function getAllArtworks(): Artwork[] {
  return [...artworks, ...archives];
}

export function getArtworkById(id: string): Artwork | undefined {
  return getAllArtworks().find((a) => a.id === id);
}

export function getRelatedArtworks(currentId: string, count = 2): Artwork[] {
  const all = getAllArtworks().filter((a) => a.id !== currentId);
  const shuffled = all.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
