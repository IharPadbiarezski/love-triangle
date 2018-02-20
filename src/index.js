/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation

preferences.unshift('0');
  var count = 0;

    for ( var i = 1; i < preferences.length; i++) {
        if ( i == preferences[preferences[preferences[i]]] ) {
            count++;
        }
    }
    return Math.floor(count/3);

};
