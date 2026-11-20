const img = (id, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  hero: img('1610701596007-11502861dcfa', 2000),
  heroAlt: img('1513519245088-0e12902e5a38', 2000),
  philosophy: img('1578749556568-bc2c40e68b61', 1100),
  craft: img('1565193566173-7a0ee3dbe261', 1200),
  workshop: img('1590736969955-71cc94901144', 1200),
  interior: img('1616486338812-3dadae4b4ace', 1400),
  tabletop: img('1495474472287-4d71bcdd2085', 1200),
  detail: img('1600607687939-ce8a6c25118c', 1200),
};

export const collections = [
  { id: 'brass-home-decor', title: 'Brass Home Decor', blurb: 'Sculptural vessels, bowls and objects that bring warmth and quiet character to interiors.', description: 'A considered range of decorative brass and metal forms developed for interiors, retail and hospitality. Finishes, proportions and detailing can be adapted to suit your market.', image: img('1600585154340-be6161a56a0c', 1400), aspect: 'aspect-[4/3]', alt: 'Handcrafted brass decorative vessels styled in a warm contemporary interior' },
  { id: 'brass-tableware', title: 'Brass Tableware', blurb: 'Serving pieces and dining accessories crafted for considered, everyday rituals.', description: 'Tabletop metalware including serveware, trays, bowls and dining accessories. Developed with attention to weight, balance and food-safe finishing requirements.', image: img('1495474472287-4d71bcdd2085', 1200), aspect: 'aspect-[3/4]', alt: 'Brass tableware and serving pieces arranged on a linen table setting' },
  { id: 'decorative-metalware', title: 'Decorative Metalware', blurb: 'Accent objects and statement pieces developed with traditional metalworking techniques.', description: 'Statement objects that draw on Indian metalworking traditions - hammering, engraving, casting and patination - refined for contemporary international assortments.', image: img('1524758631624-e2822e304c36', 1200), aspect: 'aspect-[3/4]', alt: 'Sculptural metalware objects with hand-finished detailing' },
  { id: 'lighting-accessories', title: 'Lighting & Accessories', blurb: 'Ambient lighting and small accessories that balance form, finish and function.', description: 'Decorative lighting and small accessories in brass and mixed metals, developed with attention to finish consistency and market-specific electrical requirements.', image: img('1618221195710-dd6b41faaea6', 1400), aspect: 'aspect-[4/3]', alt: 'Brass lighting fixture in a softly lit minimal interior' },
  { id: 'custom-metal-products', title: 'Custom Metal Products', blurb: 'Bespoke development for buyers with specific design, finish and dimension requirements.', description: 'For buyers with a defined design direction, we coordinate development from reference and sketch through sampling, finish trials and production approvals.', image: img('1565193566173-7a0ee3dbe261', 1200), aspect: 'aspect-[4/5]', alt: 'Metal components being developed in a metalwork workshop' },
  { id: 'handcrafted-giftware', title: 'Handcrafted Giftware', blurb: 'Curated, gift-ready metalware developed for retail and corporate programmes.', description: 'Gift-oriented metalware developed for retail collections, corporate programmes and seasonal assortments, with packaging coordination available on request.', image: img('1493809842364-78817add7ffb', 1200), aspect: 'aspect-[4/5]', alt: 'Gift-ready handcrafted brass objects presented on a neutral surface' },
];

export const capabilities = [
  { id: 'product-sourcing', title: 'Product Sourcing', short: 'We identify metalware products that align with your assortment, price architecture and design direction.', long: 'We begin with your brief - category, price architecture, finish expectations and target market. From there we identify products and craft clusters in India that align with your requirement, and present options with clear detail on material, finish and construction.' },
  { id: 'manufacturing-partnerships', title: 'Manufacturing Partnerships', short: 'Access to a network of Indian craft and manufacturing units suited to your order profile.', long: 'We work with craft and manufacturing units across India and match each enquiry to a partner whose specialism, scale and capability suit the order. Relationships are built on clear communication and consistent expectations.' },
  { id: 'custom-product-development', title: 'Custom Product Development', short: 'From references and sketches to samples, we coordinate the development of bespoke pieces.', long: 'Where a catalogue product is not quite right, we coordinate development. This typically covers technical discussion, material and finish trials, prototype creation and iteration until the sample meets your approval.' },
  { id: 'quality-assurance', title: 'Quality Assurance', short: 'Structured inspection and approval coordination to keep finishes and tolerances consistent.', long: 'Quality is coordinated at defined checkpoints - sample approval, pre-production review and pre-shipment inspection. We document observations and coordinate corrective action with the manufacturing partner before goods move.' },
  { id: 'order-coordination', title: 'Order Coordination', short: 'A single point of contact through sampling, production updates and pre-shipment checks.', long: 'You deal with one coordinator, not a chain of intermediaries. We track sampling timelines, production milestones and pre-shipment checks, and keep you informed at each stage with clear, factual updates.' },
  { id: 'export-support', title: 'Export Support', short: 'Coordination of documentation, packing standards and shipping requirements with your forwarder.', long: 'We coordinate the practicalities of international supply - packing standards, labelling, documentation requirements and handover to your nominated forwarder - so that goods move through the supply chain without surprises.' },
];

export const processSteps = [
  { number: '01', title: 'Discover', body: "Understand the buyer's product requirements." },
  { number: '02', title: 'Source', body: 'Identify suitable products and manufacturing partners.' },
  { number: '03', title: 'Develop', body: 'Coordinate samples and customisation requirements.' },
  { number: '04', title: 'Verify', body: 'Coordinate product quality checks and approvals.' },
  { number: '05', title: 'Deliver', body: 'Coordinate order fulfilment and export logistics.' },
];

export const whyPoints = [
  { title: 'Indian Craftsmanship & Manufacturing Connections', body: 'Direct relationships with craft and manufacturing units across India, built over time.' },
  { title: 'Thoughtful Product Discovery', body: 'Curated, market-aware product options rather than an unfiltered catalogue dump.' },
  { title: 'Quality-Focused Sourcing Processes', body: 'Defined checkpoints across sampling, production and pre-shipment stages.' },
  { title: 'Customisation Possibilities', body: 'Finish, dimension and detailing adaptations coordinated around your brief.' },
  { title: 'Buyer-Focused Communication', body: 'Clear, timely updates from a single point of contact throughout the order.' },
  { title: 'International Business Orientation', body: 'Familiarity with the expectations of buyers sourcing from India for global markets.' },
];

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'Our Story' },
  { to: '/collections', label: 'Collections' },
  { to: '/capabilities', label: 'Capabilities' },
  { to: '/contact', label: 'Contact' },
];

export const site = {
  email: 'hello@cauveran.com',
  phone: '+91 00000 00000',
  location: 'India',
};
