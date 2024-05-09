// Get the video and hover elements
const video = document.getElementById('video');
const hoverElement = document.querySelector('.Section-hover');

// Add an event listener to the hover element
hoverElement.addEventListener('mouseover', () => {
  // Play the video when the element is hovered
  video.play();
});
// Add an event listener to the hover element
hoverElement.addEventListener('mouseout', () => {
  // Pause the video when the element is no longer hovered
  video.pause();
});