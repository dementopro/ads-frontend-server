export const Pricing = [
  {
    plan: 'Startups Plan',
    icon: 'plan1.svg',
    tiers: [
      {
        title: 'ANALYTICS TIER 1',
        price: '$39',
      },
      {
        title: 'SERVICES TIER 2',
        price: '$69',
      },
      {
        title: 'SERVICES TIER 3',
        price: '$99',
      },
    ],
    features: [
      ['Credits', 10, 20, 50],
      ['Brand', 1, 2, 2],
      ['User', 1, 2, 2],
      ['Platforms integration', 1, 2, 2],
      ['Model finetuning', 1, 2, 2],
      ['Custom Pricing Model', '-', '-', '-'],
      ['Planning', true, true, true],
      ['Text to copies', true, true, true],
      ['Text to image', true, true, true],
      ['Social insights', true, true, true],
      ['Image to image', false, false, false],
      ['Image to 3D model', false, false, false],
      ['Image to video', false, false, false],
      ['Analytics', false, false, false],
    ]
  },
  {
    plan: 'Professional Plan',
    icon: 'plan2.svg',
    tiers: [
      {
        title: 'ANALYTICS TIER 1',
        price: '$199',
      },
      {
        title: 'SERVICES TIER 2',
        price: '$279',
      },
      {
        title: 'SERVICES TIER 3',
        price: '$399',
      },
    ],
    features: [
      ['Credits', 80, 100, 200],
      ['Brand', 3, 4, 8],
      ['User', 3, 4, 5],
      ['Platforms integration', 'Unlimited', 'Unlimited', 'Unlimited'],
      ['Model finetuning', 2, 3, 4],
      ['Custom Pricing Model', '-', '-', 'Available'],
      ['Planning', true, true, true],
      ['Text to copies', true, true, true],
      ['Text to image', true, true, true],
      ['Social insights', true, true, true],
      ['Image to image', true, true, true],
      ['Image to 3D model', true, true, true],
      ['Image to video', false, false, false],
      ['Analytics', false, false, false],
    ]
  },
  {
    plan: 'Agencies Plan',
    icon: 'plan3.svg',
    tiers: [
      {
        title: 'ANALYTICS TIER 1',
        price: '$599',
      },
      {
        title: 'SERVICES TIER 2',
        price: '$899',
      },
      {
        title: 'SERVICES TIER 3',
        price: '$1199',
      },
    ],
    features: [
      ['Credits', 500, 800, 1000],
      ['Brand', 20, 50, 80],
      ['User', 8, 10, 20],
      ['Platforms integration', 'Unlimited', 'Unlimited', 'Unlimited'],
      ['Model finetuning', 7, 10, 20],
      ['Custom Pricing Model', '-', '-', 'Available'],
      ['Planning', true, true, true],
      ['Text to copies', true, true, true],
      ['Text to image', true, true, true],
      ['Social insights', true, true, true],
      ['Image to image', true, true, true],
      ['Image to 3D model', true, true, true],
      ['Image to video', true, true, true],
      ['Analytics', true, true, true],
    ]
  }
] 