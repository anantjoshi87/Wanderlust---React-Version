import {
  Mountain,
  Waves,
  Building2,
  Home,
  Tent,
  Sun,
  Landmark,
  TreePalm,
} from "lucide-react";

import { ShieldCheck, CreditCard, Award, Clock } from "lucide-react";

export const categories = [
  {
    id: 1,
    name: "Mountains",
    key: "mountains",
    icon: Mountain,
    image:
      "https://images.unsplash.com/photo-1586972161369-9661ee10aae9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZSUyMHBlYWt8ZW58MXx8fHwxNzc0MjQ1MTA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    name: "Beaches",
    key: "beaches",
    icon: TreePalm,
    image:
      "https://images.unsplash.com/photo-1714412192114-61dca8f15f68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcGFyYWRpc2V8ZW58MXx8fHwxNzc0MjEwNDE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    name: "City Stays",
    key: "city",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1767884898868-c065de85553c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaXR5JTIwc2t5bGluZXxlbnwxfHx8fDE3NzQxODk1MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 4,
    name: "Cabins",
    key: "cabins",
    icon: Home,
    image:
      "https://images.unsplash.com/photo-1602331407936-58a39a558710?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBjYWJpbiUyMHdvb2RzfGVufDF8fHx8MTc3NDI0NTEwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 5,
    name: "Camping",
    key: "camping",
    icon: Tent,
    image:
      "https://images.unsplash.com/photo-1632163358591-5ba3c9f4317d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1waW5nJTIwdGVudCUyMG5hdHVyZXxlbnwxfHx8fDE3NzQyMTIyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 6,
    name: "Desert",
    key: "desert",
    icon: Sun,
    image:
      "https://images.unsplash.com/photo-1729799886592-42820707fe53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjBsYW5kc2NhcGUlMjBkdW5lc3xlbnwxfHx8fDE3NzQxNDc0MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 7,
    name: "Lake",
    key: "Lake",
    icon: Waves,
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    name: "Historic",
    key: "historic",
    icon: Landmark,
    image:
      "https://images.unsplash.com/photo-1704126841635-9fb712ff61b8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const trustFeatures = [
  {
    id: 1,
    icon: ShieldCheck,
    title: "Verified Hosts",
    description: "All hosts are verified for your safety and peace of mind",
  },
  {
    id: 2,
    icon: CreditCard,
    title: "Secure Payments",
    description: "Your payments are processed securely and protected",
  },
  {
    id: 3,
    icon: Award,
    title: "Best Stays",
    description: "Curated selection of the highest quality properties",
  },
  {
    id: 4,
    icon: Clock,
    title: "24/7 Support",
    description: "Our team is here to help you anytime, anywhere",
  },
];

export const footerLinks = {
  company: {
    title: "Company",
    links: ["About Us", "Careers", "Press", "Blog"],
  },
  support: {
    title: "Support",
    links: ["Help Center", "Safety", "Cancellation", "COVID-19"],
  },
  hosting: {
    title: "Hosting",
    links: [
      "Become a Host",
      "Host Resources",
      "Community Forum",
      "Host Responsibility",
    ],
  },
};
