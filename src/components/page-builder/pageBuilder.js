import React, { useState } from 'react';
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

import {
  availableEditors,
  addEditor,
  editorDataChange,
  editorWeightChange,
  removeEditor,
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
};

const PageBuilder = ({
  classes,
  editors,
  orderedEditors,
  availableEditors,
  addEditor,
  removeEditor,
  editorDataChange,
  editorWeightChange,
  generateHTML,
  HTMLWrapperRef,
}: Props) => {
  const [dragId, setDragId] = useState();

  const handleDrag = ev => {
    setDragId(ev.currentTarget.id);
  };

  const handleDrop = ev => {
    const draggedBox = editors[dragId];
    const dragedBoxOrder = editors[dragId].weight;

    // boxes.find(box => box.id === dragId);

    // const dragBoxOrder = dragBox.order;
    const droppedBox = editors[ev.currentTarget.id];
    const droppedBoxOrder = editors[ev.currentTarget.id].weight;

    const editorValues = Object.values(editors);

    const changes = [];

    changes[dragId] = droppedBoxOrder;

    editorValues.map(editor => {
      if (editor.id === dragId) return;

      if (dragedBoxOrder < droppedBoxOrder) {
        if (editor.weight <= droppedBoxOrder)
          changes[editor.id] = editor.weight - 1;
      } else {
        if (editor.weight >= droppedBoxOrder)
          changes[editor.id] = editor.weight + 1;
      }
    });

    // const newBoxState = boxes.map(box => {
    //   if (box.id === dragId) {
    //     box.order = dropBoxOrder;
    //   }
    //   if (box.id === ev.currentTarget.id) {
    //     box.order = dragBoxOrder;
    //   }
    //   return box;
    // });

    console.log(changes);

    // setBoxes(newBoxState);
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
          {orderedEditors.map(
            ({ AdminComponent, id, defaultData, weight, type }) => (
              <AdminWrapperComponent
                handleDrag={handleDrag}
                handleDrop={handleDrop}
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
  }),
  withStyles(styles),
  withPageBuilder,
)(PageBuilder);
