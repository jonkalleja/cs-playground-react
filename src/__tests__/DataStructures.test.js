import createJestTest from '../utils/test/app/create-jest-test';

describe('Data Structures: Solution Code Passes Tests', () => {

  const IDS = [
    'BinarySearchTree',
    'LinkedList',
    'MaxHeap',
    'Stack'
  ];

  IDS.forEach(createJestTest);

});
