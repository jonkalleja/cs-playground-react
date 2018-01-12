import createJestTest from '../utils/test/app/create-jest-test';

describe('Sorting Algorithms: Solution Code Passes Tests', () => {

  const IDS = [
    'BubbleSort',
    'BucketSort',
    'HeapSort',
    'InsertionSort',
    'Mergesort',
    'Quicksort',
    'SelectionSort',
  ];

  IDS.forEach(createJestTest);

});
