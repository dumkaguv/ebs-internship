import { StaticLabelWrapper } from "@/components";
import { Col, DatePicker, Flex, Form, Row, TimePicker, Typography } from "antd";

export const CouponTimeDateSection = () => {
  return (
    <Flex
      vertical
      gap={18}
    >
      <Typography.Paragraph>Date & Time</Typography.Paragraph>

      <Row gutter={[16, 16]}>
        <Col span={12}>
          <StaticLabelWrapper
            label="Starting Date"
            id="startDate"
          >
            <Form.Item
              name="startDate"
              rules={[
                { required: true, message: "Please select the starting date" },
              ]}
            >
              <DatePicker
                format="DD/MM/YYYY"
                placeholder="DD/MM/YYYY"
              />
            </Form.Item>
          </StaticLabelWrapper>
        </Col>

        <Col span={12}>
          <StaticLabelWrapper
            label="Starting Time"
            id="startTime"
          >
            <Form.Item
              name="startTime"
              rules={[
                { required: true, message: "Please select the starting time" },
              ]}
            >
              <TimePicker
                use12Hours
                format="h:mm A"
              />
            </Form.Item>
          </StaticLabelWrapper>
        </Col>

        <Col span={12}>
          <StaticLabelWrapper
            label="Ending Date"
            id="endDate"
          >
            <Form.Item
              name="endDate"
              rules={[
                { required: true, message: "Please select the ending date" },
              ]}
            >
              <DatePicker
                format="DD/MM/YYYY"
                placeholder="DD/MM/YYYY"
              />
            </Form.Item>
          </StaticLabelWrapper>
        </Col>

        <Col span={12}>
          <StaticLabelWrapper
            label="Ending Time"
            id="endTime"
          >
            <Form.Item
              name="endTime"
              rules={[
                { required: true, message: "Please select the ending time" },
              ]}
            >
              <TimePicker
                use12Hours
                format="h:mm A"
              />
            </Form.Item>
          </StaticLabelWrapper>
        </Col>
      </Row>
    </Flex>
  );
};
