import React, { useEffect, useRef } from 'react';
import 'quill/dist/quill.snow.css';

const QuillEditor: React.FC = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const quillRef = useRef<any>(null);
  const wsRef = useRef<WebSocket | null>(null);
  const isSending = useRef(false);
  const isUpdating = useRef(false);

  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],
    ['link', 'image'],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
    [{ 'indent': '-1'}, { 'indent': '+1' }],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'font': [] }],
    [{ 'align': [] }],
  ];

  useEffect(() => {
    if (editorRef.current) {
      import('quill').then((QuillModule) => {
        const Quill = QuillModule.default;

        if (!quillRef.current) {
          quillRef.current = new Quill(editorRef.current as HTMLElement, {
            theme: 'snow',
            modules: {
            //   toolbar: true,
              toolbar: toolbarOptions,
            },
          });

          wsRef.current = new WebSocket('ws://localhost:3001');

          wsRef.current.onmessage = (event) => {
            if (isSending.current) return;
            isUpdating.current = true;

            const { delta } = JSON.parse(event.data);
            quillRef.current.updateContents(delta);

            isUpdating.current = false;
          };

          quillRef.current.on('text-change', (delta: any) => {
            if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN && !isUpdating.current) {
              isSending.current = true;
              wsRef.current.send(JSON.stringify({ delta }));
              isSending.current = false;
            }
          });
        }
      });

      return () => {
        if (wsRef.current) {
          wsRef.current.close();
          wsRef.current = null;
        }
        if (quillRef.current) {
          quillRef.current = null;
        }
      };
    }
  }, []);

  return (
    <div className="quill-editor-container p-4 bg-gray-50 shadow-lg rounded-lg border border-gray-300">
      <div ref={editorRef} className="quill-editor h-96 border border-gray-300 rounded-md bg-white"></div>
    </div>
  );
};

export default QuillEditor;
