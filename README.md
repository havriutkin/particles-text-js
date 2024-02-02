# Interactive Particles with JavaScript

This project demonstrates the creation of an interactive particles using vanilla JavaScript and the HTML5 Canvas API. I created particles that respond to mouse movements. 

## Overview

The implementation consists of setting up a canvas to fill the entire browser window and dynamically adjusting its size on window resize. Particles are generated on the canvas and react to the user's mouse movements, moving away when the mouse gets close and gradually returning to their initial positions when the mouse moves away.

## Implementation Details

### Canvas Setup

- The canvas is configured to cover the entire viewport of the browser.
- An event listener is attached to the window to adjust the canvas dimensions if the browser window is resized, ensuring the particle system always fills the available space.

### Mouse Interaction

- A mouse object is defined to track the current position of the mouse on the canvas.
- An event listener on the canvas updates the mouse object's coordinates whenever the mouse moves.

### Particle Class

- Represents individual particles in the system.
- Each particle has properties for its base (initial) position, current position, size, color, and shift (`_dx`, `_dy`).
- The `update` method calculates the distance between the particle and the mouse, as well as the distance from the particle back to its base position. Depending on these distances, the particle's velocity and color are adjusted.
- The `draw` method renders the particle on the canvas using its current properties.

### Animation Loop

- A list of particles is created and positioned based on a grid layout centered in the canvas.
- The `mainLoop` function updates and redraws all particles in each frame using `requestAnimationFrame` for smooth animation.
- The particles' update method is called to calculate their new positions and colors based on the current mouse position.
- After updating, the canvas is cleared, and all particles are redrawn in their new positions.

## Conclusion

This project is a simple showcase of how one can achive interesting experience using just plain JS.
