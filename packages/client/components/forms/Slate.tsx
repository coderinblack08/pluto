// @refresh reset
import React, { useCallback, useMemo, useState } from 'react';
import { Editor } from 'slate';
import { createEditor, Node, Transforms } from 'slate';
import { Editable, Slate, withReact } from 'slate-react';

const CodeElement = (props: any) => {
  return (
    <pre {...props.attributes}>
      <code className="font-mono">{props.children}</code>
    </pre>
  );
};

const DefaultElement = (props) => {
  return (
    <p className="font-sans" {...props.attributes}>
      {props.children}
    </p>
  );
};

const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: '' }],
  },
] as Node[];

export const SlateField = () => {
  const [value, setValue] = useState<Node[]>(initialValue);
  const editor = useMemo(() => withReact(createEditor()), []);

  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case 'code':
        return <CodeElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  return (
    <Slate editor={editor} value={value} onChange={(value) => setValue(value)}>
      <Editable
        placeholder="Hello World..."
        renderElement={renderElement}
        onKeyDown={(event) => {
          if (event.key === '`' && event.ctrlKey) {
            event.preventDefault();
            const [match]: any = Editor.nodes(editor, {
              match: (n) => n.type === 'code',
            });

            Transforms.setNodes(
              editor,
              { type: match ? 'paragraph' : 'code' },
              { match: (n) => Editor.isBlock(editor, n) }
            );
          }
        }}
      />
    </Slate>
  );
};
