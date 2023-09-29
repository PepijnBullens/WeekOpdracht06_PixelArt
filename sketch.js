//background color
const backgroundColor = '#8A6257';
//delay inbetween pixels in animation
const delayInPixels = 1;

/*
  Colors for the characters
*/
const characterColorsArray = [
  //toad
  // black. red. white. skin. blue. brown. 
  [
    '#000000', '#D90707', '#DEDEDE', '#FFF0D1', '#3542F2', '#6E4221'
  ],

  //luigi
  // black. green. white. skin. blue. brown. gold.
  [
    '#000000', '#4EC436', '#DEDEDE', '#FFF0D1', '#3542F2', '#A16030', '#FFE066'
  ],

  //mario
  // black. red. white. skin. blue. brown. gold.
  [
    '#000000', '#D90707', '#DEDEDE', '#FFF0D1', '#3542F2', '#A16030', '#FFE066'
  ],

  //yoshi
  //black. green. white. red. orange.
  [
    '#000000', '#4EC436', '#DEDEDE', '#D90707', '#FF8D36'
  ]
];


/*
  ["newLayer", *first parameter*], creates a new layer at location of the *first parameter*.
  ["repeat", *first parameter*, *second parameter*], repeats color of the *first parameter*, and repeats it *second parameter* amount of times in pixels.
  [*first parameter*], creates a single pixel with color of *first parameter*.
  ["empty", *first parameter*], creates *first parameter* amount of empty pixels.

  placing every pixel single handedly was my first thought of action. I decided to try something else.
  Although it may be overwhelming and hard to read this code at first, i find it more efficient and faster to write.
*/
const charactersArray = [
    //toad
  [
    /* layer 1 */["newLayer", 0], ["repeat", 0, 7],
    /* layer 2 */["newLayer", -2], ["repeat", 0, 2], ["repeat", 1, 7], ["repeat", 0, 2],
    /* layer 3 */["newLayer", -4], ["repeat", 0, 2], [2], ["repeat", 1, 9], [2], ["repeat", 0, 2],
    /* layer 4 */["newLayer", -5], [0], ["repeat", 2, 2], ["repeat", 1, 11], [2], ["repeat", 0, 2],
    /* layer 5 */["newLayer", -6], [0], ["repeat", 2, 3], ["repeat", 1, 11], ["repeat", 2, 3], [0],
    /* layer 6 */["newLayer", -7], [0], ["repeat", 2, 4], ["repeat", 1, 11], ["repeat", 2, 4], [0],
    /* layer 7 */["newLayer", -8], [0], ["repeat", 2, 5], ["repeat", 1, 11], ["repeat", 2, 4], [0],
    /* layer 8 */["newLayer", -9], [0], ["repeat", 1, 2], ["repeat", 2, 5], ["repeat", 1, 9], ["repeat", 2, 4], ["repeat", 1, 2], [0],
    /* layer 9 */["newLayer", -9], [0], ["repeat", 1, 3], ["repeat", 2, 5], ["repeat", 1, 8], ["repeat", 2, 4], ["repeat", 1, 3], [0],
    /* layer 10 */["newLayer", -10], [0], ["repeat", 1, 4], ["repeat", 2, 6], ["repeat", 1, 6], ["repeat", 2, 5], ["repeat", 1, 3], [0],
    /* layer 11 */["newLayer", -10], [0], ["repeat", 1, 4], ["repeat", 2, 17], ["repeat", 1, 3], [0],
    /* layer 12 */["newLayer", -10], [0], ["repeat", 1, 4], ["repeat", 2, 17], ["repeat", 1, 3], [0],
    /* layer 13 */["newLayer", -10], [0], ["repeat", 1, 4], ["repeat", 2, 17], ["repeat", 1, 3], [0],
    /* layer 14 */["newLayer", -10], [0], ["repeat", 1, 4], ["repeat", 2, 6], ["repeat", 0, 6], ["repeat", 2, 5], ["repeat", 1, 3], [0],
    /* layer 15 */["newLayer", -9], [0], ["repeat", 1, 2], ["repeat", 2, 6], [0], ["repeat", 3, 6], [0], ["repeat", 2, 4], ["repeat", 1, 2], [0],
    /* layer 16 */["newLayer", -9], [0], [1], ["repeat", 2, 6], [0], ["repeat", 3, 8], [0], ["repeat", 2, 4], [1], [0],
    /* layer 17 */["newLayer", -8], [0], ["repeat", 2, 5], [0], ["repeat", 3, 4], [0], ["repeat", 3, 2], [0], [3], [0], ["repeat", 2, 4], [0],
    /* layer 18 */["newLayer", -7], [0], ["repeat", 2, 4], [0], ["repeat", 3, 4], [0], ["repeat", 3, 2], [0], ["repeat", 3, 2], [0], ["repeat", 2, 2], [0],
    /* layer 19 */["newLayer", -6], ["repeat", 0, 2], [2], [0], ["repeat", 3, 5], [0], ["repeat", 3, 2], [0], ["repeat", 3, 2], [0], ["repeat", 0, 2],
    /* layer 20 */["newLayer", -4], ["repeat", 0, 2], ["repeat", 3, 11], [0],
    /* layer 21 */["newLayer", -3], [0], ["repeat", 3, 11], [0],
    /* layer 22 */["newLayer", -2], [0], ["repeat", 3, 5], ["repeat", 0, 2], ["repeat", 3, 2], [0],
    /* layer 23 */["newLayer", -1], [0], ["repeat", 3, 8], [0],
    /* layer 24 */["newLayer", -2], [0], [4], ["repeat", 0, 8],
    /* layer 25 */["newLayer", -3], [0], [3], [0], ["repeat", 4, 2], [0], ["repeat", 3, 3], [0], [4], [0],
    /* layer 26 */["newLayer", -5], ["repeat", 0, 2], ["repeat", 3, 2], [0], ["repeat", 4, 2], [0], ["repeat", 3, 3], [0], [4], ["repeat", 0, 3],
    /* layer 27 */["newLayer", -6], [0], ["repeat", 3, 4], [0], ["repeat", 4, 2], [0], ["repeat", 3, 3], [0], [4], [0], ["repeat", 3, 2], [0],
    /* layer 28 */["newLayer", -7], [0], ["repeat", 3, 4], [0], ["repeat", 4, 2], ["repeat", 0, 6], [4], [0], ["repeat", 3, 3], [0],
    /* layer 29 */["newLayer", -7], [0], ["repeat", 3, 4], [0], ["repeat", 4, 2], [0], ["repeat", 2, 5], ["repeat", 0, 2], ["repeat", 3, 3],[0],
    /* layer 30 */["newLayer", -6], ["repeat", 0, 7], ["repeat", 2, 7], ["repeat", 0, 4],
    /* layer 31 */["newLayer", -3], [0], ["repeat", 2, 10], [0],
    /* layer 32 */["newLayer", -3], ["repeat", 0, 4], ["repeat", 2, 6], ["repeat", 0, 3],
    /* layer 33 */["newLayer", -4], [0], ["repeat", 5, 4], ["repeat", 0, 6], ["repeat", 5, 3], [0],
    /* layer 34 */["newLayer", -4], [0], ["repeat", 5, 7], [0], ["repeat", 5, 5], [0],
    /* layer 35 */["newLayer", -3], [0], ["repeat", 5, 5], [0], ["repeat", 5, 6], [0],
    /* layer 36 */["newLayer", -2], ["repeat", 0, 5], ["empty", 1], ["repeat", 0, 6]

  ],
    //luigi
  [
    /* layer 1 */["newLayer", -2], ["repeat", 0, 6],
    /* layer 2 */["newLayer",-4], ["repeat", 0, 2], ["repeat", 1, 6], [0],
    /* layer 3 */["newLayer", -5], [0], ["repeat", 1, 5], ["repeat", 0, 3], [1], [0],
    /* layer 4 */["newLayer", -6], [0], ["repeat", 1, 5], [0], ["repeat", 2, 3], [0], [1], [0],
    /* layer 5 */["newLayer", -7], [0], ["repeat", 1, 5], [0], ["repeat", 2, 2], [1], [2], [0], [1], [0],
    /* layer 6 */["newLayer", -8], [0], ["repeat", 1, 6], [0], ["repeat", 2, 2], ["repeat", 1, 2], [2], ["repeat", 0, 3],
    /* layer 7 */["newLayer", -8], [0], ["repeat", 1, 6], ["repeat", 0, 6], ["repeat", 1, 3], ["repeat", 0, 2],
    /* layer 8 */["newLayer", -9], [0], ["repeat", 1, 5], ["repeat", 0, 2], ["repeat", 1, 11], [0],
    /* layer 9 */["newLayer", -10], [0], ["repeat", 1, 5], [0],["repeat", 1, 9], ["repeat", 0, 5],
    /* layer 10 */["newLayer", -10], [0],["repeat", 1, 4], [0], ["repeat", 1, 4], ["repeat", 0, 10],
    /* layer 11 */["newLayer", -11], ["repeat", 0, 2], ["repeat", 1, 3], [0], ["repeat", 1, 2], ["repeat", 0, 3], ["repeat", 3, 7], [0],
    /* layer 12 */["newLayer", -12], [0], ["repeat", 1, 4], [0], ["repeat", 1, 2], [0], ["repeat", 3, 3], [0], ["repeat", 3, 4], [0], [3], [0],
    /* layer 13 */["newLayer", -13], [0], ["repeat", 1, 5], ["repeat", 0, 3], ["repeat", 3, 4], [0], ["repeat", 3, 3], ["repeat", 0, 5],
    /* layer 14 */["newLayer", -13], [0], ["repeat", 1, 2], ["repeat", 0, 3], ["repeat", 5, 2], [0], ["repeat", 3, 4], [0], ["repeat", 3, 2], [0], ["repeat", 3, 5], [0],
    /* layer 15 */["newLayer", -12], ["repeat", 0, 2], ["repeat", 3, 3], [0], ["repeat", 5, 2], [0], ["repeat", 3, 13], [0],
    /* layer 16 */["newLayer", -12], [0], ["repeat", 3, 2], [0], [3], [0], ["repeat", 5, 2], [0], ["repeat", 3, 13], [0],
    /* layer 17 */["newLayer",-12], [0], ["repeat", 3, 2], [0], ["repeat", 3, 2], ["repeat", 0, 3], ["repeat", 3, 2], ["repeat", 0, 5], ["repeat", 3, 5], [0],
    /* layer 18 */["newLayer",-12], [0], ["repeat", 3, 3], [0], ["repeat", 3, 6], [0], ["repeat", 5, 4], [0], ["repeat", 3, 3], [0],
    /* layer 19 */["newLayer",-11], [0], ["repeat", 3, 9], [0], ["repeat", 5, 5], ["repeat", 0, 3],
    /* layer 20 */["newLayer",-10], ["repeat", 0, 4], ["repeat", 3, 6], [0], ["repeat", 5, 3], [0], [3], [0],
    /* layer 21 */["newLayer",-8], [0], [5], [0], ["repeat", 3, 6], ["repeat", 0, 3], [3], [0],
    /* layer 22 */["newLayer", -8], [0], ["repeat", 5, 2], [0], ["repeat", 3, 8], [0],
    /* layer 23 */["newLayer", -7], ["repeat", 0, 4], ["repeat", 3, 6], [0],
    /* layer 24 */["newLayer", -5], ["repeat", 0, 3], ["repeat", 3, 4], [0],
    /* layer 25 */["newLayer", -6], ["repeat", 0, 2], [4], ["repeat", 0, 6],
    /* layer 26 */["newLayer", -7], [0], ["repeat", 1, 2], [0], [4], [0], ["repeat", 1, 2], [0], [4], [0],
    /* layer 27 */["newLayer", -8], [0], ["repeat", 1, 4], [0], [4], [0], ["repeat", 1, 2], [0], [4], [0],
    /* layer 28 */["newLayer", -8], [0], ["repeat", 1, 4], [0], ["repeat", 4, 2], [0], ["repeat", 1, 2], [0], [4], [0],
    /* layer 29 */["newLayer", -8], [0], ["repeat", 1, 4], [0], ["repeat", 4, 2], ["repeat", 0, 3], ["repeat", 4, 3], [0],
    /* layer 30*/["newLayer", -9], [0], ["repeat", 1, 5], [0], [4], [0], ["repeat", 6, 2], [0], ["repeat", 4, 3], [6], [0],
    /* layer 31 */["newLayer", -9], ["repeat", 0, 4], [1], [0], ["repeat", 4, 2], [0], ["repeat", 6, 2], [0], ["repeat", 4, 3], [6], [0],
    /* layer 32 */["newLayer", -9], [0], ["repeat", 2, 3], ["repeat", 0, 2], ["repeat", 4, 3], ["repeat", 0, 2], ["repeat", 4, 4], [0],
    /* layer 33 */["newLayer", -10], [0], ["repeat", 2, 5], [0], ["repeat", 4, 9], [0],
    /* layer 34 */["newLayer", -11], [0],["repeat", 2, 7],[0],["repeat", 4, 8],["repeat", 0, 2],
    /* layer 35 */["newLayer", -11], [0], [2], [0], [2], [0], ["repeat", 2, 3], [0], ["repeat", 4, 7], [0], [2], [0],
    /* layer 36 */["newLayer", -11], [0], [2], [0], [2], [0], [2], ["repeat", 0, 3], ["repeat", 4, 7], ["repeat", 0, 3],
    /* layer 37 */["newLayer", -11], [0], ["repeat", 2, 6], [0], ["repeat", 4, 8], [0], [2], [0],
    /* layer 38 */["newLayer", -10], [0], ["repeat", 2, 5], [0], ["repeat", 4, 7], ["repeat", 0, 3],
    /* layer 39 */["newLayer", -9], ["repeat", 0, 5], ["repeat", 4, 8], [0],
    /* layer 40 */["newLayer", -6], ["repeat", 0, 6], ["repeat", 4, 3], [0],
    /* layer 41 */["newLayer", -7], [0], ["repeat", 5, 6], ["repeat", 0, 3], [5], ["repeat", 0, 2],
    /* layer 42 */["newLayer", -7], ["repeat", 0, 5], ["repeat", 5, 2], ["repeat", 0, 2], ["repeat", 5, 4], [0],
    /* layer 43 */["newLayer", -8], [0], ["repeat", 5, 9], [0], ["repeat", 5, 3], [0],
    /* layer 44 */["newLayer", -8], [0], ["repeat", 5, 9], [0], ["repeat", 5, 3], [0],
    /* layer 45 */["newLayer", -8], [0], ["repeat", 5, 9], [0], ["repeat", 6, 2], [0],
    /* layer 46 */["newLayer", -7], [0], ["repeat", 6, 7], ["repeat", 0, 4],
    /* layer 47 */["newLayer", -6], ["repeat", 0, 7]
  ],
    //mario
  [
    /* layer 1 */["newLayer", 0], ["repeat", 0, 6],
    /* layer 2 */["newLayer", -2], ["repeat", 0, 2], ["repeat", 1, 6], [0],
    /* layer 3 */["newLayer", -3], [0], ["repeat", 1, 5], ["repeat", 0, 3], [1], [0],
    /* layer 4 */["newLayer", -4], [0], ["repeat", 1, 5], [0], ["repeat", 2, 3], [0], [1], [0],
    /* layer 5 */["newLayer", -5], [0], ["repeat", 1, 5], [0], ["repeat", 2, 2], ["repeat", 1, 2], [0], [1], [0],
    /* layer 6 */["newLayer", -6], [0], ["repeat", 1, 6], [0], [2], [1], ["repeat", 2, 2], [1], ["repeat", 0, 3],
    /* layer 7 */["newLayer",-6], [0], ["repeat", 1, 6], ["repeat", 0, 6], ["repeat", 1, 3], ["repeat", 0, 2],
    /* layer 8 */["newLayer", -7], [0], ["repeat", 1, 5], ["repeat", 0, 2], ["repeat", 1, 11], [0],
    /* layer 9 */["newLayer", -8], [0], ["repeat", 1, 5], [0], ["repeat", 1, 9], ["repeat", 0, 5],
    /* layer 10 */["newLayer", -8], [0], ["repeat", 1, 4], [0], ["repeat", 1, 4], ["repeat", 0, 10],
    /* layer 11 */["newLayer", -9], ["repeat", 0, 2], ["repeat", 1, 3], [0], ["repeat", 1, 2], ["repeat", 0, 3], ["repeat", 3, 7], [0],
    /* layer 12 */["newLayer", -10], [0], ["repeat", 1, 4], [0],["repeat", 1, 2], [0], ["repeat", 3, 3], [0], ["repeat", 3, 4], [0], [3], [0],
    /* layer 13 */["newLayer", -11], [0], ["repeat", 1, 5], ["repeat", 0, 3], ["repeat", 3, 4], [0], ["repeat", 3, 3], ["repeat", 0, 5],
    /* layer 14 */["newLayer", -11], [0], ["repeat", 1, 2], ["repeat", 0, 3], ["repeat", 5, 2], [0], ["repeat", 3, 4], [0], ["repeat", 3, 2], [0], ["repeat", 3, 5], [0],
    /* layer 15 */["newLayer", -10], ["repeat", 0, 2], ["repeat", 3, 3], [0], ["repeat", 5, 2], [0],["repeat", 3, 13], [0],
    /* layer 16 */["newLayer", -10], [0], ["repeat", 3, 2], [0],[3],[0], ["repeat", 5, 2], [0], ["repeat", 3, 13], [0],
    /* layer 17 */["newLayer", -10], [0], ["repeat", 3, 2], [0], ["repeat", 3, 2], ["repeat", 0, 3], ["repeat", 3, 2], ["repeat", 0, 5], ["repeat", 3, 5], [0],
    /* layer 18 */["newLayer", -10], [0], ["repeat", 3, 3], [0], ["repeat", 3, 6], [0], ["repeat", 5, 4], [0], ["repeat", 3, 3], [0],
    /* layer 19 */["newLayer", -9], [0], ["repeat", 3, 9], [0], ["repeat", 5, 5], ["repeat", 0, 3],
    /* layer 20 */["newLayer", -8], ["repeat", 0, 4], ["repeat", 3, 6], [0], ["repeat", 5, 5], [0],
    /* layer 21 */["newLayer", -4], ["repeat", 0, 4], ["repeat", 3, 3], ["repeat", 0, 5],
    /* layer 22 */["newLayer", -4], ["repeat", 0, 2], [4], ["repeat", 0, 4], [4], ["repeat", 0, 2],
    /* layer 23 */["newLayer", -5], [0], ["repeat", 1, 2], [0], [4], [0], ["repeat", 1, 2], [0], [4], [0],
    /* layer 24 */["newLayer", -6], [0], ["repeat", 1, 4], [0], [4], [0], ["repeat", 1, 2], [0], [4], [0],
    /* layer 25 */["newLayer", -6], [0], ["repeat", 1, 4], [0], ["repeat", 4, 2], [0], ["repeat", 1, 2], [0], [4], [0],
    /* layer 26 */["newLayer", -7], ["repeat", 0, 4], ["repeat", 1, 2], [0], ["repeat", 4, 2], ["repeat", 0, 3], ["repeat", 4, 3], [0],
    /* layer 27 */["newLayer", -7], [0], ["repeat", 2, 3], ["repeat", 0, 2], ["repeat", 4, 2], [0], ["repeat", 6, 2], [0], ["repeat", 4, 3], [6], [0],
    /* layer 28 */["newLayer", -8], [0], ["repeat", 2, 5], [0], ["repeat", 4, 2], [0],["repeat", 6, 2], [0], ["repeat", 4, 3], [6], [0],
    /* layer 29 */["newLayer", -9], [0], ["repeat", 2, 7], [0], ["repeat", 4, 2], ["repeat", 0, 2], ["repeat", 4, 4], [0], [2], [0],
    /* layer 30 */["newLayer", -9], [0], [2], [0], [2], [0], ["repeat", 2, 3], [0], ["repeat", 4, 8], [0], [2], [0],
    /* layer 31 */["newLayer", -9], [0], [2], [0], [2], [0], [2], ["repeat", 0, 3], ["repeat", 4, 8], ["repeat", 0, 3],
    /* layer 32 */["newLayer", -9], [0], ["repeat", 2, 6], [0], ["repeat", 4, 9], [0], [2], [0],
    /* layer 33 */["newLayer", -8], [0], ["repeat", 2, 5], [0], ["repeat", 4, 8], [0], ["empty", 1],[0],
    /* layer 34 */["newLayer", -7], ["repeat", 0, 8], ["repeat", 4, 5], [0],
    /* layer 35 */["newLayer", -6], [0], ["repeat", 5, 6], ["repeat", 0, 7],
    /* layer 36 */["newLayer", -6], ["repeat", 0, 5], ["repeat", 5, 2], ["repeat", 0, 2], ["repeat", 5, 5], [0],
    /* layer 37 */["newLayer", -7], [0], ["repeat", 5, 9], [0], ["repeat", 5, 4], [0],
    /* layer 38 */["newLayer", -7], [0], ["repeat", 5, 9], [0], ["repeat", 5, 4], [0],
    /* layer 39 */["newLayer", -7], [0], ["repeat", 5, 9], [0], ["repeat", 5, 4], [0],
    /* layer 40 */["newLayer", -7], [0], ["repeat", 5, 9], [0], ["repeat", 6, 3], [0],
    /* layer 41 */["newLayer", -7], ["repeat", 0, 2], ["repeat", 6, 7], ["repeat", 0, 5],
    /* layer 42 */["newLayer", -6], ["repeat", 0, 8]
  ],
    //yoshi
  [
    /* layer 1 */["newLayer", 4], ["repeat", 0, 2], ["empty", 1], ["repeat", 0, 2],
    /* layer 2 */["newLayer", 3], [0], ["repeat", 1, 2], [0], ["repeat", 1, 2], [0],
    /* layer 3 */["newLayer", 2], [0], ["repeat", 1, 2], ["repeat", 2, 4], [1], [0],
    /* layer 4 */["newLayer", 2], [0], [1], ["repeat", 2, 2], [0], [2], [0], [2], [0],
    /* layer 5 */["newLayer", 2], [0], ["repeat", 2, 3], [0], [2], [0], [2], [0],
    /* layer 6 */["newLayer", 1], [0], [1], ["repeat", 2, 7], [0],
    /* layer 7 */["newLayer", -1], ["repeat", 0, 3], ["repeat", 1, 2], ["repeat", 2, 3], ["repeat", 1, 2], ["repeat", 0, 5],
    /* layer 8 */["newLayer", -2], [0], [3], ["repeat", 1, 5], [2], ["repeat", 1, 8], [0],
    /* layer 9 */["newLayer", -2], [0], ["repeat", 1, 16], [0],
    /* layer 10 */["newLayer", -2], [0], [1], ["repeat", 2, 2], ["repeat", 1, 13], [0],
    /* layer 11 */["newLayer", -3], [0], [1], ["repeat", 2, 4], ["repeat", 1, 13], [0],
    /* layer 12 */["newLayer", -4], [0], [3], [1], ["repeat", 2, 5], ["repeat", 1, 12], [0],
    /* layer 13 */["newLayer", -4], [0], [3], [1], ["repeat", 2, 6], ["repeat", 1, 11], [0],
    /* layer 14 */["newLayer", -3], [0], [1], ["repeat", 2, 6], ["repeat", 1, 11], [0],
    /* layer 15 */["newLayer", -2], [0], [1], ["repeat", 2, 5], ["repeat", 1, 10], [0],
    /* layer 16 */["newLayer", -2], [0], [3], [1], ["repeat", 2, 3], [1], [2], ["repeat", 1, 9], [0],
    /* layer 17 */["newLayer", -2], ["repeat", 0, 3], [1], ["repeat", 2, 5], ["repeat", 1, 6], ["repeat", 0, 2],
    /* layer 18 */["newLayer", 1], ["repeat", 0, 2], ["repeat", 2, 3], ["repeat", 0, 7],
    /* layer 19 */["newLayer", 0], ["repeat", 0, 3], ["repeat", 1, 2], ["repeat", 2, 3], ["repeat", 0, 2],
    /* layer 20 */["newLayer", -1], ["repeat", 0, 2], ["repeat", 1, 4], ["repeat", 2, 4], [0],
    /* layer 21 */["newLayer", -2], [0], ["repeat", 3, 2], ["repeat", 1, 4], ["repeat", 2, 4], [0],
    /* layer 22 */["newLayer", -3], [0], ["repeat", 3, 2], [1], [0], ["repeat", 1, 3], ["repeat", 2, 5], [0],
    /* layer 23 */["newLayer", -3], [0], [3], [1], [0], ["repeat", 1, 3], [0], ["repeat", 2, 5], [0],
    /* layer 24 */["newLayer", -3], [0], ["repeat", 1, 2], [0], ["repeat", 1, 2], [0], ["repeat", 2, 6], [0],
    /* layer 25 */["newLayer", -4], ["repeat", 0, 2], [1], [0], ["repeat", 1, 2], [0], ["repeat", 2, 7], [0],
    /* layer 26 */["newLayer", -5], [0], [1], ["repeat", 0, 3], ["repeat", 1, 2], [0], ["repeat", 2, 7], [0],
    /* layer 27 */["newLayer", -5], [0], [1], ["repeat", 0, 2], ["repeat", 1, 4], ["repeat", 0, 2], ["repeat", 2, 5], [0],
    /* layer 28 */["newLayer", -5], ["repeat", 0, 2], [1], [0], ["repeat", 1, 6], [0], ["repeat", 2, 4], [0],
    /* layer 29 */["newLayer", -4], [0], [1], [0], ["repeat", 1, 5], ["repeat", 0, 2], ["repeat", 2, 3], [0],
    /* layer 30 */["newLayer", -4], [0], ["repeat", 1, 2], [0], ["repeat", 1, 5], [0], ["repeat", 2, 2], ["repeat", 0, 2],
    /* layer 31 */["newLayer", -3], [0], ["repeat", 1, 2], [0], ["repeat", 1, 4], ["repeat", 0, 3], [1], [0],
    /* layer 32 */["newLayer", -3], ["repeat", 0, 2], ["repeat", 4, 2], ["repeat", 0, 5], [4], ["repeat", 0, 3],
    /* layer 33 */["newLayer", -3], [0], ["repeat", 4, 4], ["repeat", 0, 2], ["repeat", 4, 3], ["repeat", 0, 2], 
    /* layer 34 */["newLayer", -3], [0], ["repeat", 4, 4], ["repeat", 0, 3], ["repeat", 4, 2], ["repeat", 0, 3],
    /* layer 35 */["newLayer", -4], [0], ["repeat", 4, 7], ["repeat", 0, 2], ["repeat", 4, 3], ["repeat", 0, 2],
    /* layer 36 */["newLayer", -4], [0], ["repeat", 4, 8], [0], ["repeat", 4, 4], [0],
    /* layer 37 */["newLayer", -4], [0], ["repeat", 4, 8], [0], ["repeat", 4, 4], [0],
    /* layer 38 */["newLayer", -3], ["repeat", 0, 14],
  ]
];

//array of buttons
const buttons = [];

//preload function
function preload()
{
  //for loop creating 4 buttons
  for(let i = 0; i < 8; i++)
  {
    //load image as button
    buttons[i] = loadImage('assets/buttons/' + i + '.png');
  }
}

//function setup
function setup() {
  //create canvas
  createCanvas(640, 480);

  //set background color to variable background color
  background(backgroundColor);
}

//function draw (called every frame)
function draw() {
  //call function to create menuButtons
  drawMenuButtons();

  //call function to create measurement lines
  measurements();

  //change outline thickness of object to 0
  strokeWeight(0);
}

/* 
  async for the await sleep function
  function to draw the characters
*/
async function drawCharacters(characters, characterColors, currentCharacter)
{  
  //makes it so that this function isnt called every frame
  noLoop();

  //set outline thickness to 0
  strokeWeight(0);

  //variables for pixel size/position
  let pixelWidth;
  let pixelHeight;
  let xOffset;
  let yOffset;

  //variables for the position of 
  let x = 0;
  let y = 0;
  let color;

  //adjust pixel width, height, offset depending on the pixel art
  if(currentCharacter == 0)
  {
    pixelWidth = 10;
    pixelHeight = 8.86;
    xOffset = 150;
    yOffset = 71.2;
  }
  else if(currentCharacter == 1)
  {
    pixelWidth = 10.85;
    pixelHeight = 6.75;
    xOffset = 190.6;
    yOffset = 72.5;
  }
  else if(currentCharacter == 2)
  {
    pixelWidth = 10.85;
    pixelHeight = 7.56;
    xOffset = 169;
    yOffset = 72.5;
  }
  else if(currentCharacter == 3)
  {
    pixelWidth = 11.83;
    pixelHeight = 8.33;
    xOffset = 109.2;
    yOffset = 71.5;
  }

  /* 
    nested loop for drawing pixel art from the pixel art array

    ["newLayer", *first parameter*], creates a new layer at location of the *first parameter*.
    ["repeat", *first parameter*, *second parameter*], repeats color of the *first parameter*, and repeats it *second parameter* amount of times in pixels.
    [*first parameter*], creates a single pixel with color of *first parameter*.
    ["empty", *first parameter*], creates *first parameter* amount of empty pixels.

    placing every pixel single handedly was my first thought of action. I decided to try something else.
    Although it may be overwhelming and hard to read this code at first, i find it more efficient and faster to write.
  */
  for(let i = 0; i < characters[currentCharacter].length; i++)
  {
    if(characters[currentCharacter][i][0] == "newLayer")
    {
      y += pixelHeight;
      x = pixelWidth * characters[currentCharacter][i][1];
    }
    else if(characters[currentCharacter][i][0] == "empty")
    {
      x += pixelWidth * characters[currentCharacter][i][1];
    }
    else if(characters[currentCharacter][i][0] == "repeat")
    {
      color = characterColors[currentCharacter][characters[currentCharacter][i][1]];
      fill(color);

      for(let j = 0; j < characters[currentCharacter][i][2]; j++)
      {
        rect(xOffset + x,yOffset + y, pixelWidth, pixelWidth);

        x += pixelWidth;
        //sleep
        await sleep(delayInPixels);
      }
    }
    else
    {
      color = characterColors[currentCharacter][characters[currentCharacter][i][0]];
      fill(color)

      rect(xOffset + x,yOffset + y, pixelWidth, pixelWidth);

      x += pixelWidth;
      //sleep
      await sleep(delayInPixels);
    }
  }

  loop();
}

//function sleep, allows async funtion to wait in script
function sleep(millisecondsDuration)
{
  return new Promise((resolve) => {
    setTimeout(resolve, millisecondsDuration);
  })
}

//measurements lines 
function measurements()
{
  fill('black');
  strokeWeight(3);

  //320px
  line(30, 80, 30, 400);
  line(20, 90, 30, 80);
  line(40, 90, 30, 80);
  line(20, 390, 30, 400);
  line(40, 390, 30, 400);
  textSize(16);
  text('\'320px\'', 10, 430);

  //260px
  line(50, 60, 310, 60);
  line(50, 60, 60, 50);
  line(50, 60, 60, 70);
  line(310, 60, 300, 50);
  line(310, 60, 300, 70);
  text('\'260px\'', 155, 50);
} 

//draw button and check if pressed
function drawMenuButtons()
{
  for(let i = 0; i < buttons.length / 2; i++)
  {
    image(buttons[i + 1 * i], 430, 70 + 70 * i, 120, 60);
  }

  if(mouseIsPressed === true && mouseX > 430 && mouseX < 550)
  {
    let y = 70;

    for(let i = 1; i < buttons.length; i += 2)
    {
      if(mouseY > y && mouseY < y + 60)
      {
        image(buttons[i], 430, y, 120, 60);

        if(i == 1)
        {
          background(backgroundColor);
          drawCharacters(charactersArray, characterColorsArray, 0);
        }
        else if(i == 3)
        {
          background(backgroundColor);
          drawCharacters(charactersArray, characterColorsArray, 1);
        }
        else if(i == 5)
        {
          background(backgroundColor);
          drawCharacters(charactersArray, characterColorsArray, 2);
        }
        else if(i == 7)
        {
          background(backgroundColor);
          drawCharacters(charactersArray, characterColorsArray, 3);
        }
      }

      y += 70;
    }
  }
}