const el = document.getElementById('container');

const hiddenDiv = document.getElementById('hidden-div');

// ✅ Show hidden DIV on hover
el.addEventListener('mouseover', function handleMouseOver() {
  hiddenDiv.style.visibility = 'visible';
});

// ✅ (optionally) Hide DIV on mouse out
el.addEventListener('mouseout', function handleMouseOut() {
  // 👇️ if you used visibility property to hide div
  hiddenDiv.style.visibility = 'hidden';
});
