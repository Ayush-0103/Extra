/* =========================================================
   INDIAN ART THROUGH TIME — SCRIPT
   Vanilla JavaScript only. Organised into clear sections:
   DATA -> NAVIGATION -> TIMELINE -> ARTIFACTS -> MODAL ->
   MAP -> FACTS -> SCROLL EFFECTS -> INIT
   ========================================================= */

/* =========================================================
   1. DATA
   ========================================================= */

const periods = [
  {
    id: "indus",
    name: "Indus Valley Civilization",
    date: "c. 2500 – 1900 BCE",
    overview: "The Indus Valley Civilization was one of the world's earliest urban cultures, producing sophisticated town planning alongside sculpture, seals, pottery and jewellery. Its art is notable for restraint, technical skill and enigmatic symbolism that scholars still work to decode.",
    characteristics: ["Lost-wax bronze casting", "Terracotta figurines", "Carved steatite seals", "Standardised craft production", "Undeciphered pictographic script"],
    sites: ["Mohenjo-daro", "Harappa", "Dholavira"]
  },
  {
    id: "mauryan",
    name: "Mauryan Period",
    date: "c. 322 – 185 BCE",
    overview: "Under emperors Chandragupta and Ashoka, the Mauryan Empire produced India's first great imperial art — monumental stone pillars, polished capitals and stupas that carried Buddhist teaching and royal authority across the subcontinent.",
    characteristics: ["Mirror-polished sandstone ('Mauryan polish')", "Free-standing edict pillars", "Animal capitals with Buddhist symbolism", "Early stupa architecture", "Monumental royal patronage"],
    sites: ["Sarnath", "Sanchi", "Vaishali"]
  },
  {
    id: "gupta",
    name: "Gupta Period",
    date: "c. 320 – 550 CE",
    overview: "Often called the 'classical age' of Indian art, the Gupta period refined Buddhist and Hindu sculpture into an idealised, serene visual language, and produced some of the finest surviving mural painting at Ajanta.",
    characteristics: ["Idealised, serene facial expression", "Transparent 'wet drapery' style", "Refined bronze and stone casting", "Narrative cave murals", "Codification of iconographic canons"],
    sites: ["Sarnath", "Ajanta", "Mathura"]
  },
  {
    id: "medieval",
    name: "Medieval & Temple Art",
    date: "c. 600 – 1300 CE",
    overview: "Regional dynasties across India built increasingly elaborate stone temples, turning architecture itself into sculpture. Chola bronzes, Khajuraho's carved surfaces and Konark's Sun Temple represent a golden age of devotional art.",
    characteristics: ["Elaborate temple superstructures (shikhara)", "Chola bronze lost-wax casting", "Dense narrative and figural carving", "Temple conceived as cosmic diagram", "Distinct regional stylistic schools"],
    sites: ["Khajuraho", "Thanjavur", "Konark"]
  },
  {
    id: "mughal",
    name: "Mughal Art",
    date: "c. 1526 – 1857 CE",
    overview: "The Mughal court fused Persian, Central Asian and Indian traditions into a refined imperial style, producing exquisite manuscript painting and architecture that culminated in the Taj Mahal.",
    characteristics: ["Fine miniature manuscript painting", "Naturalistic portraiture", "Pietra dura stone inlay work", "Charbagh garden architecture", "Court ateliers (kitabkhana)"],
    sites: ["Agra", "Delhi", "Lahore"]
  },
  {
    id: "rajput",
    name: "Rajput & Pahari Art",
    date: "16th – 19th Century",
    overview: "Away from the Mughal court, Rajasthani and Himalayan (Pahari) kingdoms developed vivid, emotionally direct painting traditions centred on Hindu devotional themes, especially the life of Krishna.",
    characteristics: ["Bold, flat colour fields", "Devotional Krishna-Radha themes", "Regional courtly workshops", "Lyrical, poetic compositions", "Distinct Kangra and Kishangarh styles"],
    sites: ["Kishangarh", "Udaipur", "Kangra"]
  },
  {
    id: "colonial",
    name: "Colonial & Bengal School",
    date: "18th – 20th Century",
    overview: "As colonial academic realism spread through British-run art schools, the Bengal School led by Abanindranath Tagore consciously revived Indian techniques and themes as an act of cultural and nationalist assertion.",
    characteristics: ["Wash painting technique", "Swadeshi nationalist themes", "Revival of Mughal and Ajanta influences", "Symbolic, allegorical figures", "Founding of Indian art institutions"],
    sites: ["Kolkata", "Santiniketan"]
  },
  {
    id: "modern",
    name: "Modern & Contemporary India",
    date: "20th Century – Present",
    overview: "Post-independence Indian artists absorbed and reworked global modernism, forging distinct personal languages. The Progressive Artists' Group and the generations that followed placed Indian art firmly on the world stage.",
    characteristics: ["Modernist experimentation", "Progressive Artists' Group", "Fusion of Indian and Western idioms", "Individual expressive styles", "Global exhibition and market presence"],
    sites: ["Mumbai", "Delhi", "Paris"]
  }
];

const artifacts = [
  {
    id: "dancing-girl",
    name: "Dancing Girl",
    period: "indus",
    date: "c. 2500 BCE",
    location: "Mohenjo-daro — now in the National Museum, New Delhi",
    material: "Bronze (lost-wax cast)",
    category: "indus",
    description: "A small bronze figure, barely 10.5 cm tall, of a young woman standing in a confident, hip-tilted pose with one arm laden with bangles resting on her hip. She wears little but a necklace and dozens of bangles, her hair tied in a distinctive bun.",
    historicalContext: "Cast using the lost-wax technique around 2500 BCE, the figure shows that Indus Valley metalworkers had mastered bronze casting for fine art, not just tools. Her relaxed, naturalistic stance is unusual for such an early period in world art.",
    significance: "She is widely regarded as one of the earliest known bronze sculptures from the Indian subcontinent, admired for a lifelike posture that predates comparable naturalism found almost anywhere else in the ancient world.",
    interestingFact: "Archaeologist Mortimer Wheeler famously called her 'my girl' and praised her as proof that confident, sensitive portrait sculpture existed in South Asia 4,500 years ago.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Dancing%20girl%20of%20Mohenjo-daro.jpg?width=800",
    tags: "bronze casting figure dance mohenjo-daro indus valley sculpture statue"
  },
  {
    id: "pashupati-seal",
    name: "Pashupati Seal",
    period: "indus",
    date: "c. 2350 – 2000 BCE",
    location: "Mohenjo-daro — National Museum, New Delhi",
    material: "Carved steatite (soapstone)",
    category: "indus",
    description: "A small square steatite seal engraved with a seated, horned figure surrounded by animals — an elephant, tiger, rhinoceros and buffalo — with two deer beneath the seat.",
    historicalContext: "Seals like this were likely pressed into clay to mark ownership of goods within Indus trade networks. The seated figure's yogic posture and animal companions have made this one of the most discussed images of the civilization.",
    significance: "Some scholars connect the figure to a proto-Shiva or a 'lord of animals' archetype, placing it at the centre of debates about the roots of later Hindu iconography — though the link remains unproven and widely debated.",
    interestingFact: "The seal is barely 3.5 cm across, yet it has generated more scholarly discussion than almost any other single Indus Valley artifact.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Pashupati%20Seal%20from%20the%20Harappan%20Civilization.jpg?width=800",
    tags: "seal steatite pashupati shiva animals indus valley religion soapstone"
  },
  {
    id: "priest-king",
    name: "Priest-King",
    period: "indus",
    date: "c. 2500 – 1900 BCE",
    location: "Mohenjo-daro — National Museum, Karachi",
    material: "Steatite",
    category: "indus",
    description: "A small bust of a bearded man wearing a fillet headband and armband, his robe patterned with a trefoil motif, with half-closed eyes suggesting a meditative expression.",
    historicalContext: "Found in a house at Mohenjo-daro, the bust's dignified expression and ornamentation led early excavators to imagine him as a ruler-priest, though no evidence confirms the Indus Valley had kings in the conventional sense.",
    significance: "The sculpture is one of the few surviving representations of a specific Indus individual of apparent status, offering rare insight into how the civilization portrayed authority and dress.",
    interestingFact: "The name 'Priest-King' is purely a modern nickname — nothing found at the site actually confirms his role or status.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Priest%20King%20%28Sculpture%29%20of%20Mohenjo-daro.jpg?width=800",
    tags: "steatite bust priest king mohenjo-daro indus valley sculpture"
  },
  {
    id: "lion-capital",
    name: "Lion Capital of Ashoka",
    period: "mauryan",
    date: "c. 250 BCE",
    location: "Sarnath — Sarnath Museum, Uttar Pradesh",
    material: "Polished Chunar sandstone",
    category: "mauryan",
    description: "Four addorsed lions standing back to back atop an abacus carved with a chakra (wheel) and four animals, originally crowning a freestanding pillar erected by Emperor Ashoka at Sarnath.",
    historicalContext: "Ashoka raised the pillar to mark the site of the Buddha's first sermon after his own conversion to Buddhism, part of a wider programme of edict pillars spreading Buddhist moral teaching across his empire.",
    significance: "Adopted as independent India's State Emblem in 1950, the capital is the single most recognisable symbol of Mauryan art and of the modern state's continuity with its ancient past.",
    interestingFact: "The mirror-like polish on the sandstone, known as 'Mauryan polish', remains so refined that its exact technique is still debated by conservators today.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ashokan%20Lion%20Capital%20India%27s%20National%20Emblem%20Sarnath%20Archeological%20Museum.jpg?width=800",
    tags: "lion capital ashoka sarnath sandstone mauryan pillar emblem"
  },
  {
    id: "sanchi-stupa",
    name: "Great Stupa of Sanchi",
    period: "mauryan",
    date: "3rd c. BCE, expanded 1st c. BCE/CE",
    location: "Sanchi, Madhya Pradesh",
    material: "Sandstone and brick",
    category: "mauryan",
    description: "A massive hemispherical brick and stone dome originally commissioned by Ashoka, later enlarged and encircled by carved gateways (toranas) depicting scenes from the Buddha's life without showing the Buddha in human form.",
    historicalContext: "Built to enshrine Buddhist relics, Sanchi grew over centuries from a simple Mauryan mound into an elaborately decorated pilgrimage monument, reflecting the spread of Buddhism across central India.",
    significance: "It is the oldest surviving stone structure in India and a UNESCO World Heritage Site, offering the fullest picture of early Buddhist narrative art and stupa architecture.",
    interestingFact: "Early Buddhist art avoided depicting the Buddha directly — his presence is shown instead through symbols like footprints, an empty throne, or a wheel.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/The%20Great%20Stupa%20at%20Sanchi.jpg?width=800",
    tags: "stupa sanchi buddhist stone gateway mauryan architecture"
  },
  {
    id: "ashoka-pillar",
    name: "Ashokan Pillar, Vaishali",
    period: "mauryan",
    date: "c. 250 BCE",
    location: "Vaishali, Bihar (in situ)",
    material: "Polished sandstone",
    category: "mauryan",
    description: "A single, undecorated monolithic sandstone pillar over 12 metres tall, topped by a bell-shaped capital and a single seated lion facing north toward the Himalayas.",
    historicalContext: "One of the few Ashokan pillars still standing at its original location, it marks a site closely associated with the Buddha's later life and with the Second Buddhist Council.",
    significance: "It demonstrates the engineering skill required to quarry, transport and erect single sandstone shafts of enormous size and weight without modern machinery, a feat still studied by historians of technology.",
    interestingFact: "Unlike most Ashokan pillars, the Vaishali pillar carries no inscription at all — its message was symbolic rather than written.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ashoka%20pillar%20at%20Vaishali%2C%20Bihar%2C%20India.jpg?width=800",
    tags: "pillar ashoka vaishali sandstone mauryan lion"
  },
  {
    id: "sarnath-buddha",
    name: "Sarnath Buddha (First Sermon)",
    period: "gupta",
    date: "c. 475 CE",
    location: "Sarnath — Sarnath Museum, Uttar Pradesh",
    material: "Chunar sandstone",
    category: "gupta",
    description: "A seated Buddha shown mid-sermon, hands in dharmachakra mudra (turning the wheel of law), with a serene, downcast gaze, an elaborately carved halo, and a small relief below showing his first five disciples.",
    historicalContext: "Carved at Sarnath, the very site where the Buddha delivered his first teaching, the sculpture represents the mature Gupta ideal of spiritual calm rendered in physical form.",
    significance: "Considered one of the finest achievements of Gupta sculpture, its serene expression and flowing, near-transparent drapery became a model copied across Buddhist Asia for centuries.",
    interestingFact: "The thin, cling-like drapery carved on the figure is so subtle that the body appears almost bare — a hallmark of the Gupta 'wet drapery' style.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Buddha%20in%20Sarnath%20Museum%20%28Dhammajak%20Mutra%29.jpg?width=800",
    tags: "buddha sarnath gupta sandstone sermon sculpture"
  },
  {
    id: "ajanta-murals",
    name: "Ajanta Cave Murals",
    period: "gupta",
    date: "c. 5th century CE",
    location: "Ajanta Caves, Maharashtra",
    material: "Fresco-secco wall painting",
    category: "gupta",
    description: "Extensive murals painted across the walls and ceilings of rock-cut Buddhist caves, depicting jataka tales of the Buddha's previous lives alongside courtly scenes, bodhisattvas and decorative motifs.",
    historicalContext: "Painted mainly under Gupta-era Vakataka patronage, the caves served as monasteries and prayer halls, then lay abandoned and forgotten until their rediscovery by a British hunting party in 1819.",
    significance: "Ajanta preserves the largest and finest body of ancient Indian painting to survive, providing an unmatched window into Gupta-era court life, costume and artistic technique.",
    interestingFact: "The murals were not painted as true fresco — pigments were applied to a dry mud-plaster surface, a method now called fresco-secco.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Bodhisattva%20Padmapani%2C%20Ajanta%2C%20cave%201%2C%20India.jpg?width=800",
    tags: "ajanta mural painting cave buddhist gupta jataka fresco padmapani"
  },
  {
    id: "mankuwar-buddha",
    name: "Mankuwar Buddha",
    period: "gupta",
    date: "448 CE",
    location: "Mankuwar, Uttar Pradesh — Indian Museum, Kolkata",
    material: "Sandstone",
    category: "gupta",
    description: "A dated, inscribed seated Buddha image carved in the mature Gupta style, its serene expression and elegant proportions typical of sculpture produced under Gupta patronage.",
    historicalContext: "The image carries a dedicatory inscription giving an exact date in the Gupta era, making it one of the most securely dated sculptures of the period and a key reference point for art historians.",
    significance: "Because its date is inscribed rather than estimated, the Mankuwar Buddha serves as a chronological anchor used to date other, undated Gupta sculptures by stylistic comparison.",
    interestingFact: "Precisely dated ancient Indian sculptures are rare — most Gupta-era dates are estimated from style alone, which is what makes this inscribed image so valuable to historians.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/449%20CE%20Mankuwar%20Image%20Inscription%2C%20Buddhism%2C%20Kumaragupta%2C%20Sanskrit.jpg?width=800",
    tags: "buddha gupta sandstone inscription sculpture mankuwar"
  },
  {
    id: "nataraja",
    name: "Nataraja (Shiva as Lord of Dance)",
    period: "medieval",
    date: "c. 10th – 12th century CE",
    location: "Thanjavur region, Tamil Nadu — Chola bronzes held in museums worldwide",
    material: "Bronze (lost-wax cast)",
    category: "medieval",
    description: "Shiva depicted dancing within a ring of fire, one foot crushing the dwarf of ignorance, hands holding a drum and flame while others gesture reassurance and point to his raised foot as a path to liberation.",
    historicalContext: "Cast by Chola-dynasty bronze workers using the lost-wax process, Nataraja images were carried in temple processions as the visible, moving form of the temple's fixed stone deity.",
    significance: "The Nataraja is regarded as one of the supreme achievements of world bronze sculpture, admired for encoding complex philosophical ideas about creation, destruction and cosmic rhythm within one balanced form.",
    interestingFact: "Physicist Fritjof Capra famously compared the Nataraja's cosmic dance to the physics of subatomic particle motion in his book 'The Tao of Physics'.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Shiva%20as%20the%20Lord%20of%20Dance%20LACMA%20edit.jpg?width=800",
    tags: "nataraja shiva bronze chola dance medieval sculpture temple"
  },
  {
    id: "khajuraho",
    name: "Khajuraho Temple Sculptures",
    period: "medieval",
    date: "c. 950 – 1050 CE",
    location: "Khajuraho, Madhya Pradesh",
    material: "Sandstone",
    category: "medieval",
    description: "Dense bands of figural sculpture covering the exterior walls of the Khajuraho temples, showing deities, celestial nymphs (apsaras), musicians and scenes of daily and devotional life carved in high relief.",
    historicalContext: "Built by the Chandela dynasty as a major temple complex, Khajuraho's carving programme covers entire temple surfaces, treating the building itself as a canvas for elaborate narrative and symbolic sculpture.",
    significance: "Khajuraho is a UNESCO World Heritage Site and represents the peak of North Indian temple sculpture, admired for its technical virtuosity and sheer density of carved detail.",
    interestingFact: "Although famous internationally for its intimate carvings, these panels make up only a small fraction of Khajuraho's sculpture — most depicts gods, animals and everyday scenes.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Khajuraho%20India%2C%20Kandariya%20Mahadev%20Temple%2C%20Vishnu%20Sculpture.jpg?width=800",
    tags: "khajuraho temple sculpture sandstone medieval chandela"
  },
  {
    id: "konark-wheel",
    name: "Konark Sun Temple Wheel",
    period: "medieval",
    date: "c. 1250 CE",
    location: "Konark, Odisha",
    material: "Carved sandstone",
    category: "medieval",
    description: "One of twelve monumental stone wheels, over 3 metres in diameter with intricately carved spokes, forming part of the temple's design as a colossal stone chariot for the sun god Surya.",
    historicalContext: "Commissioned by King Narasimhadeva I of the Eastern Ganga dynasty, the entire temple was conceived as a chariot with 24 wheels drawn by seven horses, aligning architecture with solar mythology.",
    significance: "The Konark wheel is celebrated for combining precise geometry with dense narrative carving, and now appears on the reverse of the Indian ten-rupee note.",
    interestingFact: "The spokes of the Konark wheels function as an accurate sundial — the shadow they cast can be read to tell the time of day.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Konark%20Sun%20Temple%20Wheel.jpg?width=800",
    tags: "konark sun temple wheel sandstone medieval odisha"
  },
  {
    id: "mughal-miniature",
    name: "Mughal Miniature Painting",
    period: "mughal",
    date: "c. 1590 – 1595 CE",
    location: "Mughal royal atelier, Agra / Fatehpur Sikri — folios in the V&A and CSMVS museums",
    material: "Opaque watercolour and gold on paper",
    category: "mughal",
    description: "A small, densely detailed painted folio from the Akbarnama, the illustrated chronicle of Emperor Akbar's reign, combining Persian pictorial conventions with Indian colour and naturalistic observation.",
    historicalContext: "Akbar assembled a large imperial atelier of Persian and Indian artists who collaborated on individual paintings, blending traditions to record court events, battles and hunts in vivid detail.",
    significance: "Mughal manuscript painting set the standard for South Asian miniature art, influencing Rajput and Deccan painting for centuries and leaving an unmatched visual record of court life.",
    interestingFact: "Individual Mughal miniatures were often produced by several specialist hands — one artist for the composition, another for portrait faces, another for fine detail.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/%22Akbar%20Hunting%22%2C%20Folio%20from%20an%20Akbarnama%20%28History%20of%20Akbar%29%20MET%2011050.jpg?width=800",
    tags: "mughal miniature painting akbarnama manuscript akbar hunting"
  },
  {
    id: "taj-mahal",
    name: "Taj Mahal",
    period: "mughal",
    date: "1632 – 1653 CE",
    location: "Agra, Uttar Pradesh",
    material: "White marble with pietra dura inlay",
    category: "mughal",
    description: "A monumental white marble mausoleum built on a symmetrical charbagh garden plan, its central dome flanked by four minarets and its surfaces inlaid with semi-precious stones in floral patterns.",
    historicalContext: "Commissioned by Emperor Shah Jahan as a tomb for his wife Mumtaz Mahal, the complex took over two decades to complete and drew craftsmen, materials and inlay stones from across Asia.",
    significance: "Widely regarded as the pinnacle of Mughal architecture, the Taj Mahal is a UNESCO World Heritage Site celebrated for its symmetry, proportion and craftsmanship.",
    interestingFact: "The Taj Mahal's marble appears to change colour through the day — pale pink at dawn, milky white at noon and golden under moonlight — due to how the stone reflects shifting light.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Taj%20Mahal%2C%20Agra%2C%20India%20edit3.jpg?width=800",
    tags: "taj mahal mughal marble architecture agra mausoleum"
  },
  {
    id: "bani-thani",
    name: "Bani Thani",
    period: "rajput",
    date: "c. 1750 CE",
    location: "Kishangarh, Rajasthan — National Museum, New Delhi",
    material: "Opaque watercolour on paper",
    category: "rajput",
    description: "A refined portrait of a woman with elongated eyes, arched brows and a delicate profile, painted in the distinctive Kishangarh style associated with painter Nihal Chand.",
    historicalContext: "Created under the patronage of Raja Sawant Singh of Kishangarh, who was also a devotional poet, the painting reflects the fusion of courtly romance and Krishna devotion typical of Rajput painting.",
    significance: "Bani Thani has become an icon of Rajasthani art, so closely identified with the Kishangarh style that it is sometimes called the 'Indian Mona Lisa'.",
    interestingFact: "The painting is popularly believed to be a stylised portrait of a court poet-singer named Bani Thani, though her elongated features owe as much to artistic convention as to likeness.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Bani%20Thani%20painting.jpg?width=800",
    tags: "bani thani rajput miniature kishangarh painting"
  },
  {
    id: "kangra-painting",
    name: "Kangra Painting (Krishna & Radha)",
    period: "rajput",
    date: "c. 1780 – 1800 CE",
    location: "Kangra, Himachal Pradesh — various museum collections",
    material: "Opaque watercolour on paper",
    category: "rajput",
    description: "A lyrical, softly coloured painting from the Pahari hill workshops, typically showing Krishna and Radha amid lush landscapes of monsoon clouds, flowering trees and flowing rivers.",
    historicalContext: "Kangra painting flourished under the patronage of hill-state rulers, developing a gentler, more naturalistic style than earlier Pahari work, often illustrating devotional poetry such as the Gita Govinda.",
    significance: "Kangra painting is celebrated for its poetic sensitivity and delicate naturalism, considered one of the most lyrical achievements of Pahari painting traditions.",
    interestingFact: "Kangra artists often belonged to family workshops passing techniques down for generations, a lineage some art historians can trace across several generations of painters.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Krishna%20and%20Radha%2C%20Kangra%20school%2C%20watercolor%20and%20gold%2C%20Tokyo%20National%20Museum.JPG?width=800",
    tags: "kangra pahari painting krishna radha rajput miniature"
  },
  {
    id: "bharat-mata",
    name: "Bharat Mata",
    period: "colonial",
    date: "1905 CE",
    location: "Painted in Kolkata — Victoria Memorial Hall, Kolkata",
    material: "Watercolour wash on paper",
    category: "colonial",
    description: "A four-armed female figure in saffron robes personifying India as a mother goddess, holding a book, sheaves of rice, a rosary and a piece of white cloth — symbolising learning, food, spirituality and clothing.",
    historicalContext: "Painted by Abanindranath Tagore during the Swadeshi movement protesting the 1905 partition of Bengal, the work used a deliberately Indian visual language as an act of artistic and political resistance.",
    significance: "Bharat Mata became one of the most powerful visual symbols of the Indian independence movement and marked the emergence of the nationalist Bengal School of art.",
    interestingFact: "The model for the figure is believed to have been Abanindranath Tagore's niece, though the painting was never intended as a literal portrait.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Bharat%20Mata%20by%20Abanindranath%20Tagore.jpg?width=800",
    tags: "bharat mata tagore bengal school nationalist painting swadeshi"
  },
  {
    id: "haripura-posters",
    name: "Haripura Posters",
    period: "colonial",
    date: "1938 CE",
    location: "Created for the Haripura Congress session, Gujarat",
    material: "Tempera on handmade paper",
    category: "colonial",
    description: "A series of bold, linear posters depicting rural Indian workers, craftspeople and musicians, commissioned to decorate the venue of the 1938 Indian National Congress session at Haripura.",
    historicalContext: "Mahatma Gandhi personally invited artist Nandalal Bose to design the artwork, asking for imagery rooted in village life rather than academic or European styles, reflecting the Congress's swadeshi ideals.",
    significance: "The Haripura Posters are celebrated for their confident, simplified linework influenced by Indian folk art, and remain a landmark linking modern Indian art to nationalist ideals.",
    interestingFact: "Nandalal Bose and his students produced over 400 posters for the event in just a few weeks, working at remarkable speed.",
    image: "",
    tags: "haripura nandalal bose bengal school nationalist poster"
  },
  {
    id: "three-girls",
    name: "Three Girls",
    period: "modern",
    date: "1935 CE",
    location: "Painted in India — National Gallery of Modern Art, New Delhi",
    material: "Oil on canvas",
    category: "modern",
    description: "A composition of three seated women in muted reds, browns and ochres, their solemn expressions and simplified forms marking a deliberate break from academic realism toward an Indian modernist idiom.",
    historicalContext: "Painted shortly after Amrita Sher-Gil moved from Paris to India, the work reflects her decision to turn away from European academic training and root her modernism in Indian subjects and colour.",
    significance: "Three Girls is considered a turning point in Sher-Gil's career and in Indian modern art, and helped lead to her election as the youngest-ever Associate of the Grand Salon in Paris.",
    interestingFact: "Amrita Sher-Gil is often called a pioneer of Indian modern art; in 1976 the Government of India declared her works National Art Treasures, restricting their export.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Amrita%20Sher-Gil%20Group%20of%20Three%20Girls.jpg?width=800",
    tags: "amrita sher-gil three girls modern painting oil canvas"
  },
  {
    id: "husain-horses",
    name: "M. F. Husain",
    period: "modern",
    date: "Mid-to-late 20th century",
    location: "Mumbai (Bombay) — Progressive Artists' Group",
    material: "Photograph of the artist — his paintings remain in copyright",
    category: "modern",
    description: "M. F. Husain's recurring motif of dynamic, galloping horses, rendered in bold, energetic brushstrokes, is one of the most recognisable signatures in Indian modern art. His actual paintings are still copyrighted, so shown here instead is a public-domain photograph of the artist himself.",
    historicalContext: "A founding member of the Progressive Artists' Group formed in Bombay in 1947, Husain rejected purely academic and colonial styles, developing an expressive, modern visual language rooted in Indian imagery.",
    significance: "Husain became one of India's most internationally recognised modern artists, and his horse paintings became a signature motif recognised worldwide as emblematic of Indian modernism.",
    interestingFact: "Husain painted barefoot throughout his life and produced an extraordinarily large body of work, reportedly numbering in the tens of thousands of paintings.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/MFHussain2.jpg?width=800",
    tags: "husain horses progressive artists group modern painting portrait"
  }
];

const facts = [
  "The Dancing Girl of Mohenjo-daro, cast in bronze around 2500 BCE, is one of the earliest known lost-wax bronze sculptures in the world.",
  "The Lion Capital of Ashoka, carved around 250 BCE, was adopted as the State Emblem of India in 1950.",
  "Indian miniature painting developed through many regional courtly traditions, from Mughal ateliers to the Rajput courts of Rajasthan and the Pahari hills.",
  "The Ajanta cave murals were painted using the fresco-secco technique — pigment applied to dry plaster — and lay forgotten for centuries before their rediscovery in 1819.",
  "Chola bronze sculptors used the lost-wax casting method, meaning every Nataraja bronze is unique — the mould is destroyed in the process.",
  "The Taj Mahal is estimated to have taken around 20,000 artisans over two decades to complete.",
  "Abanindranath Tagore's Bharat Mata (1905) turned a devotional image into a nationalist symbol during the Swadeshi movement.",
  "Amrita Sher-Gil's paintings were declared National Art Treasures by the Government of India in 1976, restricting their export from the country.",
  "The Konark Sun Temple was designed as a colossal stone chariot, complete with 24 carved wheels that double as working sundials.",
  "M. F. Husain, a founding member of the Progressive Artists' Group, painted barefoot throughout his career."
];

const locations = [
  { name: "Mohenjo-daro", x: 95, y: 130, tradition: "Indus Valley urban art & bronze casting", artifact: "Dancing Girl" },
  { name: "Sarnath", x: 235, y: 195, tradition: "Mauryan & Gupta Buddhist sculpture", artifact: "Lion Capital of Ashoka" },
  { name: "Khajuraho", x: 200, y: 235, tradition: "Medieval temple sculpture", artifact: "Khajuraho Temple Sculptures" },
  { name: "Agra", x: 178, y: 158, tradition: "Mughal architecture & court art", artifact: "Taj Mahal" },
  { name: "Rajasthan", x: 128, y: 175, tradition: "Rajput miniature painting", artifact: "Bani Thani" },
  { name: "Kolkata", x: 292, y: 250, tradition: "Bengal School nationalist art", artifact: "Bharat Mata" },
  { name: "Mumbai", x: 140, y: 320, tradition: "Modern & Progressive Artists' Group", artifact: "Husain's Horses" }
];

const filterLabels = {
  all: "All", indus: "Indus", mauryan: "Mauryan", gupta: "Gupta",
  medieval: "Medieval", mughal: "Mughal", rajput: "Rajput",
  colonial: "Colonial", modern: "Modern"
};

/* Note: imgFallback() is defined in a small inline <script> in
   index.html's <head>, not here — see the comment there for why. */

/* =========================================================
   3. NAVIGATION
   ========================================================= */

function initNavigation() {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
  });

  hamburger.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    hamburger.classList.toggle("open", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });
}

/* =========================================================
   4. TIMELINE
   ========================================================= */

let activePeriodId = periods[0].id;

function renderTimelineNodes() {
  const track = document.getElementById("timelineTrack");
  track.innerHTML = periods.map((p) => `
    <button class="timeline-node" data-period="${p.id}" role="tab" aria-selected="false">
      <span class="dot"></span>
      <span class="t-name">${p.name}</span>
      <span class="t-date">${p.date}</span>
    </button>
  `).join("");

  track.querySelectorAll(".timeline-node").forEach((node) => {
    node.addEventListener("click", () => selectPeriod(node.dataset.period, true));
  });
}

function selectPeriod(periodId, scrollToPanel) {
  activePeriodId = periodId;

  document.querySelectorAll(".timeline-node").forEach((node) => {
    const isActive = node.dataset.period === periodId;
    node.classList.toggle("active", isActive);
    node.setAttribute("aria-selected", String(isActive));
  });

  renderPeriodPanel(periodId);

  if (scrollToPanel) {
    document.getElementById("periodPanel").scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

function renderPeriodPanel(periodId) {
  const period = periods.find((p) => p.id === periodId);
  const panel = document.getElementById("periodPanel");
  if (!period) return;

  panel.innerHTML = `
    <div class="panel-left">
      <h3>${period.name}</h3>
      <p class="p-date">${period.date}</p>
      <p class="p-overview">${period.overview}</p>
      <button class="btn btn-primary p-cta" data-view-artifacts="${period.id}">View Artifacts</button>
    </div>
    <div class="panel-right">
      <h4>Key Characteristics</h4>
      <ul>${period.characteristics.map((c) => `<li>${c}</li>`).join("")}</ul>
      <h4>Important Sites</h4>
      <div class="p-sites">${period.sites.map((s) => `<span>${s}</span>`).join("")}</div>
    </div>
  `;

  panel.querySelector("[data-view-artifacts]").addEventListener("click", () => {
    setFilter(period.id);
    document.getElementById("artifacts").scrollIntoView({ behavior: "smooth" });
  });
}

/* =========================================================
   5. ARTIFACTS: RENDER, FILTER, SEARCH
   ========================================================= */

let currentFilter = "all";
let currentSearch = "";

function renderArtifacts(list) {
  const grid = document.getElementById("artifactsGrid");
  const noResults = document.getElementById("noResults");
  const resultsCount = document.getElementById("resultsCount");

  resultsCount.textContent = `Showing ${list.length} of ${artifacts.length} artifacts`;

  if (list.length === 0) {
    grid.innerHTML = "";
    noResults.hidden = false;
    return;
  }
  noResults.hidden = true;

  grid.innerHTML = list.map((a, i) => {
    const period = periods.find((p) => p.id === a.period);
    return `
      <article class="artifact-card" data-id="${a.id}" style="animation-delay:${Math.min(i * 0.05, 0.4)}s" tabindex="0" role="button" aria-label="View details for ${a.name}">
        <div class="media" data-letter="${a.name.charAt(0)}">
          <img src="${a.image}" alt="${a.name}" loading="lazy" onerror="imgFallback(this)">
        </div>
        <div class="card-body">
          <p class="card-period">${period ? period.name : ""}</p>
          <h3 class="card-name">${a.name}</h3>
          <p class="card-desc">${a.description}</p>
          <span class="card-link">Explore Artifact <span class="arrow">&rarr;</span></span>
        </div>
      </article>
    `;
  }).join("");

  grid.querySelectorAll(".artifact-card").forEach((card) => {
    card.addEventListener("click", () => openModal(card.dataset.id));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(card.dataset.id);
      }
    });
  });
}

function applyFilters() {
  const term = currentSearch.trim().toLowerCase();
  const filtered = artifacts.filter((a) => {
    const matchesFilter = currentFilter === "all" || a.category === currentFilter;
    if (!matchesFilter) return false;
    if (!term) return true;
    const haystack = `${a.name} ${a.location} ${a.material} ${a.description} ${a.tags}`.toLowerCase();
    return haystack.includes(term);
  });
  renderArtifacts(filtered);
}

function setFilter(filterId) {
  currentFilter = filterId;
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.filter === filterId);
  });
  applyFilters();
}

function initFilters() {
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => setFilter(btn.dataset.filter));
  });

  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", (e) => {
    currentSearch = e.target.value;
    applyFilters();
  });
}

/* =========================================================
   6. ARTIFACT MODAL / VIRTUAL VIEWER
   ========================================================= */

let viewerZoom = 1;
let viewerRotation = 0;

function openModal(artifactId) {
  const artifact = artifacts.find((a) => a.id === artifactId);
  if (!artifact) return;
  const period = periods.find((p) => p.id === artifact.period);

  document.getElementById("modalTitle").textContent = artifact.name;
  document.getElementById("modalPeriod").textContent = period ? `${period.name} · ${artifact.date}` : artifact.date;
  document.getElementById("modalDate").textContent = artifact.date;
  document.getElementById("modalLocation").textContent = artifact.location;
  document.getElementById("modalMaterial").textContent = artifact.material;
  document.getElementById("modalDescription").textContent = artifact.description;
  document.getElementById("modalContext").textContent = artifact.historicalContext;
  document.getElementById("modalSignificance").textContent = artifact.significance;
  document.getElementById("modalFact").textContent = artifact.interestingFact;

  const mediaWrap = document.getElementById("modalMediaWrap");
  const modalImage = document.getElementById("modalImage");
  mediaWrap.classList.remove("img-error");
  mediaWrap.dataset.letter = artifact.name.charAt(0);
  modalImage.src = artifact.image || "";
  modalImage.alt = artifact.name;
  if (!artifact.image) mediaWrap.classList.add("img-error");

  resetViewer();

  const overlay = document.getElementById("modalOverlay");
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
  document.getElementById("modalClose").focus();
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

function applyViewerTransform() {
  document.getElementById("modalMediaWrap").style.transform =
    `scale(${viewerZoom}) rotate(${viewerRotation}deg)`;
}

function resetViewer() {
  viewerZoom = 1;
  viewerRotation = 0;
  applyViewerTransform();
}

function initModal() {
  document.getElementById("modalClose").addEventListener("click", closeModal);

  document.getElementById("modalOverlay").addEventListener("click", (e) => {
    if (e.target.id === "modalOverlay") closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && document.getElementById("modalOverlay").classList.contains("open")) {
      closeModal();
    }
  });

  document.getElementById("zoomInBtn").addEventListener("click", () => {
    viewerZoom = Math.min(viewerZoom + 0.25, 2.5);
    applyViewerTransform();
  });

  document.getElementById("zoomOutBtn").addEventListener("click", () => {
    viewerZoom = Math.max(viewerZoom - 0.25, 0.5);
    applyViewerTransform();
  });

  document.getElementById("rotateBtn").addEventListener("click", () => {
    viewerRotation += 45;
    applyViewerTransform();
  });

  document.getElementById("resetBtn").addEventListener("click", resetViewer);
}

/* =========================================================
   7. MAP / EXPLORE
   ========================================================= */

function renderMapMarkers() {
  const group = document.getElementById("mapMarkers");
  group.innerHTML = locations.map((loc, i) => `
    <g class="map-marker" data-index="${i}" tabindex="0" role="button" aria-label="${loc.name}">
      <circle cx="${loc.x}" cy="${loc.y}" r="7"></circle>
      <text x="${loc.x + 11}" y="${loc.y + 4}">${loc.name}</text>
    </g>
  `).join("");

  group.querySelectorAll(".map-marker").forEach((marker) => {
    marker.addEventListener("click", () => showMapTooltip(Number(marker.dataset.index)));
    marker.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        showMapTooltip(Number(marker.dataset.index));
      }
    });
  });
}

function showMapTooltip(index) {
  const loc = locations[index];
  const tooltip = document.getElementById("mapTooltip");

  document.querySelectorAll(".map-marker").forEach((m, i) => {
    m.classList.toggle("active", i === index);
  });

  tooltip.innerHTML = `
    <span class="tt-close" role="button" aria-label="Close">&times;</span>
    <h4>${loc.name}</h4>
    <p><strong>Tradition:</strong> ${loc.tradition}</p>
    <p><strong>Key artifact:</strong> ${loc.artifact}</p>
  `;
  tooltip.hidden = false;
  tooltip.querySelector(".tt-close").addEventListener("click", () => {
    tooltip.hidden = true;
    document.querySelectorAll(".map-marker").forEach((m) => m.classList.remove("active"));
  });
}

/* =========================================================
   8. DID YOU KNOW
   ========================================================= */

let factIndex = 0;

function showFact(index) {
  const factText = document.getElementById("factText");
  factText.style.opacity = 0;
  setTimeout(() => {
    factText.textContent = facts[index];
    factText.style.opacity = 1;
  }, 200);
}

function initFacts() {
  factIndex = Math.floor(Math.random() * facts.length);
  showFact(factIndex);

  document.getElementById("nextFactBtn").addEventListener("click", () => {
    factIndex = (factIndex + 1) % facts.length;
    showFact(factIndex);
  });
}

/* =========================================================
   9. STAT COUNTER ANIMATION
   ========================================================= */

function animateStat(el) {
  const target = Number(el.dataset.target);
  const suffix = el.dataset.suffix || "";
  const duration = 1400;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const value = Math.floor(progress * target);
    el.textContent = value.toLocaleString() + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* =========================================================
   10. SCROLL REVEAL + BACK TO TOP
   ========================================================= */

function initScrollEffects() {
  const revealEls = document.querySelectorAll(".reveal");
  const statEls = document.querySelectorAll(".stat-number");
  const animatedStats = new WeakSet();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        if (entry.target.classList.contains("stat-card") && !animatedStats.has(entry.target)) {
          const numEl = entry.target.querySelector(".stat-number");
          if (numEl) {
            animatedStats.add(entry.target);
            animateStat(numEl);
          }
        }
      }
    });
  }, { threshold: 0.2 });

  revealEls.forEach((el) => observer.observe(el));

  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("show", window.scrollY > 600);
  });
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* =========================================================
   11. INIT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  renderTimelineNodes();
  selectPeriod(activePeriodId, false);
  renderArtifacts(artifacts);
  initFilters();
  initModal();
  renderMapMarkers();
  initFacts();
  initScrollEffects();
});
