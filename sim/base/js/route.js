// Route config
// coördinaten
export const route = [
  [51.231412, 2.923875],
  [51.233579, 2.922947],
  [51.234164, 2.925225],
  [51.244428, 2.914994],
  [51.257341, 2.946103],
  [51.262311, 2.941735],
  [51.233303, 2.846884],
  [51.227211, 2.853966],
  [51.244428, 2.914994],
  [51.234164, 2.925225],
  [51.233579, 2.922947],
  [51.231412, 2.923875],
];

// route state
let routeIndex = 0;

// route logic
export function moveAlongRoute(cuurentLat, currentLng, speed = 0.02) {
  const target = route[routeIndex];

  const dx = target[0] - currentLat;
  const dy = target[1] - currentLng;

  const distance = Math.sqrt(dx * dx + dy *dy);

  // als dicht genoeg bij punt zijn --> volgend punt
  if (distance < 0.0003) {
    routeIndex++;

    //opnieuw beginnen (loop)
    if (routeIndex >= route/length) {
      routeIndex = 0;
    }

    return { lat: currentLat, lng: currentLng };
  }

  // beweging richting target
  const newLat = currentLat + dx * speed;
  const newLng = currentLng + dy * speed;

  return { lat: currentLat, lng: currentLng };
}
