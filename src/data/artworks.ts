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


export const artworks: Artwork[] = [
  {
    id: 'a-perfect-intersection',
    number: '01',
    title: 'A Perfect Intersection',
    image: '/images/artworks/a-perfect-intersection/perfect-intersection-05.jpg',
    layout: 'carousel',
    date: 'August 2020',
    description: 'Shot on Canon FTB with Kodak 400 TX',
    category: 'artworks',
    galleryImages: [
      '/images/artworks/a-perfect-intersection/perfect-intersection-01.jpg',
      '/images/artworks/a-perfect-intersection/perfect-intersection-02.jpg',
      '/images/artworks/a-perfect-intersection/perfect-intersection-03.jpg',
      '/images/artworks/a-perfect-intersection/perfect-intersection-04.jpg',
      '/images/artworks/a-perfect-intersection/perfect-intersection-05.jpg',
      '/images/artworks/a-perfect-intersection/perfect-intersection-06.jpg',
      '/images/artworks/a-perfect-intersection/perfect-intersection-07.jpg',
      '/images/artworks/a-perfect-intersection/perfect-intersection-08.jpg',
      '/images/artworks/a-perfect-intersection/perfect-intersection-09.jpg',
    ],
  },
  {
    id: 'noon',
    number: '02',
    title: 'Noon',
    image: '/images/artworks/noon/noon-10.jpg',
    layout: 'carousel',
    date: 'March 2020',
    description: 'Shot on  Canon FTB with Kodak 400 TX',
    category: 'artworks',
    galleryImages: [
      '/images/artworks/noon/noon-01.jpg',
      '/images/artworks/noon/noon-03.jpg',
      '/images/artworks/noon/noon-04.jpg',
      '/images/artworks/noon/noon-05.jpg',
      '/images/artworks/noon/noon-06.jpg',
      '/images/artworks/noon/noon-07.jpg',
      '/images/artworks/noon/noon-08.jpg',
      '/images/artworks/noon/noon-09.jpg',
      '/images/artworks/noon/noon-10.jpg',
      '/images/artworks/noon/noon-11.jpg',
      '/images/artworks/noon/noon-12.jpg',
    ],
  },
  {
    id: 'first-reflections',
    number: '03',
    title: 'First Reflections',
    image: '/images/artworks/first-reflections/first-reflections-01.jpeg',
    layout: 'alternate',
    date: 'February 2020',
    description: 'Shot on Kodak KB10 with Ilford HP5',
    category: 'artworks',
    galleryImages: [
      '/images/artworks/first-reflections/first-reflections-01.jpeg',
      '/images/artworks/first-reflections/first-reflections-02.jpeg',
      '/images/artworks/first-reflections/first-reflections-03.jpeg',
      '/images/artworks/first-reflections/first-reflections-04.jpeg',
      '/images/artworks/first-reflections/first-reflections-05.jpeg',
      '/images/artworks/first-reflections/first-reflections-06.jpeg',
      '/images/artworks/first-reflections/first-reflections-07.jpeg',
      '/images/artworks/first-reflections/first-reflections-08.jpeg',
      '/images/artworks/first-reflections/first-reflections-09.jpeg',
    ],
  },
  {
    id: 'flaw-ruh',
    number: '04',
    title: 'Flaw • ruh',
    image: '/images/artworks/flaw-ruh/flaw-ruh-07.jpeg',
    layout: 'equigrid',
    date: 'July 2019',
    description: `<p>Pronunciation for Flora, this series will always hold a special place in my life, because this is the first series I completed after a gap of almost two years of bed rest.</p><p>My autoimmune disease which mainly affected the appearance of my skin took a toll on my self confidence.</p><p>Nature has always been my inspiration and when I started shooting these images, I was choosing flowers and leaves in and around my area, that are not necessarily common or beautiful to look at. Soon I realised a pattern that I was following. I was being attracted to dried flower buds and leaves that are going to wither. I was choosing from the plants that grew by the roadsides and in the marshes, as it is a rainy season here in Maharashtra right now. The outline over the images are just an incorporation of my style which is still evolving.</p><p>I was trying to express that being flawed is okay and it is beautiful too. Coincidently, when I was naming my series I had chosen "flora" initially and when I was looking for the correct meaning of the word, I came across its pronunciation which was 'Flaw﹒ruh' and I knew it all came together.</p><p>All the images are shot on iPhone 6 and illustrations are made digitally on Sketched</p>`,
    category: 'artworks',
    galleryImages: [
      '/images/artworks/flaw-ruh/flaw-ruh-01.jpeg',
      '/images/artworks/flaw-ruh/flaw-ruh-02.jpeg',
      '/images/artworks/flaw-ruh/flaw-ruh-03.jpeg',
      '/images/artworks/flaw-ruh/flaw-ruh-04.jpeg',
      '/images/artworks/flaw-ruh/flaw-ruh-05.jpeg',
      '/images/artworks/flaw-ruh/flaw-ruh-06.jpeg',
      '/images/artworks/flaw-ruh/flaw-ruh-07.jpeg',
      '/images/artworks/flaw-ruh/flaw-ruh-08.jpeg',
      '/images/artworks/flaw-ruh/flaw-ruh-09.jpeg',
      '/images/artworks/flaw-ruh/flaw-ruh-10.jpeg',
      '/images/artworks/flaw-ruh/flaw-ruh-11.jpeg',
      '/images/artworks/flaw-ruh/flaw-ruh-12.jpeg',
      '/images/artworks/flaw-ruh/flaw-ruh-13.jpeg',
      '/images/artworks/flaw-ruh/flaw-ruh-14.jpeg',
      '/images/artworks/flaw-ruh/flaw-ruh-15.jpeg',
      '/images/artworks/flaw-ruh/flaw-ruh-16.jpeg',
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
    date: 'May 2016',
    description: `Inspired by the "Small Traders" series by Irving Penn, this was an attempt to capture the faces of Katraj, an area in the city of Pune where I was studying photography. Traditionally he shot full length photos of the workers, but I wanted to add my touch to the entire project by moving closer to my subjects, giving the viewer a feeling of being closer to them. I wanted to focus more on the person than the objects they worked with.`,
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
