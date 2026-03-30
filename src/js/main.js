/**
 * XR — Extended Reality Freestyle
 * Custom A-Frame components and scene logic
 */

/* ------------------------------------------------------------------ */
/*  Component: xr-pulse                                                 */
/*  Adds a subtle scale-pulse animation to an entity on click          */
/* ------------------------------------------------------------------ */
AFRAME.registerComponent('xr-pulse', {
  init() {
    this.el.addEventListener('click', () => {
      const el = this.el;

      // Burst scale up then return to normal
      el.setAttribute('animation__pulse', {
        property: 'scale',
        from: '1 1 1',
        to: '1.4 1.4 1.4',
        dur: 200,
        easing: 'easeOutQuad',
        startEvents: [],
      });

      el.components['animation__pulse'].beginAnimation();

      setTimeout(() => {
        el.setAttribute('animation__shrink', {
          property: 'scale',
          from: '1.4 1.4 1.4',
          to: '1 1 1',
          dur: 300,
          easing: 'easeInQuad',
          startEvents: [],
        });
        el.components['animation__shrink'].beginAnimation();
      }, 200);

      // Update subtitle text
      const subtitle = document.getElementById('subtitle');
      if (subtitle) {
        subtitle.setAttribute('value', 'Shape activated!');
        setTimeout(() => {
          subtitle.setAttribute('value', 'Click the shape to interact');
        }, 2000);
      }
    });
  },
});

/* ------------------------------------------------------------------ */
/*  Component: xr-look-controls-touch                                   */
/*  Convenience wrapper that configures look-controls for touch devs   */
/* ------------------------------------------------------------------ */
AFRAME.registerComponent('xr-look-controls-touch', {
  init() {
    this.el.setAttribute('look-controls', {
      touchEnabled: true,
      magicWindowTrackingEnabled: true,
    });
  },
});

/* ------------------------------------------------------------------ */
/*  enterVR — triggers VR mode from the UI button                      */
/* ------------------------------------------------------------------ */
window.enterVR = function enterVR() {
  const scene = document.getElementById('xr-scene');
  if (scene) {
    scene.enterVR();
  }
};

/* ------------------------------------------------------------------ */
/*  Scene ready callback                                                */
/* ------------------------------------------------------------------ */
document.addEventListener('DOMContentLoaded', () => {
  const scene = document.getElementById('xr-scene');

  // Wire up VR button
  const vrButton = document.getElementById('btn-vr');
  if (vrButton) {
    vrButton.addEventListener('click', window.enterVR);
  }

  scene.addEventListener('loaded', () => {
    console.log('[XR] Scene loaded and ready');
  });

  scene.addEventListener('enter-vr', () => {
    console.log('[XR] Entered VR mode');
    const overlay = document.getElementById('ui-overlay');
    if (overlay) overlay.style.display = 'none';
  });

  scene.addEventListener('exit-vr', () => {
    console.log('[XR] Exited VR mode');
    const overlay = document.getElementById('ui-overlay');
    if (overlay) overlay.style.display = '';
  });
});
