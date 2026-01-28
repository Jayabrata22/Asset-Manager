import { BookOpen, User, TreePine, Heart, Phone, Mail, MapPin } from "lucide-react";

export const SITE_CONTENT = {
  hero: {
    tagline: "Service to Humanity is Service to God",
    subtitle: "Ananda Marga Welfare Society",
    ctaPrimary: "Join Us",
    ctaSecondary: "Contribute As You Can"
  },
  about: {
    title: "About The Trust",
    description: "Ananda Marga Welfare Society is a registered charitable trust working for education, elderly care, environmental protection, and service to humanity inspired by Neo-humanist values. Our mission is to serve all beings with love and compassion, recognizing the divine spark in everyone."
  },
  history: {
    title: "History of Ananda Marga",
    description: "Ananda Marga Pracaraka Samgha (AMPS) was founded in 1955 in Jamalpur, Bihar, India, by Shrii Shrii Anandamurti (Prabhat Ranjan Sarkar). Starting as a socio-spiritual movement, it has grown into a global organization dedicated to self-realization and service to humanity. Over the decades, Ananda Marga has established schools, medical centers, and relief teams (AMURT) worldwide, serving communities regardless of caste, creed, or religion."
  },
  founder: {
    name: "Shrii Shrii Anandamurti",
    title: "Founder of Ananda Marga",
    description: "Prabhat Ranjan Sarkar (1921–1990), known spiritually as Shrii Shrii Anandamurti, was a philosopher, social reformer, and spiritual master. He propounded the philosophy of Neohumanism, which extends the spirit of humanism to all living beings, including animals and plants. His life was a testament to his teaching: 'Service to humanity is service to God'."
  },
  causes: [
    {
      icon: BookOpen,
      title: "Education for Needy Children",
      description: "Supporting underprivileged children through value-based education."
    },
    {
      icon: User,
      title: "Support for Elderly Parents",
      description: "Care and dignity for senior citizens."
    },
    {
      icon: TreePine,
      title: "Tree Plantation & Environment",
      description: "Building a greener and healthier society."
    }
  ],
  school: {
    title: "Ananda Marga Primary School – Mysore",
    established: "Established in 2006",
    current: "Currently serving 60 students",
    proposal: "Proposed new campus for 150–500 students",
    focus: "Focus on moral, spiritual and holistic education."
  },
  activities: [
    {
      title: "Yoga Session",
      image: "/assets/yoga.png"
    },
    {
      title: "Tree Plantation",
      image: "/assets/plantation.png"
    },
    {
      title: "School Children",
      image: "/assets/hero-children.png"
    },
    {
      title: "Community Service",
      image: "/assets/yoga.png" // Reusing for now to fill grid
    }
  ],
  testimonials: [
    {
      text: "This school changed my child’s life.",
      author: "Parent"
    },
    {
      text: "Trust is doing real service.",
      author: "Donor"
    }
  ],
  contact: {
    email: "anandavitamohaacharya@gmail.com",
    phone: ["9845603926", "9113564422"],
    address: "Mysore, Karnataka",
    copyright: "© 2026 Ananda Marga Welfare Society. All Rights Reserved."
  },
  donation: {
    bankName: "State Bank of India",
    accountName: "Ananda Marga Welfare Society",
    accountNo: "44052849230",
    ifsc: "SBIN0016499",
    upiId: "qr.139131093648460076@sbi",
    message: "Your contribution helps us serve humanity. All donations are used for education, relief, and social welfare activities."
  }
};
