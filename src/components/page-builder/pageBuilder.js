import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';

import { withStyles } from '@material-ui/core/styles';
import withPageBuilder from './withPageBuilder';
import AdminWrapperComponent from 'components/component-views/components/admin-wrapper-component/AdminWrapperComponent';

import withModelProps from 'utilities/withModelProps';
import compose from 'utilities/compose';

import styles from './styles';

import { sortableContainer, sortableElement } from 'react-sortable-hoc';
import { calculateEditorWeightChanges } from './utils';

import {
  availableEditors,
  addEditor,
  editorDataChange,
  editorWeightChange,
  removeEditor,
  editorDragged,
  savePage,
  editors,
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
  HTMLWrapperRef: React.Ref,
  editors: {},
  editorDragged: () => void,
};

const SortableItem = sortableElement(({ children }) => <li>{children}</li>);

const SortableContainer = sortableContainer(({ children }) => {
  return <ul>{children}</ul>;
});

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
  editorDragged,
}: Props) => {
  const onSortEnd = ({ oldIndex, newIndex }) => {
    editorDragged(
      calculateEditorWeightChanges(orderedEditors, oldIndex, newIndex),
    );
  };
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
            <Button onClick={() => generateHTML()}>Save page</Button>
          </div>
          <SortableContainer onSortEnd={onSortEnd}>
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
};

export default compose(
  withModelProps({
    editors,
    addEditor,
    editorDataChange,
    availableEditors,
    editorWeightChange,
    removeEditor,
    savePage,
    editorDragged,
  }),
  withStyles(styles),
  withPageBuilder,
)(PageBuilder);
