import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import withStyles from '@mui/styles/withStyles';
import withPageBuilder from './withPageBuilder';
import AdminWrapperComponent from 'components/component-views/components/admin-wrapper-component/AdminWrapperComponent';

import withModelProps from 'utilities/withModelProps';
import compose from 'utilities/compose';

import styles from './styles';

import SortableContainer from './components/sortable-container';
import SortableItem from './components/sortable-item';
import SortableHandler from './components/sortable-handler';

import {
  availableEditors,
  addEditor,
  editorDataChange,
  editorWeightChange,
  removeEditor,
  savePage,
  editors,
  editorDragged,
} from 'models/page-components';

type Props = {
  classes: Object,
  orderedEditors: [],
  availableEditors: [],
  addEditor: () => void,
  editorDataChange: () => void,
  editorWeightChange: () => void,
  removeEditor: () => void,
  generateHTML: () => void,
  editorDragged: () => void,
  HTMLWrapperRef: React.Ref,
  calculateEditorWeightChanges: () => {},
  savePage: () => void,
};

const PageBuilder = ({
  classes,
  orderedEditors,
  availableEditors,
  addEditor,
  removeEditor,
  editorDataChange,
  editorWeightChange,
  generateHTML,
  HTMLWrapperRef,
  calculateEditorWeightChanges,
  editorDragged,
  savePage,
}: // savePage,
Props) => (
  <div className={classes?.pageWrapper}>
    <Paper className={classes?.pageWrapper2}>Paper</Paper>
    <Typography variant='h1' component='h1' gutterBottom>
      Page builder WYSIWYG editor
    </Typography>
    <Grid container className={classes?.pageContainer}>
      <div className={classes?.editorArea}>
        <Typography variant='h5' component='h5' gutterBottom>
          Admin area
        </Typography>
        <div className='toolbar'>
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
          <Button onClick={() => savePage(generateHTML())}>Save page</Button>
        </div>
        <SortableContainer
          useDragHandle
          onSortEnd={({ oldIndex, newIndex }) =>
            editorDragged(
              calculateEditorWeightChanges(orderedEditors, oldIndex, newIndex),
            )
          }>
          {orderedEditors.map(
            ({ AdminComponent, id, defaultData, weight, type }) => (
              <SortableItem key={id} index={weight}>
                <AdminWrapperComponent
                  editorId={id}
                  defaultData={defaultData}
                  AdminComponent={AdminComponent}
                  editorDataChange={editorDataChange}
                  editorWeightChange={editorWeightChange}
                  removeEditor={removeEditor}
                  type={type}
                  weight={weight}
                  SortHandler={SortableHandler}
                />
              </SortableItem>
            ),
          )}
        </SortableContainer>
      </div>
    </Grid>

    <hr />
    <div ref={HTMLWrapperRef}>
      {orderedEditors.map(({ ViewComponent, id, data }) => (
        <ViewComponent key={id} {...data} editorId={id} />
      ))}
    </div>
  </div>
);

export default compose(
  withModelProps({
    editors,
    addEditor,
    editorDataChange,
    availableEditors,
    editorWeightChange,
    removeEditor,
    editorDragged,
    savePage,
  }),
  withStyles(styles),
  withPageBuilder,
)(PageBuilder);
