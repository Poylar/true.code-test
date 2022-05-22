
function closest(node, elem) {
  if (node === elem) return true;
  if (node == null) return false;
  return closest(node.parentNode, elem);
}

function isInViewport(el) {
  let rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

export { closest, isInViewport };
