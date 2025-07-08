import { Form, Flex } from "antd";
import {
  StaticLabelInput,
  StaticLabelInputNumber,
  StaticLabelSelect,
} from "@/components";
import { StepContent } from "@/features/course/components";
import { useCourseAddFormFirstStep } from "@/features/course/hooks";

interface Props {
  title: string;
}

export const CourseAddFormStep1 = ({ title }: Props) => {
  const {
    categories,
    tags,
    languages,
    levels,
    categoriesIsLoading,
    tagsIsLoading,
  } = useCourseAddFormFirstStep();

  return (
    <StepContent title={title}>
      <Flex
        vertical
        gap={32}
      >
        <Flex
          vertical
          gap={12}
        >
          <Form.Item
            name="title"
            rules={[{ required: true, message: "Please fill in course name" }]}
          >
            <StaticLabelInput
              label="Title"
              id="title"
              placeholder="Your course title"
              maxLength={80}
              count={{
                show: true,
              }}
            />
          </Form.Item>

          <Form.Item
            name="subtitle"
            rules={[
              { required: true, message: "Please fill in course subtitle" },
            ]}
          >
            <StaticLabelInput
              label="Subtitle"
              id="subtitle"
              placeholder="Your course subtitle"
              maxLength={120}
              count={{
                show: true,
              }}
            />
          </Form.Item>

          <Flex gap={24}>
            <Form.Item
              name="categories"
              rules={[
                {
                  required: true,
                  message: "Please select at least 1 category",
                },
              ]}
              className="w-full"
            >
              <StaticLabelSelect
                label="Course Category"
                id="category"
                virtual={false}
                placeholder="Select category..."
                mode="multiple"
                loading={categoriesIsLoading}
                options={categories}
              />
            </Form.Item>

            <Form.Item
              name="tags"
              rules={[
                {
                  required: true,
                  message: "Please select at least 1 tag",
                },
              ]}
              className="w-full"
            >
              <StaticLabelSelect
                label="Course Tag"
                id="tag"
                virtual={false}
                placeholder="Select tag..."
                mode="multiple"
                loading={tagsIsLoading}
                options={tags}
              />
            </Form.Item>
          </Flex>
          <Form.Item
            name="topic"
            rules={[{ required: true, message: "Please fill in course topic" }]}
          >
            <StaticLabelInput
              label="Course Topic"
              id="topic"
              placeholder="What is primarily taught in your course?"
            />
          </Form.Item>

          <Flex gap={24}>
            <Form.Item
              name="language"
              rules={[
                {
                  required: true,
                  message: "Please select at least 1 language",
                },
              ]}
              className="w-full"
            >
              <StaticLabelSelect
                label="Course Language"
                placeholder="Select language..."
                id="language"
                options={languages}
              />
            </Form.Item>

            <Form.Item
              name="level"
              rules={[
                {
                  required: true,
                  message: "Please select course level",
                },
              ]}
              className="w-full"
            >
              <StaticLabelSelect
                label="Course Level"
                id="level"
                placeholder="Select level..."
                options={levels}
              />
            </Form.Item>

            <Form.Item
              name="duration"
              rules={[
                {
                  required: true,
                  message: "Please type course duration",
                },
              ]}
              className="w-full"
            >
              <StaticLabelInputNumber
                label="Course Duration (Hours)"
                id="duration"
                placeholder="Type hours..."
                min={1}
                precision={0}
                step={1}
              />
            </Form.Item>
          </Flex>
        </Flex>
      </Flex>
    </StepContent>
  );
};
