/**
 * Remove whitespace filter
 * @Param text
 * @return string
 */

clankDocs.filter('removewhitespace', function () {
  return function(text) {
    return String(text).replace(/\s/g, "");
  };
});