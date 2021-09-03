const styles = ({ spacing, palette }) => ({
  editorArea: {},
  buttons: { textAlign: 'right' },
  weight: {
    maxWidth: '35px',
  },
  weightInput: {
    fontSize: '11px',
    '&:before': { display: 'none' },
    '&:after': { display: 'none' },
  },
  label: {
    fontSize: '11px',
    fontWeight: 500,
    paddingBottom: '1px',
  },
  weightControl: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  adminstrativeControls: {
    borderBottom: `1px solid ${palette.background}`,
    paddingBottom: spacing(1),
    marginBottom: spacing(1),
  },
});

export default styles;
