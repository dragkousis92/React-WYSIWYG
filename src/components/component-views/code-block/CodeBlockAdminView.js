import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import languageSuppport from './languageSupport';

type Props = {
  code: string,
  handleSubmit: () => void,
  editorId: string,
};

const CodeEditor = ({ code, handleSubmit, editorId }: Props) => {
  const [text, setText] = useState(code);
  const [language, setLanguage] = useState('');

  const onChange = event => setText(event.target.value);

  const onKeyDown = event => {
    if (event.keyCode === 9) {
      event.preventDefault();
      const { selectionStart, selectionEnd } = event.target;
      setText(
        text.substring(0, selectionStart) + '\t' + text.substring(selectionEnd),
      );
    }
  };

  const submitForm = () => {
    handleSubmit({
      editorId: editorId,
      data: { code: text, language: language },
    });
  };

  const languageChange = event => setLanguage(event.target.value);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <form onSubmit={submitForm}>
          <Grid container>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor='language'>Language</InputLabel>
                <Select
                  id='language'
                  value={language}
                  onChange={languageChange}>
                  {Object.keys(languageSuppport).map(language => (
                    <MenuItem key={language} value={languageSuppport[language]}>
                      {language}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField
                  id='code'
                  placeholder=''
                  multiline
                  minRows={10}
                  maxRows={Infinity}
                  value={text}
                  onChange={onChange}
                  onKeyDown={onKeyDown}
                  label='Code'
                />
              </FormControl>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12}>
              <Button variant='contained' color='primary' onClick={submitForm}>
                Save
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

CodeEditor.defaultProps = {
  defaultTitle: '',
};
export { CodeEditor };
export default CodeEditor;
