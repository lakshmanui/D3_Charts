

export const lineChart = {
  'data': [
    {
      'name': 'lineChart',
      'values': [
        { 'x': '15 Q1', 'y': 23.7 },
        { 'x': '15 Q2', 'y': 38.1 },
        { 'x': '15 Q3', 'y': 41.3 },
        { 'x': '15 Q4', 'y': 31.6 },
        { 'x': '16 Q1', 'y': 41.3 },
        { 'x': '16 Q2', 'y': 51.4 },
        { 'x': '16 Q3', 'y': 41.5 },
        { 'x': '16 Q4', 'y': 27.3 },
        { 'x': '17 Q1', 'y': 40.7 },
        { 'x': '17 Q2', 'y': 49.6 }
      ],
      'maxNumber': 51.4,
      'minNumber': 23.7,
    }
  ]
};
export const barData = {
  'data': [
    {
      'name': 'barChart',
      'values': [
        { 'x': '2015', 'y': '20000' },
        { 'x': '2016', 'y': '10000' },
        { 'x': '2017', 'y': '30000' },
        { 'x': '2018', 'y': '50000' }
      ]
    }
  ],
};

export const donutData = {
  'data': [
    {
      'name': 'donutChart',
      'values': [
        { 'c': '<5', 'y': 2704659 },
        { 'c': '5-13', 'y': 4499890 },
        { 'c': '14-17', 'y': 2159981 },
        { 'c': '18-24', 'y': 3853788 },
        { 'c': '25-44', 'y': 14106543 },
        { 'c': '45-64', 'y': 8819342 },
        { 'c': '≥65', 'y': 612463 }
      ]
    }
  ],
};
export const multiLineChartData = [
  {
    'id': 'New York',
    'values': [
      { 'date': new Date('2011-10-01'), 'temperature': 63.4 },
      { 'date': new Date('2011-10-02'), 'temperature': 58.0 },
      { 'date': new Date('2011-10-03'), 'temperature': 53.3 },
      { 'date': new Date('2011-10-04'), 'temperature': 55.7 },
      { 'date': new Date('2011-10-05'), 'temperature': 64.2 },
      { 'date': new Date('2011-10-06'), 'temperature': 58.8 },
      { 'date': new Date('2011-10-07'), 'temperature': 57.9 }
    ]
  },
  {
    'id': 'San Francisco',
    'values': [
      { 'date': new Date('2011-10-01'), 'temperature': 62.7 },
      { 'date': new Date('2011-10-02'), 'temperature': 59.9 },
      { 'date': new Date('2011-10-03'), 'temperature': 59.1 },
      { 'date': new Date('2011-10-04'), 'temperature': 58.8 },
      { 'date': new Date('2011-10-05'), 'temperature': 58.7 },
      { 'date': new Date('2011-10-06'), 'temperature': 57.0 },
      { 'date': new Date('2011-10-07'), 'temperature': 56.7 }

    ]
  }
];

// export const multiLineChartData = {
//     'data': [
//         {
//             'name': 'multiLineChart',
//             'values': [
//                 { 'x': 0, 'y': 28, 'c': 0 }, { 'x': 0, 'y': 20, 'c': 1 },
//                 { 'x': 1, 'y': 43, 'c': 0 }, { 'x': 1, 'y': 35, 'c': 1 },
//                 { 'x': 2, 'y': 81, 'c': 0 }, { 'x': 2, 'y': 10, 'c': 1 },
//                 { 'x': 3, 'y': 19, 'c': 0 }, { 'x': 3, 'y': 15, 'c': 1 },
//                 { 'x': 4, 'y': 52, 'c': 0 }, { 'x': 4, 'y': 48, 'c': 1 },
//                 { 'x': 5, 'y': 24, 'c': 0 }, { 'x': 5, 'y': 28, 'c': 1 },
//                 { 'x': 6, 'y': 87, 'c': 0 }, { 'x': 6, 'y': 66, 'c': 1 },
//                 { 'x': 7, 'y': 17, 'c': 0 }, { 'x': 7, 'y': 27, 'c': 1 },
//                 { 'x': 8, 'y': 68, 'c': 0 }, { 'x': 8, 'y': 16, 'c': 1 },
//                 { 'x': 9, 'y': 49, 'c': 0 }, { 'x': 9, 'y': 25, 'c': 1 }
//             ]
//         }
//     ]
// };

export const stackedBarChartData = {
  'data': [
    {
      'titles': ['2014', '2015', '2016', '2017', '2018'],
      'name': 'stackedBarChart',
      'values': [
        { 'x': 50, 'y': 28, 'c': 10, },
        { 'x': 10, 'y': 43, 'c': 12, },
        { 'x': 44, 'y': 81, 'c': 8, },
        { 'x': 23, 'y': 19, 'c': 46, },
        { 'x': 56, 'y': 52, 'c': 57, },
      ]
    },
  ],
};
export const groupedBarChartData = {
  'data': [
    {
      'titles': ['2014', '2015', '2016', '2017', '2018'],
      'name': 'groupBarChart',
      'values': [
        { 'x': 50, 'y': 28, 'c': 10, },
        { 'x': 10, 'y': 43, 'c': 12, },
        { 'x': 44, 'y': 81, 'c': 8, },
        { 'x': 23, 'y': 19, 'c': 46, },
        { 'x': 56, 'y': 52, 'c': 57, },
      ]
    },
  ],
};

export const areaChartData = {
  'data': [
    {
      'name': 'areaChart',
      'values': [
        { 'x': 1, 'y': 28 }, { 'x': 2, 'y': 55 },
        { 'x': 3, 'y': 43 }, { 'x': 4, 'y': 91 },
        { 'x': 5, 'y': 81 }, { 'x': 6, 'y': 53 },
        { 'x': 7, 'y': 19 }, { 'x': 8, 'y': 87 },
        { 'x': 9, 'y': 52 }, { 'x': 10, 'y': 48 },
        { 'x': 11, 'y': 24 }, { 'x': 12, 'y': 49 },
        { 'x': 13, 'y': 87 }, { 'x': 14, 'y': 66 },
        { 'x': 15, 'y': 17 }, { 'x': 16, 'y': 27 },
        { 'x': 17, 'y': 68 }, { 'x': 18, 'y': 16 },
        { 'x': 19, 'y': 49 }, { 'x': 20, 'y': 15 }
      ]
    }
  ],
};


export const waterfallChartData = {
  'data': [
    {
      'name': 'waterfallChart',
      'values': [
        { 'x': 'Product Revenue', 'y': 420000 },
        { 'x': 'Services Revenue', 'y': 210000 },
        { 'x': 'Fixed Costs', 'y': 170000 },
        { 'x': 'Variable Costs', 'y': 140000 }
      ]
    }
  ],
};
