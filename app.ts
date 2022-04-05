import App from './src/index';

const port = process.env.PORT || 3000;
App.listen(port, () => {
  console.log(`[success] Daro is running at port ${port}`);
});
