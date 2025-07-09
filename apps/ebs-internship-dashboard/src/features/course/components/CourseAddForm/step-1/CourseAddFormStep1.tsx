import { Form, Flex, message } from "antd";
import {
  StaticLabelInput,
  StaticLabelInputNumber,
  StaticLabelSelect,
} from "@/components";
import { StepContent } from "@/features/course/components";
import { useCourseAddFormFirstStep } from "@/features/course/hooks";
import { useForm } from "antd/es/form/Form";
import { createCourse, updateCourse } from "@/features/course/api";
import { useEffect } from "react";
import { useAddCourseFormStore } from "@/features/course/stores";
import { useNavigate, useParams } from "react-router-dom";
import { getRouteUrlById, RoutesEnum } from "@/config/routesEnum";

interface Props {
  title: string;
}

interface FormValues {
  title: string;
  subtitle: string;
  language: string;
  level: string;
  duration: number;
  tags: number[];
  categories: number[];
}

export const CourseAddFormStep1 = ({ title }: Props) => {
  const { id } = useParams<{ id?: string }>();
  const [form] = useForm<FormValues>();
  const navigate = useNavigate();

  const { course, setCourse } = useAddCourseFormStore();

  const {
    categories,
    tags,
    languages,
    levels,
    categoriesIsLoading,
    tagsIsLoading,
  } = useCourseAddFormFirstStep();

  const onButtonSaveClick = async () => {
    const courseInfoFromForm = form.getFieldsValue();
    const mainCourseInfo = {
      title: courseInfoFromForm.title,
      subtitle: courseInfoFromForm.subtitle,
      language: courseInfoFromForm.language,
      duration: String(courseInfoFromForm.duration),
      level: courseInfoFromForm.level,
    };
    const { categories: categoriesForm, tags: tagsForm } = courseInfoFromForm;

    if (id) {
      const updatedCourse = await updateCourse(Number(id), mainCourseInfo, {
        categories: categoriesForm,
        tags: tagsForm,
      });

      if (!updatedCourse) {
        message.error("Error occurred updating course. Try again.");
        return;
      }

      setCourse(updatedCourse);
      return;
    }

    const createdCourseId = (await createCourse(mainCourseInfo))?.id;
    if (!createdCourseId) {
      message.error("Error occurred creating course. Try again.");
      return;
    }

    const updatedCourseTagsAndCategories = await updateCourse(
      createdCourseId,
      {},
      { categories: categoriesForm, tags: tagsForm }
    );

    if (!updatedCourseTagsAndCategories) {
      message.error(
        "Error occurred assigning categories or tags to the course. Try again."
      );
      return;
    }

    setCourse(updatedCourseTagsAndCategories);
    navigate(getRouteUrlById(RoutesEnum.COURSES.ADD, createdCourseId));
  };

  useEffect(() => {
    if (!course) return;

    form.setFieldsValue({
      title: course.title,
      subtitle: course.subtitle,
      language: course.language ?? "",
      level: course.level ?? "",
      duration: Number(course.duration),
      categories: course.categories?.map((cat) => cat.id),
      tags: course.tags?.map((tag) => tag.id),
    });
  }, [course, form]);

  return (
    <Form
      form={form}
      layout="vertical"
      requiredMark={false}
      scrollToFirstError
    >
      <StepContent
        form={form}
        title={title}
        onButtonNextClickCB={onButtonSaveClick}
      >
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
              rules={[
                { required: true, message: "Please fill in course name" },
              ]}
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
    </Form>
  );
};
