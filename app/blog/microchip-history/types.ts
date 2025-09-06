export interface TimelineEra {
  id: string;
  year: string;
  title: string;
  description: string;
  keyInnovation: string;
  companies: Company[];
  marketImpact: MarketImpact;
  technicalSpecs: TechnicalSpec[];
}

export interface Company {
  id: string;
  name: string;
  logo: string;
  founded: string;
  marketCap: number;
  keyProducts: Array<{
    name: string;
    description: string;
  }>;
  indiaPresence?: {
    employees: number;
    locations: string[];
    investments: number;
    facilities: Array<{
      name: string;
      type: string;
      location: string;
    }>;
  };
}

export interface MarketImpact {
  economicValue: string;
  jobsCreated: number;
  globalMarketShare: number;
  industryImpact: string[];
}

export interface TechnicalSpec {
  metric: string;
  value: string;
  description?: string;
}

export interface MicrochipData {
  eras: TimelineEra[];
  metadata: {
    lastUpdated: string;
    version: string;
  };
}

export interface MicrochipEra {
  year: number;
  name: string;
  description: string;
  innovations?: string[];
  companies?: Company[];
  impact?: string;
  technologies?: string[];
}

export interface Company {
  id: string;
  name: string;
  logo: string;
  founded: string;
  marketCap: number;
  keyProducts: Array<{
    name: string;
    description: string;
  }>;
  indiaPresence?: {
    employees: number;
    locations: string[];
    investments: number;
    facilities: Array<{
      name: string;
      type: string;
      location: string;
    }>;
  };
}

// Analytics Types
export interface MicrochipAnalyticsEvent {
  era_name: string;
  era_year: number;
  event_category?: string;
  event_label?: string;
}

// Error Types
export class MicrochipDataError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'MicrochipDataError';
  }
}

export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

// Component Props Types
export interface TimelineContainerProps {
  active: boolean;
}

export interface CompanyShowcaseProps {
  active: boolean;
}

export interface IndiaProgressProps {
  active: boolean;
}

export interface ChipEvolutionVizProps {
  active: boolean;
}

// Schema Types
export const EraSchema = {
  year: 'number',
  name: 'string',
  description: 'string',
  innovations: 'string[]?',
  companies: 'Company[]?',
  impact: 'string?',
  technologies: 'string[]?'
} as const;

export const CompanySchema = {
  name: 'string',
  contribution: 'string',
  yearsActive: 'string?',
  location: 'string?',
  website: 'string?'
} as const;

// India Data Types
export interface IndiaPosition {
  currentMarketShare: number;
  globalRanking: number;
  governmentInitiatives: Initiative[];
  privateInvestments: Investment[];
  skillDevelopment: SkillProgram[];
  manufacturingHubs: ManufacturingHub[];
  designCenters: DesignCenter[];
  startupEcosystem: Startup[];
  challenges: Challenge[];
  opportunities: Opportunity[];
  projections2030: Projection[];
}

export interface Initiative {
  name: string;
  budget: string;
  timeline: string;
  target: string;
  components: string[];
  approvedProjects: ApprovedProject[];
}

export interface ApprovedProject {
  company: string;
  investment: string;
  location: string;
  capacity?: string;
  product?: string;
  jobs: number;
  status: string;
}

export interface Investment {
  company: string;
  amount: number;
  year: number;
  sector: string;
  impact: string;
}

export interface SkillProgram {
  name: string;
  partners: string[];
  target: number;
  duration: string;
  skills: string[];
}

export interface ManufacturingHub {
  location: string;
  area: string;
  investment: number;
  capacity: string;
  jobs: number;
  status: string;
}

export interface DesignCenter {
  company: string;
  location: string;
  employees: number;
  focus: string[];
  innovations: string[];
  established: number;
}

export interface Startup {
  name: string;
  focus: string;
  funding?: string;
  products: string[];
  customers?: string[];
}

export interface Challenge {
  category: string;
  description: string;
  solutions: string[];
  timeline: string;
}

export interface Opportunity {
  sector: string;
  potential: string;
  requirements: string[];
  timeline: string;
}

export interface Projection {
  metric: string;
  value2025: number;
  value2030: number;
  cagr: number;
}
