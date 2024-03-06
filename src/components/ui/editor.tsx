import { Ref, useEffect, useMemo, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const Editor = ({
  id,
  value,
  onChange,
}: {
  id: string;
  value: string;
  onChange: (value: string) => void;
}) => {
  // Editor ref
  const quill = useRef<ReactQuill>(null);

  const imageHandler = useMemo(() => {
    const handler = () => {
      // Create an input element of type 'file'
      const input = document.createElement("input");
      input.setAttribute("type", "file");
      input.setAttribute("accept", "image/*");
      input.click();

      // When a file is selected
      input.onchange = () => {
        const file = input.files?.[0];
        if (file) {
          const reader = new FileReader();

          // Read the selected file as a data URL
          reader.onload = () => {
            const imageUrl = reader.result;
            const quillEditor = quill.current?.getEditor(); // Add null check

            // Get the current selection range and insert the image at that index
            const range = quillEditor?.getSelection(true); // Add null check
            if (quillEditor && range) {
              // Add null check
              quillEditor.insertEmbed(range.index, "image", imageUrl, "user");
            }
          };

          reader.readAsDataURL(file);
        }
      };
    };

    return handler;
  }, []);

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [2, 3, 4, false] }],
          ["bold", "italic", "underline", "blockquote"],
          [{ color: [] }],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link", "image"],
          ["clean"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
      clipboard: {
        matchVisual: true,
      },
    }),
    [imageHandler]
  );

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "clean",
  ];

  useEffect(() => {
    if (quill.current) {
      quill.current.getEditor().root.setAttribute("spellcheck", "false");
    }
  }, []);

  return (
    <ReactQuill
      id={id}
      theme="snow"
      ref={quill}
      className="h-36 mb-16"
      formats={formats}
      modules={modules}
      value={value}
      onChange={onChange}
    />
  );
};
