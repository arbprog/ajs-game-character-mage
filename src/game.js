export default function lifeBarDisplay(data) {
  let status = '';
  if (data.health >= 50) {
    status = 'healthy';
  }

  if (data.health < 50 && data.health >= 15) {
    status = 'wounded';
  }

  if (data.health < 15) {
    status = 'critical';
  }

  return status;
}
