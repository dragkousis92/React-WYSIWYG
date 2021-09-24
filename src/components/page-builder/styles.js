const styles = ({ spacing, palette }) => ({
  paper: {
    background: palette.grey[100],
  },
  pageWrapper: {
    background: palette.grey[100],
    width: '100%',

    '& $paper': {
      background: palette.grey[100],
    },
  },
  pageContainer: {
    maxWidth: '900px',
    margin: 'auto',
    paddingLeft: spacing(2),
    paddingRight: spacing(3),
  },
  editorArea: {
    paddingTop: spacing(2),
    width: '100%',
  },
  droppable: {
    height: '300px',
    background: 'blue',
  },
  pageWrapper2: {
    backgroundColor: 'blue',
  },
});

export default styles;
