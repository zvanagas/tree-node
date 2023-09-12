import { useState } from 'react';

type TreeNodeProps = {
  name: string;
};

function TreeNode({ name }: TreeNodeProps) {
  const [nodes, setNodes] = useState<string[]>([]);
  const [latestIndex, setLatestIndex] = useState<number>(0);

  const addNode = () => {
    const nodeName = `${name}-${latestIndex}`;
    setNodes((prevNodes) => [...prevNodes, nodeName]);
    setLatestIndex(latestIndex + 1);
  };

  const removeNode = () => {
    setNodes((prevNodes) => {
      const prevNodesCopy = [...prevNodes];
      prevNodesCopy.pop();
      setLatestIndex(latestIndex - 1);

      return prevNodesCopy;
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        paddingLeft: 8,
      }}
    >
      <div style={{ display: 'flex', gap: 8 }}>
        <span>{name}</span>
        <button onClick={addNode}>+</button>
        <button onClick={removeNode} disabled={!nodes.length}>
          -
        </button>
      </div>
      {nodes.map((name) => (
        <TreeNode key={name} name={name} />
      ))}
    </div>
  );
}

export default TreeNode;
