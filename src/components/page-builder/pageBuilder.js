import React from 'react';
import orderBy from 'lodash/orderBy';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';

import { withStyles } from '@material-ui/core/styles';

import AdminWrapperComponent from '../component-views/components/admin-wrapper-component/AdminWrapperComponent';

import withModelProps from 'utilities/withModelProps';
import compose from 'utilities/compose';

import styles from './styles';

import {
  editors,
  availableEditors,
  addEditor,
  editorDataChange,
  editorWeightChange,
  removeEditor,
} from 'models/page-components';

type Props = {
  classes: Object,
  editors: [],
  availableEditors: [],
  addEditor: () => void,
  editorDataChange: () => void,
  editorWeightChange: () => void,
  removeEditor: () => void,
};

const PageBuilder = ({
  classes,
  editors,
  availableEditors,
  addEditor,
  removeEditor,
  editorDataChange,
  editorWeightChange,
}: Props) => {
  const orderedEditors = orderBy(editors, ['weight']);
  return (
    <div className={classes?.pageWrapper}>
      <Typography variant='h1' component='h1' gutterBottom>
        Page builder WYSIWYG editor
      </Typography>
      <Grid container className={classes?.pageContainer}>
        <div className={classes?.editorArea}>
          <Typography variant='h5' component='h5' gutterBottom>
            Admin area
          </Typography>
          <ButtonGroup
            variant='contained'
            color='primary'
            aria-label='contained primary button group'>
            {availableEditors.map(editor => (
              <Button key={editor.key} onClick={() => addEditor(editor)}>
                Add {editor.type}
              </Button>
            ))}
          </ButtonGroup>
          {orderedEditors.map(
            ({ AdminComponent, id, defaultData, weight, type }) => (
              <AdminWrapperComponent
                editorId={id}
                key={id}
                defaultData={defaultData}
                AdminComponent={AdminComponent}
                editorDataChange={editorDataChange}
                editorWeightChange={editorWeightChange}
                removeEditor={removeEditor}
                weight={weight}
                type={type}
              />
            ),
          )}
        </div>
      </Grid>

      <hr />
      <div>
        <span>Preview area </span>
        {orderedEditors.map(({ ViewComponent, id, data }) => (
          <ViewComponent key={id} {...data} />
        ))}
      </div>
    </div>
  );
};

export default compose(
  withModelProps({
    editors,
    addEditor,
    editorDataChange,
    availableEditors,
    editorWeightChange,
    removeEditor,
  }),
  withStyles(styles),
)(PageBuilder);
