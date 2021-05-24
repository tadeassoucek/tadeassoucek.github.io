window.q = function(query, el) {
  var res = (el || document).querySelectorAll(query);
  return res.length == 1 ? res[0] : res;
}
