
const canvasSketch = require('canvas-sketch');

const settings = {
  // Enable an animation loop
  animate: true,
  // Set loop duration to 3 seconds
  duration: 10,
  // Export frame rate, defaults to 30
  fps: 60
};

// Start the sketch
canvasSketch(() => {
  return ({ context, width, height, playhead }) => {
    // Clear buffer
    context.clearRect(0, 0, width, height);

    // Fill the canvas with a color
    context.fillStyle = 'tomato';
    context.fillRect(0, 0, width, height);

    // Get a seamless 0..1 value for our loop
    const t = Math.sin(playhead * Math.PI);

    // Min dimension
    const minDim = Math.min(width, height);

    // Animate the thickness with 'playhead' prop
    const thickness = Math.max(5, Math.pow(t, 0.55) * minDim * 0.5);

    // Rotate with PI to create a seamless animation
    const rotation = playhead * Math.PI;

    // Draw a rotating white rectangle around the center
    const cx = width / 2;
    const cy = height / 2;
    const length = minDim * 0.5;
    context.fillStyle = 'white';
    context.save();
    context.translate(cx, cy);
    context.rotate(rotation);
    context.fillRect(-thickness / 2, -length / 2, thickness, length);
    context.restore();
  };
}, settings);