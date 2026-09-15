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
  imageFit?: 'cover' | 'contain';
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
    id: 'dolce-far-niente',
    number: '01',
    title: 'Dolce Far Niente',
    image: '/images/archives/dolce-far-niente/cover.jpeg',
    layout: 'alternate',
    date: 'March 2020',
    description: `<p><em>"We call it Dolce Far Niente. It means the sweetness of doing nothing. We are masters of it." - Eat Pray Love (2010)</em></p><p>The following series is a collection of analog photographs that I captured when I was on my own, surrounded by almost nobody, doing almost nothing. They are the things that I observed and found appealing. Things which might have gone unnoticed otherwise. Shot using Kodak KB10 and Fujifilm C200.</p>`,
    category: 'archives',
    galleryImages: [
      '/images/archives/dolce-far-niente/dolce-far-niente-01.jpeg',
      '/images/archives/dolce-far-niente/dolce-far-niente-02.jpeg',
      '/images/archives/dolce-far-niente/dolce-far-niente-03.jpeg',
      '/images/archives/dolce-far-niente/dolce-far-niente-05.jpeg',
      '/images/archives/dolce-far-niente/dolce-far-niente-04.jpeg',
      '/images/archives/dolce-far-niente/dolce-far-niente-06.jpeg',
      '/images/archives/dolce-far-niente/dolce-far-niente-07.jpeg',
      '/images/archives/dolce-far-niente/dolce-far-niente-08.jpeg',
      '/images/archives/dolce-far-niente/dolce-far-niente-09.jpeg',
      '/images/archives/dolce-far-niente/dolce-far-niente-10.jpeg',
      '/images/archives/dolce-far-niente/dolce-far-niente-11.jpeg',
      '/images/archives/dolce-far-niente/dolce-far-niente-12.jpeg',
      '/images/archives/dolce-far-niente/dolce-far-niente-14.jpeg',
      '/images/archives/dolce-far-niente/dolce-far-niente-13.jpeg',
      '/images/archives/dolce-far-niente/dolce-far-niente-15.jpeg',
    ],
  },
  {
    id: 'the-white-frame',
    number: '02',
    title: 'The White Frame',
    image: '/images/archives/the-white-frame/rose.jpeg',
    layout: 'wheel',
    date: 'September 2017',
    description: `There's a very specific term in photography called "pictorialism." It was a movement in the 19th and 20th century, where the photographers started creating rather than recording the images. It captured the beauty of the object rather than just the object. In simple words, the photographs looked like paintings. Beauty being the main focus of the images, I initiated this series with the most immediate object that comes to anyone's mind which is flowers and plant life. The following series has Xray images of floral plants that have been uprooted.`,
    category: 'archives',
    galleryImages: [
      '/images/archives/the-white-frame/rose.jpeg',
      '/images/archives/the-white-frame/cactus.jpeg',
      '/images/archives/the-white-frame/hibiscus.jpeg',
      '/images/archives/the-white-frame/marigold.jpeg',
      '/images/archives/the-white-frame/star-flower.jpeg',
      '/images/archives/the-white-frame/succulant.jpeg',
      '/images/archives/the-white-frame/transvaal-daisy.jpeg',
      '/images/archives/the-white-frame/velvet.jpeg',
    ],
  },
  {
    id: 'the-faces-of-katraj',
    number: '03',
    title: 'The Faces of Katraj',
    image: '/images/archives/faces-of-katraj/small-trader-01.jpeg',
    layout: 'wheel',
    date: 'September 2017',
    description: `The following series was shot in the year 2016. Inspired by the "Small Traders" series by Irving Penn, this was an attempt to capture the faces of Katraj, an area in the city of Pune where I was studying photography. Traditionally he shot full length photos of the workers, but I wanted to add my touch to the entire project by moving closer to my subjects, giving the viewer a feeling of being closer to them. I wanted to focus more on the person than the objects they worked with.`,
    category: 'archives',
    galleryImages: [
      '/images/archives/faces-of-katraj/small-trader-01.jpeg',
      '/images/archives/faces-of-katraj/small-trader-02.jpeg',
      '/images/archives/faces-of-katraj/small-trader-03.jpeg',
      '/images/archives/faces-of-katraj/small-trader-04.jpeg',
      '/images/archives/faces-of-katraj/small-trader-05.jpeg',
      '/images/archives/faces-of-katraj/small-trader-06.jpeg',
      '/images/archives/faces-of-katraj/small-trader-07.jpeg',
      '/images/archives/faces-of-katraj/small-trader-08.jpeg',
      '/images/archives/faces-of-katraj/small-trader-09.jpeg',
    ],
  },
  {
    id: 'tints',
    number: '04',
    title: 'Tints',
    image: '/images/archives/tints/turmeric.jpeg',
    layout: 'carousel',
    date: 'September 2017',
    description: `The idea behind this shoot was to show the natural elements used to make natural dyes. This image is composed as such that it gives the idea that the colour is going from its source to the threads, which are and indication for the cloth.`,
    category: 'archives',
    galleryImages: [
      '/images/archives/tints/turmeric.jpeg',
      '/images/archives/tints/beet.jpeg',
      '/images/archives/tints/cabbage.jpeg',
      '/images/archives/tints/mint-leaf.jpeg',
      '/images/archives/tints/pomegranate.jpeg',
    ],
  },
  {
    id: 'textures-in-circles',
    number: '05',
    title: 'Texture in Circles',
    image: '/images/archives/textures-in-circles/cloth-2.jpg',
    layout: 'equigrid',
    date: 'August 2017',
    description: '',
    category: 'archives',
    galleryImages: [
      '/images/archives/textures-in-circles/water-texture-1.jpg',
      '/images/archives/textures-in-circles/water-texture-2.jpg',
      '/images/archives/textures-in-circles/water-texture-3.jpg',
      '/images/archives/textures-in-circles/water-texture-4.jpg',
      '/images/archives/textures-in-circles/water-texture-5.jpg',
      '/images/archives/textures-in-circles/water-texture-6.jpg',
      '/images/archives/textures-in-circles/paper-texture-01.jpg',
      '/images/archives/textures-in-circles/paper-texture-02.jpg',
      '/images/archives/textures-in-circles/paper-texture-03.jpg',
      '/images/archives/textures-in-circles/paper-texture-04.jpg',
      '/images/archives/textures-in-circles/cloth-1.jpg',
      '/images/archives/textures-in-circles/cloth-2.jpg',
    ],
  },
  {
    id: 'nostalgia',
    number: '06',
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
  const current = getArtworkById(currentId);
  const pool = current?.category === 'archives' ? archives : artworks;
  const candidates = pool.filter((a) => a.id !== currentId);
  const shuffled = candidates.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
