import { arrayMoveImmutable } from 'array-move';

const calculateEditorWeightChanges = (orderedEditors, oldIndex, newIndex) => {
  const orderedIds = orderedEditors.map(({ id }) => id);

  console.log(`moving ${oldIndex} to ${newIndex}`);
  return arrayMoveImmutable(orderedIds, oldIndex, newIndex);
};

export { calculateEditorWeightChanges };
