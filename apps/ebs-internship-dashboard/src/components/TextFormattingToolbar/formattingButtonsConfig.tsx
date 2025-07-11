import { CSSProperties, ReactNode } from "react";
import type { Editor } from "@tiptap/react";

import {
  ListBullets,
  ListNumbers,
  TextBold,
  TextItalic,
  TextStrikeThrough,
  TextUnderline,
  Link as LinkIcon,
} from "@/assets";
import { Theme } from "antd-style";

export interface FormattingButton {
  command: string;
  label: string;
  icon: ReactNode;
  style: (editor: Editor, token: Omit<Theme, "prefixCls">) => CSSProperties;
  action: (editor: Editor) => void;
}

export function getFormattingButtons(): FormattingButton[] {
  return [
    {
      command: "bold",
      label: "Bold",
      icon: (
        <TextBold
          width={18}
          height={18}
          fill="transparent"
        />
      ),
      style: (editor, token) => ({
        color: editor.isActive("bold") ? token.colorPrimary : undefined,
        fontWeight: editor.isActive("bold") ? "bold" : "normal",
      }),
      action: (editor) => editor.chain().focus().toggleBold().run(),
    },
    {
      command: "italic",
      label: "Italic",
      icon: (
        <TextItalic
          width={18}
          height={18}
          fill="transparent"
        />
      ),
      style: (editor, token) => ({
        color: editor.isActive("italic") ? token.colorPrimary : undefined,
        fontStyle: editor.isActive("italic") ? "italic" : "normal",
      }),
      action: (editor) => editor.chain().focus().toggleItalic().run(),
    },
    {
      command: "underline",
      label: "Underline",
      icon: (
        <TextUnderline
          width={18}
          height={18}
          fill="transparent"
        />
      ),
      style: (editor, token) => ({
        color: editor.isActive("underline") ? token.colorPrimary : undefined,
        textDecoration: editor.isActive("underline") ? "underline" : "none",
      }),
      action: (editor) => editor.chain().focus().toggleUnderline().run(),
    },
    {
      command: "strike",
      label: "Strike",
      icon: (
        <TextStrikeThrough
          width={18}
          height={18}
          fill="transparent"
        />
      ),
      style: (editor, token) => ({
        color: editor.isActive("strike") ? token.colorPrimary : undefined,
        textDecoration: editor.isActive("strike") ? "line-through" : "none",
      }),
      action: (editor) => editor.chain().focus().toggleStrike().run(),
    },
    {
      command: "link",
      label: "Link",
      icon: (
        <LinkIcon
          width={18}
          height={18}
          fill="transparent"
        />
      ),
      style: (editor, token) => ({
        color: editor.isActive("link") ? token.colorPrimary : undefined,
      }),
      action: (editor) => {
        const url = prompt("Введите ссылку:");
        if (url === null) return;
        if (url.trim() === "") {
          editor
            .chain()
            .focus()
            .unsetLink()
            .setTextSelection(editor.state.selection.to)
            .run();
        } else {
          editor
            .chain()
            .focus()
            .extendMarkRange("link")
            .setLink({ href: url.trim() })
            .run();
        }
      },
    },
    {
      command: "bulletList",
      label: "Bullets",
      icon: (
        <ListBullets
          width={18}
          height={18}
          fill="transparent"
        />
      ),
      style: (editor, token) => ({
        color: editor.isActive("bulletList") ? token.colorPrimary : undefined,
      }),
      action: (editor) => editor.chain().focus().toggleBulletList().run(),
    },
    {
      command: "orderedList",
      label: "Ordered",
      icon: (
        <ListNumbers
          width={18}
          height={18}
          fill="transparent"
        />
      ),
      style: (editor, token) => ({
        color: editor.isActive("orderedList") ? token.colorPrimary : undefined,
      }),
      action: (editor) => editor.chain().focus().toggleOrderedList().run(),
    },
  ];
}
