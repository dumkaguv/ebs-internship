import { Pencil, Plus, Trash } from "@/assets";
import { StaticLabelInput } from "@/components";
import { Button, Flex, Form, Modal, Tooltip, Typography } from "antd";
import { useTheme } from "antd-style";
import { useState } from "react";
import { useActionButtonsStyles } from "./ActionButtonsStyles";
import { useAddCourseFormStore } from "@/features/course/stores";

interface Props {
  index: number;
  innerIndex?: number;
  fieldName: string;
  onClickAdd?: () => void;
  onClickRemove?: () => void;
  onClickEdit?: () => void;
  modalTitle?: string;
  inputEditLabel: string;
  inputEditId: string;
  inputEditPlaceholder: string;
  showAddButton?: boolean;
}

export const ActionButtons = ({
  index,
  innerIndex,
  fieldName,
  showAddButton = true,
  onClickAdd,
  onClickRemove,
  onClickEdit,
  modalTitle,
  inputEditLabel,
  inputEditId,
  inputEditPlaceholder,
}: Props) => {
  const { form } = useAddCourseFormStore();

  const [isModalEditOpen, setIsModalEditOpen] = useState(false);

  const [inputValue, setInputValue] = useState("");

  const theme = useTheme();
  const { styles } = useActionButtonsStyles();

  const showModal = () => {
    setIsModalEditOpen(true);
  };

  const handleOk = () => {
    if (innerIndex !== undefined) {
      form?.setFieldValue(
        ["lessons", index, "topics", innerIndex, fieldName],
        inputValue
      );
    } else {
      form?.setFieldValue(["lessons", index, fieldName], inputValue);
    }
    setIsModalEditOpen(false);
  };

  const handleCancel = () => {
    setIsModalEditOpen(false);
  };

  return (
    <div onClick={(event) => event.stopPropagation()}>
      <Flex gap={16}>
        {showAddButton && (
          <Tooltip title="Add a new one">
            <Button
              type="text"
              onClick={(e) => {
                e.stopPropagation();
                onClickAdd?.();
              }}
              size="small"
              style={{ paddingInline: 1 }}
            >
              <Plus
                width={20}
                height={20}
                fill="transparent"
                stroke={theme.grey.grey500}
              />
            </Button>
          </Tooltip>
        )}

        <Tooltip title="Edit">
          <Button
            type="text"
            onClick={(e) => {
              showModal();
              e.stopPropagation();
              onClickEdit?.();
            }}
            size="small"
            style={{ paddingInline: 1 }}
          >
            <Pencil
              width={20}
              height={20}
              fill="transparent"
              stroke={theme.grey.grey500}
            />
          </Button>
        </Tooltip>

        <Tooltip title="Delete">
          <Button
            type="text"
            onClick={(e) => {
              e.stopPropagation();
              onClickRemove?.();
            }}
            size="small"
            style={{ paddingInline: 1 }}
          >
            <Trash
              width={20}
              height={20}
              fill="transparent"
              stroke={theme.grey.grey500}
            />
          </Button>
        </Tooltip>
      </Flex>

      <Modal
        title={
          <Typography.Title level={5}>
            {modalTitle ?? "Edit name"}
          </Typography.Title>
        }
        open={isModalEditOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        wrapClassName={styles.modalWrapper}
        centered
      >
        <Form.Item
          name={["lessons", index, fieldName]}
          rules={[{ required: true, message: "Please fill in" }]}
        >
          <StaticLabelInput
            id={inputEditId}
            label={inputEditLabel}
            placeholder={inputEditPlaceholder}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </Form.Item>
      </Modal>
    </div>
  );
};
