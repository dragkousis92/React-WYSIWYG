import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

import languageSuppport from './languageSupport';

type Props = {
  code: string,
  handleUpdate: () => void,
  language: string,
};

const CodeEditor = ({
  code: defaultInput,
  language: defaultLanguage,
  handleUpdate,
}: Props) => {
  const [code, setCode] = useState(defaultInput);
  const [language, setLanguage] = useState(defaultLanguage);

  const onChange = event => setCode(event.target.value);

  const onKeyDown = event => {
    if (event.keyCode === 9) {
      event.preventDefault();
      const { selectionStart, selectionEnd } = event.target;
      setCode(
        code.substring(0, selectionStart) + '\t' + code.substring(selectionEnd),
      );
    }
  };

  const submitForm = () => {
    handleUpdate({ code: code, language: language });
  };

  const languageChange = event => setLanguage(event.target.value);

  return (
    <form onSubmit={submitForm}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <FormControl variant='standard' fullWidth>
            <InputLabel htmlFor='language'>Language</InputLabel>
            <Select id='language' value={language} onChange={languageChange}>
              {Object.keys(languageSuppport).map(language => (
                <MenuItem key={language} value={languageSuppport[language]}>
                  {language}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={10}>
          <FormControl fullWidth>
            <TextField
              id='code'
              placeholder=''
              multiline
              minRows={10}
              maxRows={Infinity}
              value={code}
              onChange={onChange}
              onKeyDown={onKeyDown}
              label='Code'
              variant='standard'
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button variant='contained' color='primary' onClick={submitForm}>
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

CodeEditor.defaultProps = {
  defaultTitle: '',
};
export { CodeEditor };
export default CodeEditor;
