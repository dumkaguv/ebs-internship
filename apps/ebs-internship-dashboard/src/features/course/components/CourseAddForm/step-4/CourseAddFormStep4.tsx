import { StaticLabelInput, StaticLabelInputNumber } from "@/components";
import { createProduct, updateProduct } from "@/features/course/api";
import { StepContent } from "@/features/course/components";
import { useAddCourseFormStore } from "@/features/course/stores";
import { Flex, Form, Switch, Typography } from "antd";
import { useForm } from "antd/es/form/Form";

interface Props {
  title: string;
}

interface FormValues {
  price: number;
  tax_rate?: number;
  limit_total: number;
  limit_per_user?: number;
  name: string;
  purchasable: boolean;
  buyable: boolean;
}

export const CourseAddFormStep4 = ({ title }: Props) => {
  const [form] = useForm<FormValues>();

  const { course } = useAddCourseFormStore();
  const product = course?.product;

  const initialValues: Partial<FormValues> = {
    price: product?.price ?? undefined,
    tax_rate: product?.tax_rate ?? 0,
    limit_total: product?.limit_total ?? undefined,
    limit_per_user: product?.limit_per_user ?? 1,
    name: product?.name ?? course?.title ?? undefined,
    purchasable: product?.purchasable ?? true,
    buyable: product?.buyable ?? true,
  };

  const onButtonNextClick = async () => {
    const formValues = form.getFieldsValue();
    if (!course) return;

    if (course.product) {
      await updateProduct(course.product.id, formValues);
    } else {
      await createProduct({ courseId: course.id, ...formValues });
    }
  };

  return (
    <Form
      form={form}
      initialValues={initialValues}
      layout="vertical"
      requiredMark={false}
      scrollToFirstError
    >
      <StepContent
        form={form}
        title={title}
        onNext={onButtonNextClick}
      >
        <Flex
          vertical
          gap={12}
        >
          <Flex gap={24}>
            <Form.Item
              name="price"
              className="w-full"
              rules={[
                { required: true, message: "Please enter product price" },
              ]}
            >
              <StaticLabelInputNumber
                id="price"
                label="Price"
                placeholder="Input your price here..."
                formatter={(value) => `${value ? `${value}$` : ""}`}
                parser={(value) => (value ? value.replace("$", "") : "")}
                min={0}
              />
            </Form.Item>
            <Form.Item
              name="tax_rate"
              className="w-full"
            >
              <StaticLabelInputNumber
                id="tax_rate"
                label="Tax Rate (%)"
                placeholder="Input tax rate here..."
                formatter={(value) => `${value}%`}
                parser={(value) => (value ? value.replace("%", "") : "")}
                min={0}
                max={100}
              />
            </Form.Item>
            <Form.Item
              name="limit_total"
              className="w-full"
            >
              <StaticLabelInputNumber
                id="limit_total"
                label="Limit of selling quantity"
                placeholder="Input limit here..."
                min={1}
              />
            </Form.Item>
            <Form.Item
              name="limit_per_user"
              className="w-full"
            >
              <StaticLabelInputNumber
                id="limit_per_user"
                label="Limit Per User"
                placeholder="Input limit here..."
                min={1}
              />
            </Form.Item>
          </Flex>

          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please enter product name" }]}
            className="w-full"
          >
            <StaticLabelInput
              id="name"
              label="Product Name"
              placeholder="Input name here..."
            />
          </Form.Item>

          <Flex gap={24}>
            <Flex vertical>
              <Typography.Paragraph>Purchasable</Typography.Paragraph>
              <Form.Item
                name="purchasable"
                valuePropName="checked"
              >
                <Switch defaultChecked={true} />
              </Form.Item>
            </Flex>
            <Flex vertical>
              <Typography.Paragraph>Buyable</Typography.Paragraph>
              <Form.Item
                name="buyable"
                valuePropName="checked"
              >
                <Switch defaultChecked={true} />
              </Form.Item>
            </Flex>
          </Flex>
        </Flex>
      </StepContent>
    </Form>
  );
};
