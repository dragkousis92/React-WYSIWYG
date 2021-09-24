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
    display: 'inline',
    lineHeight: '24px',
  },
  adminstrativeControls: {
    borderBottom: `1px solid ${palette.background}`,
    padding: spacing(1),
  },
  controlsHeader: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  controlsHeaderInfo: {
    display: 'flex',
    alignItems: 'center',
    padding: spacing(1),
  },
});

export default styles;
