const generateHash = length => {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const generateComponent = (weight, config) => {
  const id = generateHash(6);
  return {
    [id]: {
      id: id,
      weight: weight,
      ...config,
    },
  };
};

// const registerComponentEditor = ({ type, label }, view) => {
//   componentEditors.push({
//     type: type,
//     label: label,
//     view: view,
//   });
// };

// registerComponentEditor(CKEditor, CKEditorComponent);
// registerComponentEditor(ImageEditor, ImageComponent);

export {
  // pageObject,
  generateComponent,
  // registerComponentEditor,
  // componentEditors,
};
