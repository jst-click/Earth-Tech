export type ServiceItem = {
  id: string
  title: string
  category: 'revenue' | 'survey'
  description: string
  overview: string
  features: string[]
  process: string[]
  applications: string[]
}

export const REVENUE_SERVICES: ServiceItem[] = [
  {
    id: 'adbastu',
    title: 'Adbastu',
    category: 'revenue',
    description:
      'Revenue land record correction and Adbastu survey services for accurate property documentation and legal compliance.',
    overview:
      'Adbastu services help correct and update revenue land records to reflect actual ground positions. Our team works with revenue authorities to ensure your property records match surveyed boundaries, preventing disputes and enabling smooth transactions.',
    features: [
      'Revenue record verification and correction',
      'Boundary reconciliation with ground survey',
      'Documentation for mutation and registration',
      'Coordination with tahsildar and revenue offices',
    ],
    process: [
      'Site inspection and boundary identification',
      'Survey measurement and sketch preparation',
      'Submission to revenue department',
      'Follow-up until record correction is approved',
    ],
    applications: [
      'Property sale and purchase',
      'Land partition among family members',
      'Resolving boundary disputes',
      'Updating outdated revenue sketches',
    ],
  },
  {
    id: '11e-sketch',
    title: '11E Sketch',
    category: 'revenue',
    description:
      'Preparation of 11E sketch drawings as per revenue department requirements for land subdivision and mutation.',
    overview:
      '11E Sketch is a mandatory revenue drawing required for land subdivision, amalgamation, and mutation processes. Earth Tech Survey prepares accurate 11E sketches compliant with Karnataka revenue department standards.',
    features: [
      'Accurate plot dimension and area calculation',
      'Compliance with revenue sketch norms',
      'Integration with survey settlement records',
      'Fast turnaround for approval submissions',
    ],
    process: [
      'Collect existing revenue documents (RTC, sketch)',
      'Conduct field survey of the property',
      'Prepare 11E sketch with dimensions and bearings',
      'Submit for revenue officer approval',
    ],
    applications: [
      'Land subdivision (podi)',
      'Plot amalgamation',
      'Building plan approval support',
      'Khata transfer and mutation',
    ],
  },
  {
    id: 'tatkal-podi',
    title: 'Tatkal Podi',
    category: 'revenue',
    description:
      'Fast-track Tatkal Podi services for expedited land division and revenue record updates.',
    overview:
      'Tatkal Podi enables expedited division of land parcels under revenue procedures. We handle the complete survey, sketch, and documentation workflow so your land division is processed without unnecessary delays.',
    features: [
      'Priority processing support',
      'Complete survey and podi sketch package',
      'Parent and subdivided plot documentation',
      'Guidance through revenue approval stages',
    ],
    process: [
      'Verify eligibility and existing land records',
      'Survey and mark division boundaries on site',
      'Prepare Tatkal Podi application documents',
      'Coordinate with revenue office for approval',
    ],
    applications: [
      'Family land division',
      'Selling a portion of land',
      'Creating separate plots for development',
      'Inheritance and settlement cases',
    ],
  },
  {
    id: 'alination',
    title: 'Alination',
    category: 'revenue',
    description:
      'Alignment and alination surveys to establish correct boundaries and resolve land boundary disputes.',
    overview:
      'Alination (alignment) surveys establish the correct position of boundaries relative to revenue records and adjacent properties. This service is essential when boundaries are disputed or encroachments need to be resolved.',
    features: [
      'Boundary alignment with revenue pillars',
      'Encroachment identification and mapping',
      'Settlement-compatible survey reports',
      'Expert testimony support when required',
    ],
    process: [
      'Review revenue records and adjacent surveys',
      'Field survey with total station / DGPS',
      'Prepare alignment sketch and report',
      'Present findings for revenue or legal resolution',
    ],
    applications: [
      'Boundary dispute resolution',
      'Encroachment removal cases',
      'Road widening and acquisition',
      'Court-directed alignment surveys',
    ],
  },
]

export const SURVEY_SERVICES: ServiceItem[] = [
  {
    id: 'topographical',
    title: 'Topographical Surveys',
    category: 'survey',
    description:
      'Detailed survey capturing contours and features of the land for planning and design purposes.',
    overview:
      'Topographical surveys capture the natural and man-made features of a site including contours, elevations, trees, buildings, utilities, and boundaries. Essential for architects, engineers, and planners before design begins.',
    features: [
      'Contour mapping at required intervals',
      'Feature survey of structures and utilities',
      'Digital terrain models (DTM)',
      'CAD deliverables for design teams',
    ],
    process: [
      'Establish survey control points',
      'Field data collection with total station / GPS',
      'Process data and generate contours',
      'Deliver drawings in AutoCAD format',
    ],
    applications: [
      'Building and layout design',
      'Infrastructure planning',
      'Drainage and grading design',
      'Environmental and feasibility studies',
    ],
  },
  {
    id: 'marking-staking',
    title: 'Marking / Staking Out Works',
    category: 'survey',
    description:
      'Precise marking and staking out of construction layouts, boundaries, and infrastructure alignments.',
    overview:
      'Marking and staking out transfers approved plans from paper to the ground. Our surveyors set out building corners, road alignments, pipeline routes, and boundary pegs with millimetre-level accuracy.',
    features: [
      'Building corner and grid staking',
      'Road and pipeline alignment set-out',
      'Boundary pillar fixing',
      'As-built verification surveys',
    ],
    process: [
      'Review approved drawings and coordinates',
      'Transfer coordinates to site control',
      'Stake out points with pegs and paint marks',
      'Provide staking report and coordinates',
    ],
    applications: [
      'Residential and commercial construction',
      'Road and highway projects',
      'Industrial plant layout',
      'Utility pipeline installation',
    ],
  },
  {
    id: 'measured-drawings',
    title: 'Measured Drawings',
    category: 'survey',
    description:
      'Accurate measured drawings for buildings, plots, and structures for approval and construction.',
    overview:
      'Measured drawings document existing buildings and sites with precise dimensions for BBMP/BDA approval, renovation, or legal documentation. We survey every wall, opening, and level to produce approval-ready plans.',
    features: [
      'Floor-wise dimensioned plans',
      'Section and elevation drawings',
      'Area statement and FSI calculations',
      'BBMP / BDA compliant formats',
    ],
    process: [
      'Site visit and dimensional survey',
      'Prepare floor plans and elevations',
      'Calculate built-up and setback areas',
      'Deliver drawings for authority submission',
    ],
    applications: [
      'Building plan sanction',
      'Renovation and addition works',
      'Property documentation',
      'Regularisation applications',
    ],
  },
  {
    id: 'geotechnical',
    title: 'Geotechnical Investigation',
    category: 'survey',
    description:
      'Soil, rock, and groundwater analysis to ensure safe and effective construction planning.',
    overview:
      'Geotechnical investigation determines soil bearing capacity, groundwater levels, and foundation suitability. Our team conducts boreholes, SPT tests, and laboratory analysis for safe structural design.',
    features: [
      'Borehole drilling and soil sampling',
      'Standard Penetration Test (SPT)',
      'Laboratory soil testing',
      'Foundation recommendation reports',
    ],
    process: [
      'Site reconnaissance and test plan',
      'Drill boreholes at specified locations',
      'Conduct field and lab tests',
      'Prepare geotechnical investigation report',
    ],
    applications: [
      'High-rise and commercial buildings',
      'Bridge and infrastructure foundations',
      'Industrial structures',
      'Slope stability assessment',
    ],
  },
  {
    id: 'dgps',
    title: 'DGPS Surveys',
    category: 'survey',
    description:
      'High-accuracy survey using Differential GPS technology for precise location mapping.',
    overview:
      'DGPS (Differential GPS) surveys provide centimetre-level positioning for large projects, control networks, and mapping. Ideal when conventional surveying needs higher accuracy over extended areas.',
    features: [
      'Centimetre-level horizontal accuracy',
      'Control network establishment',
      'Coordinate transformation to local systems',
      'Integration with GIS databases',
    ],
    process: [
      'Plan control point network',
      'Observe with dual-frequency GPS receivers',
      'Post-process with differential corrections',
      'Deliver coordinates and accuracy report',
    ],
    applications: [
      'Large infrastructure corridors',
      'Utility mapping',
      'Mining and quarry surveys',
      'National grid referencing',
    ],
  },
  {
    id: 'cadastral',
    title: 'Cadastral Mapping',
    category: 'survey',
    description:
      'Cadastral mapping for property boundaries, land records, and revenue documentation.',
    overview:
      'Cadastral mapping creates accurate maps of land parcels linked to ownership and revenue records. Used for urban planning, land administration, and systematic land record modernization.',
    features: [
      'Parcel boundary delineation',
      'Attribute linking to land records',
      'GIS-ready cadastral layers',
      'Integration with revenue databases',
    ],
    process: [
      'Collect existing cadastral and revenue data',
      'Field survey of parcel boundaries',
      'Digitize and attribute parcels in GIS',
      'Quality check and deliver map products',
    ],
    applications: [
      'Urban cadastral modernization',
      'Smart city mapping',
      'Land record digitization',
      'Municipal property tax mapping',
    ],
  },
  {
    id: 'lidar',
    title: 'Lidar Surveys',
    category: 'survey',
    description:
      'Laser scanning technology to capture precise 3D measurements of land and structures.',
    overview:
      'LiDAR (Light Detection and Ranging) captures millions of 3D points to model terrain, buildings, vegetation, and utilities. Delivers highly detailed point clouds for engineering and planning applications.',
    features: [
      'Terrestrial and aerial LiDAR options',
      'High-density 3D point clouds',
      'DTM, DSM, and contour extraction',
      '3D building and asset modelling',
    ],
    process: [
      'Define survey area and accuracy requirements',
      'Acquire LiDAR data (ground or aerial)',
      'Classify points and filter noise',
      'Deliver models, contours, and reports',
    ],
    applications: [
      'Transmission line corridor mapping',
      'Urban 3D modelling',
      'Forest and terrain analysis',
      'Heritage building documentation',
    ],
  },
  {
    id: 'alignment',
    title: 'Alignment Surveys',
    category: 'survey',
    description:
      'Alignment surveys for roads, pipelines, railways, and linear infrastructure projects.',
    overview:
      'Alignment surveys define the horizontal and vertical geometry of linear projects such as roads, railways, pipelines, and canals. We provide chainage, offset, and gradient data for design and construction.',
    features: [
      'Horizontal alignment and curve data',
      'Vertical profile and grade calculations',
      'Cross-section surveys at intervals',
      'Set-out data for construction machines',
    ],
    process: [
      'Study approved alignment drawings',
      'Survey centre line and ground levels',
      'Compute chainages, offsets, and grades',
      'Stake alignment and deliver reports',
    ],
    applications: [
      'Highway and ring road projects',
      'Water and sewer pipelines',
      'Railway track alignment',
      'Canal and irrigation channels',
    ],
  },
  {
    id: 'quantity',
    title: 'Quantity Surveying',
    category: 'survey',
    description:
      'Managing project costs, estimates, and quantities of materials for construction projects.',
    overview:
      'Quantity surveying provides accurate measurement of work items, material quantities, and cost estimates for construction projects. Helps owners and contractors control budgets and tender competitively.',
    features: [
      'Bill of quantities preparation',
      'Rate analysis and cost estimation',
      'Variation and interim payment certificates',
      'Tender document support',
    ],
    process: [
      'Review drawings and specifications',
      'Measure quantities from plans',
      'Prepare BOQ with unit rates',
      'Support during tender and construction',
    ],
    applications: [
      'Building construction tenders',
      'Infrastructure BOQ preparation',
      'Contractor payment certification',
      'Project cost control',
    ],
  },
]

export const ALL_SERVICES = [...REVENUE_SERVICES, ...SURVEY_SERVICES]

export const SERVICE_MENU = [
  {
    label: 'REVENUE SERVICES',
    services: REVENUE_SERVICES,
  },
  {
    label: 'SURVEYING SERVICES',
    services: SURVEY_SERVICES,
  },
] as const

export function getServiceById(id: string): ServiceItem | undefined {
  return ALL_SERVICES.find((s) => s.id === id)
}

export function getServicePath(id: string): string {
  return `/services/${id}`
}

export const WHY_US_ITEMS = [
  {
    title: 'Topographical Survey',
    description:
      'A detailed survey capturing the contours and features of the land for planning and design purposes.',
  },
  {
    title: 'DGPS Survey',
    description:
      'High-accuracy survey using Differential GPS technology for precise location mapping.',
  },
  {
    title: 'Geotechnical Investigation',
    description:
      'Analyzes soil, rock, and groundwater conditions to ensure safe and effective construction planning.',
  },
  {
    title: 'Lidar Survey',
    description:
      'Laser scanning technology to capture precise 3D measurements of land and structures.',
  },
  {
    title: 'Quantity Surveying',
    description:
      'Managing project costs, estimates, and quantities of materials for construction projects.',
  },
  {
    title: 'Revenue Services',
    description:
      'Complete revenue land services including Adbastu, 11E Sketch, Tatkal Podi, and Alination.',
  },
]
