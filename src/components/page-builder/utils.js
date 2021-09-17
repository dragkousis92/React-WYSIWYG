import { arrayMoveImmutable } from 'array-move';

const calculateEditorWeightChanges = (orderedEditors, oldIndex, newIndex) => {
  const orderedIds = orderedEditors.map(({ id }) => id);

  return arrayMoveImmutable(orderedIds, oldIndex, newIndex);
};

export { calculateEditorWeightChanges };
