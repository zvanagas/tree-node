import React from 'react';
import ReactDOM from 'react-dom/client';
import TreeNode from './TreeNode.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TreeNode name="Node" />
  </React.StrictMode>
);
