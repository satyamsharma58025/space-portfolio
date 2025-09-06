import { TimelineEra } from '../types';

export const timelineData: TimelineEra[] = [
  {
    id: 'transistor-era',
    year: '1947',
    title: 'Birth of the Transistor',
    description: 'Invention of the point-contact transistor at Bell Labs marks the birth of modern electronics',
    keyInnovation: 'First working transistor demonstrated by John Bardeen, Walter Brattain, and William Shockley',
    companies: [
      {
        id: 'bell-labs',
        name: 'Bell Labs',
        logo: '/companies/bell-labs.png',
        founded: '1925',
        marketCap: 0,
        keyProducts: [
          {
            name: 'Point-Contact Transistor',
            description: 'First working transistor'
          }
        ],
        indiaPresence: {
          employees: 0,
          locations: [],
          investments: 0,
          facilities: []
        }
      }
    ],
    marketImpact: {
      economicValue: '$0 (Pre-commercial)',
      jobsCreated: 100,
      globalMarketShare: 100,
      industryImpact: [
        'Enabled miniaturization of electronics',
        'Replaced vacuum tubes',
        'Launched semiconductor industry'
      ]
    },
    technicalSpecs: [
      {
        metric: 'Switching Speed',
        value: '10kHz',
        description: 'First solid-state switch'
      },
      {
        metric: 'Power Consumption',
        value: '50mW',
        description: 'Much more efficient than vacuum tubes'
      }
    ]
  },
  {
    id: 'ic-era',
    year: '1958',
    title: 'Integrated Circuit Revolution',
    description: 'Jack Kilby at Texas Instruments demonstrates the first integrated circuit',
    keyInnovation: 'Multiple transistors on a single semiconductor substrate',
    companies: [
      {
        id: 'ti',
        name: 'Texas Instruments',
        logo: '/companies/ti.png',
        founded: '1930',
        marketCap: 150000000000,
        keyProducts: [
          {
            name: 'First IC',
            description: 'Initial germanium-based integrated circuit'
          }
        ],
        indiaPresence: {
          employees: 3500,
          locations: ['Bangalore', 'Chennai'],
          investments: 100000000,
          facilities: [
            {
              name: 'Bangalore Design Center',
              type: 'R&D',
              location: 'Bangalore'
            }
          ]
        }
      }
    ],
    marketImpact: {
      economicValue: '$1M',
      jobsCreated: 1000,
      globalMarketShare: 100,
      industryImpact: [
        'Enabled mass production of electronics',
        'Started microelectronics industry',
        'Led to Moore\'s Law'
      ]
    },
    technicalSpecs: [
      {
        metric: 'Integration Density',
        value: '2 components',
        description: 'First multi-component semiconductor'
      },
      {
        metric: 'Manufacturing Cost',
        value: '~$100/component',
        description: 'Enabled mass production'
      }
    ]
  },
  {
    id: 'microprocessor-era',
    year: '1971',
    title: 'The First Microprocessor',
    description: 'Intel introduces the 4004, the first commercial microprocessor',
    keyInnovation: 'Complete CPU on a single chip',
    companies: [
      {
        id: 'intel',
        name: 'Intel Corporation',
        logo: '/companies/intel.png',
        founded: '1968',
        marketCap: 180000000000,
        keyProducts: [
          {
            name: 'Intel 4004',
            description: 'First commercial microprocessor'
          }
        ],
        indiaPresence: {
          employees: 13000,
          locations: ['Bangalore', 'Hyderabad'],
          investments: 5000000000,
          facilities: [
            {
              name: 'Bangalore Development Center',
              type: 'R&D',
              location: 'Bangalore'
            }
          ]
        }
      }
    ],
    marketImpact: {
      economicValue: '$10M',
      jobsCreated: 10000,
      globalMarketShare: 100,
      industryImpact: [
        'Launched personal computing',
        'Enabled programmable electronics',
        'Created microprocessor industry'
      ]
    },
    technicalSpecs: [
      {
        metric: 'Clock Speed',
        value: '750 kHz',
        description: 'First programmable processor'
      },
      {
        metric: 'Transistors',
        value: '2300',
        description: 'Complex logic on single chip'
      }
    ]
  },
  {
    id: 'pc-era',
    year: '1981',
    title: 'The PC Revolution',
    description: 'IBM PC launches with Intel 8088, standardizing the personal computer industry',
    keyInnovation: 'Standardized computer architecture and ecosystem',
    companies: [
      {
        id: 'ibm',
        name: 'IBM',
        logo: '/companies/ibm.png',
        founded: '1911',
        marketCap: 200000000000,
        keyProducts: [
          {
            name: 'IBM PC',
            description: 'First standardized PC platform'
          }
        ],
        indiaPresence: {
          employees: 150000,
          locations: ['Bangalore', 'Hyderabad', 'Pune'],
          investments: 10000000000,
          facilities: [
            {
              name: 'Bangalore Technology Center',
              type: 'R&D',
              location: 'Bangalore'
            }
          ]
        }
      }
    ],
    marketImpact: {
      economicValue: '$100M',
      jobsCreated: 100000,
      globalMarketShare: 100,
      industryImpact: [
        'Created PC standard',
        'Launched software industry',
        'Democratized computing'
      ]
    },
    technicalSpecs: [
      {
        metric: 'Clock Speed',
        value: '4.77 MHz',
        description: 'Standard PC processor speed'
      },
      {
        metric: 'Memory',
        value: '16 KB',
        description: 'Base system memory'
      }
    ]
  }
];
