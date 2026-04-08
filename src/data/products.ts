import barcelona from "@/assets/barcelona.jpeg";
import bora from "@/assets/bora.jpeg";
import ferrara from "@/assets/ferrara.jpeg";
import firenzia from "@/assets/firenzia.jpeg";
import novita from "@/assets/novita.jpeg";
import ravena from "@/assets/ravena.jpeg";
import real from "@/assets/real.jpeg";
import pisa from "@/assets/pisa.jpeg";
import sofistic from "@/assets/sofistic.jpeg";
import turimCentro from "@/assets/turim-centro.jpeg";
import turim from "@/assets/turim.jpeg";
import venezia from "@/assets/venezia.jpeg";

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  type: "redonda" | "oval" | "retangular" | "centro" | "aparador";
  material: string;
  designer: string;
  dimensions: string;
  images: string[];
  isNew?: boolean;
}

export const products: Product[] = [
  {
    id: "mesa-barcelona",
    name: "Mesa Barcelona",
    category: "Mesa de Jantar",
    description: "Mesa de jantar oval com base cilíndrica escultural em madeira maciça. Design contemporâneo com linhas fluidas e acabamento impecável.",
    type: "oval",
    material: "Madeira Maciça",
    designer: "JR Decorativos",
    dimensions: "Alt. 0,75 | Comp. 1,80×1,10 / 2,00×1,10 / 2,20×1,10 / 2,40×1,10",
    images: [barcelona],
    isNew: true,
  },
  {
    id: "mesa-bora",
    name: "Mesa Bora",
    category: "Mesa de Jantar",
    description: "Mesa oval com tampo em vidro e base em madeira maciça com design geométrico. Elegância e modernidade para sua sala de jantar.",
    type: "oval",
    material: "Madeira + Vidro",
    designer: "JR Decorativos",
    dimensions: "Alt. 0,75 | Comp. 1,40 / 1,60 / 1,80 | Prof. 0,90",
    images: [bora],
    isNew: true,
  },
  {
    id: "mesa-ferrara",
    name: "Mesa Ferrara",
    category: "Mesa de Jantar",
    description: "Mesa redonda com base estrela em madeira maciça. Design leve e sofisticado, perfeita para ambientes aconchegantes.",
    type: "redonda",
    material: "Madeira Maciça",
    designer: "JR Decorativos",
    dimensions: "Alt. 0,75 | Diâm. 0,90 / 1,10 / 1,20 / 1,35 / 1,50",
    images: [ferrara],
    isNew: true,
  },
  {
    id: "mesa-firenzia",
    name: "Mesa Firenzia",
    category: "Mesa de Jantar",
    description: "Mesa redonda com tampo em vidro e base cônica em madeira maciça. Acompanha prato giratório central em madeira.",
    type: "redonda",
    material: "Madeira + Vidro",
    designer: "JR Decorativos",
    dimensions: "Alt. 0,75 | Diâm. 1,20 / 1,35 / 1,50",
    images: [firenzia],
  },
  {
    id: "aparador-novita",
    name: "Aparador Novita",
    category: "Aparador",
    description: "Aparador com tampo em vidro, corpo laqueado e pés em madeira maciça. Design clean e funcional com duas gavetas.",
    type: "aparador",
    material: "Madeira + Vidro + Laca",
    designer: "JR Decorativos",
    dimensions: "1,20 × 0,40 / 1,40 × 0,40",
    images: [novita],
  },
  {
    id: "mesa-pisa",
    name: "Mesa Pisa",
    category: "Mesa de Jantar",
    description: "Mesa redonda com base octogonal cônica em madeira maciça. Robustez e design contemporâneo em perfeita harmonia.",
    type: "redonda",
    material: "Madeira Maciça",
    designer: "JR Decorativos",
    dimensions: "Alt. 0,75 | Diâm. 0,90 / 1,10 / 1,20 / 1,35 / 1,50 / 1,60",
    images: [pisa],
    isNew: true,
  },
  {
    id: "mesa-sofistic",
    name: "Mesa Sofistic",
    category: "Mesa de Jantar",
    description: "Mesa retangular com tampo em vidro e base em madeira maciça. Linhas retas e elegantes para ambientes modernos.",
    type: "retangular",
    material: "Madeira + Vidro",
    designer: "JR Decorativos",
    dimensions: "Alt. 0,75 | Comp. 1,20×0,90 / 1,40×0,90 / 1,60×0,90 / 1,80×0,90 / 2,00×0,90 / 2,20×0,90",
    images: [sofistic],
  },
  {
    id: "mesa-turim-centro",
    name: "Mesa de Centro Turim",
    category: "Mesa de Centro",
    description: "Mesa de centro redonda com base cônica invertida em madeira maciça. Design escultural que transforma qualquer sala de estar.",
    type: "centro",
    material: "Madeira Maciça",
    designer: "JR Decorativos",
    dimensions: "Diâm. 0,80 / 0,90",
    images: [turimCentro],
  },
  {
    id: "mesa-turim",
    name: "Mesa de Jantar Turim",
    category: "Mesa de Jantar",
    description: "Mesa redonda com tampo em vidro e base cônica em madeira maciça. Sofisticação e design autoral para sua sala de jantar.",
    type: "redonda",
    material: "Madeira + Vidro",
    designer: "JR Decorativos",
    dimensions: "Alt. 0,75 | Diâm. 0,90 / 1,35 / 1,50 / 1,60",
    images: [turim],
    isNew: true,
  },
  {
    id: "mesa-venezia",
    name: "Mesa Venezia",
    category: "Mesa de Jantar",
    description: "Mesa redonda com base ampulheta em madeira maciça e tampo com prato giratório em vidro. Design marcante e funcional.",
    type: "redonda",
    material: "Madeira + Vidro",
    designer: "JR Decorativos",
    dimensions: "Alt. 0,75 | Diâm. 1,20 / 1,35 / 1,50 / 1,60",
    images: [venezia],
  },
  {
    id: "mesa-ravena",
    name: "Mesa Ravena",
    category: "Mesa de Jantar",
    description: "Mesa redonda com base cilíndrica robusta em madeira maciça. Design clean e atemporal para ambientes elegantes.",
    type: "redonda",
    material: "Madeira Maciça",
    designer: "JR Decorativos",
    dimensions: "Alt. 0,75 | Diâm. 1,35 / 1,50 / 1,60",
    images: [ravena],
    isNew: true,
  },
  {
    id: "mesa-real",
    name: "Mesa Real",
    category: "Mesa de Jantar",
    description: "Mesa retangular com base escultural em ripas de madeira maciça. Design autoral e marcante que é uma verdadeira obra de arte.",
    type: "retangular",
    material: "Madeira Maciça",
    designer: "JR Decorativos",
    dimensions: "Alt. 0,75 | Comp. 1,80×1,00 / 2,00×1,00 / 2,20×1,00 / 2,40×1,00",
    images: [real],
    isNew: true,
  },
];

export const materials = [...new Set(products.map((p) => p.material))];
export const types = [
  { value: "redonda", label: "Redonda" },
  { value: "oval", label: "Oval" },
  { value: "retangular", label: "Retangular" },
  { value: "centro", label: "Mesa de Centro" },
  { value: "aparador", label: "Aparador" },
];
