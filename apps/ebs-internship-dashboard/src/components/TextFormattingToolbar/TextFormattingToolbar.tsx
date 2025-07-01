import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Strike from "@tiptap/extension-strike";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import { Flex } from "antd";
import { useTextFormattingToolbarStyles } from "./TextFormattingToolbarStyles";
import { getFormattingButtons } from "./formattingButtonsConfig";

interface Props {
  initialValue?: string;
  onChange?: (value: string) => void;
}

export const TextFormattingToolbar = ({ initialValue, onChange }: Props) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Bold,
      Italic,
      Strike,
      Underline,
      Link.configure({
        openOnClick: true,
        autolink: true,
        linkOnPaste: true,
      }),
      Placeholder.configure({
        placeholder: "Enter your course description...",
      }),
    ],
    content: initialValue,
    onUpdate({ editor }) {
      const html = editor.getHTML();
      onChange?.(html);
    },
  });

  const { styles, theme: token } = useTextFormattingToolbarStyles();

  if (!editor) return null;

  const formattingButtons = getFormattingButtons();

  return (
    <Flex
      vertical
      className={styles.wrapper}
    >
      <EditorContent
        editor={editor}
        className={styles.wrapperEditor}
      />

      <Flex
        gap={8}
        className={styles.wrapperEditorButtons}
      >
        {formattingButtons.map(({ command, label, icon, style, action }) => (
          <button
            key={command}
            onClick={() => action(editor)}
            style={style(editor, token)}
            type="button"
            className={styles.editorButton}
            aria-label={label}
            title={label}
          >
            {icon ?? label}
          </button>
        ))}
      </Flex>
    </Flex>
  );
};
