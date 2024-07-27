import ClassRoom from './0-classroom';

function initializeRooms() {
  const classroom1 = new ClassRoom(19);
  const classroom2 = new ClassRoom(20);
  const classroom3 = new ClassRoom(34);

  return [classroom1, classroom2, classroom3];
}

export default initializeRooms;
