// // Disable overscroll on touch devices
// document.addEventListener('DOMContentLoaded', function() {
//     document.body.addEventListener('touchmove', function(e) {
//       // Check if scrolling is possible
//       if (e.currentTarget.scrollHeight > e.currentTarget.clientHeight) {
//         e.preventDefault();
//       }
//     }, { passive: false });
//   });
  

window.addEventListener('DOMContentLoaded', function() {
    var supportsOverflowStyle = 'webkitOverflowScrolling' in document.documentElement.style;
    if (supportsOverflowStyle) {
      document.documentElement.style.webkitOverflowScrolling = 'touch';
    }
  });
  