export const buttons = [
    [
      {
        class: 'special',
        label: 'C',
        function: 'clearDisplay',
        columns: 1
      },
      {
        class: 'special',
        label: '<',
        function: 'deleteLastCharacter',
        columns: 1
      },
      {
        class: 'operator',
        label: '%',
        function: 'setOperator',
        columns: 1
      },     
      {
        class: 'operator',
        label: '/',
        function:  'setOperator',
        columns: 1
      },   
    ],
    [ 
      {
        class: 'number',
        label: '7',
        function: 'updateDisplay',
        columns: 1
      },  
      {
        class: 'number',
        label: '8',
        function: 'updateDisplay',
        columns: 1
      },  
      {
        class: 'number',
        label: '9',
        function: 'updateDisplay',
        columns: 1
      },  
      {
        class: 'operator',
        label: 'x',
        function:  'setOperator',
        columns: 1
      },  
    ],
    [ 
      {
        class: 'number',
        label: '4',
        function: 'updateDisplay',
        columns: 1
      },  
      {
        class: 'number',
        label: '5',
        function: 'updateDisplay',
        columns: 1
      },  
      {
        class: 'number',
        label: '6',
        function: 'updateDisplay',
        columns: 1
      }, 
      {
        class: 'operator',
        label: '-',
        function: 'setOperator',
        columns: 1
      },  
    ],
    [ 
      {
        class: 'number',
        label: '1',
        function: 'updateDisplay',
        columns: 1
      },  
      {
        class: 'number',
        label: '2',
        function: 'updateDisplay',
        columns: 1
      },  
      {
        class: 'number',
        label: '3',
        function: 'updateDisplay',
        columns: 1
      }, 
      {
        class: 'operator',
        label: '+',
        function: 'setOperator',
        columns: 1
      }
    ],
    [
      {
        class: 'number',
        label: '0',
        function: 'updateDisplay',
        columns: 2
      }, 
      {
        class: 'operator',
        label: '.',
        function: 'setOperator',
        columns: 1
      }, 
      {
        class: 'special',
        label: '=',
        function: 'calculate',
        columns: 1
      }
      
    ]
  ]