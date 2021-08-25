import React from 'react';
import orderBy from 'lodash/orderBy';
import withModelProps from 'utilities/withModelProps';
import AdminWrapperComponent from '../component-views/components/admin-wrapper-component/AdminWrapperComponent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import {
  editors,
  availableEditors,
  addEditor,
  editorDataChange,
  editorWeightChange,
} from 'models/page-components';

const PageBuilder = ({
  editors,
  availableEditors,
  addEditor,
  editorDataChange,
  editorWeightChange,
  ...rest
}) => {
  const orderedEditors = orderBy(editors, ['weight']);
  return (
    <div>
      <Typography variant='h1' component='h1' gutterBottom>
        Page builder WYSIWYG editor
      </Typography>
      <div>
        <Typography variant='h6' component='h6' gutterBottom>
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

        {orderedEditors.map(({ AdminComponent, id, defaultData, weight }) => (
          <AdminWrapperComponent
            editorId={id}
            key={id}
            defaultData={defaultData}
            AdminComponent={AdminComponent}
            editorDataChange={editorDataChange}
            editorWeightChange={editorWeightChange}
            weight={weight}
          />
        ))}
      </div>
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

export default withModelProps({
  editors,
  addEditor,
  editorDataChange,
  availableEditors,
  editorWeightChange,
})(PageBuilder);
