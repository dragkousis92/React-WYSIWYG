const styles = ({ spacing, palette }) => ({
  pageWrapper: {
    background: palette.backgroundGrey,
    width: '100%',
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
});

export default styles;
