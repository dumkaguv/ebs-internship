/* eslint-disable @typescript-eslint/no-explicit-any */

export const notificationHandlers: Record<string, (data: any) => string> = {
  "EscolaLms\\Courses\\Events\\TopicFinished": (data) =>
    `You have completed the topic "${data?.topic?.title ?? "Untitled"}".`,

  "EscolaLms\\Courses\\Events\\CourseTutorAssigned": (data) =>
    `You have been assigned to the course "${
      data?.course?.title ?? "Untitled"
    }".`,

  "EscolaLms\\Settings\\Events\\SettingPackageConfigUpdated": () =>
    `Platform settings have been updated.`,

  "EscolaLms\\Payments\\Events\\PaymentRegistered": (data) => {
    const status = data?.payment?.status;
    const amount = data?.payment?.amount;
    const currency = data?.payment?.currency ?? "$";
    const formattedAmount = amount ? (amount / 100).toFixed(2) : "unknown";

    switch (status) {
      case "failed":
        return `Payment of ${formattedAmount} ${currency} failed.`;
      case "completed":
        return `Payment of ${formattedAmount} ${currency} completed successfully.`;
      default:
        return `Payment registered: ${formattedAmount} ${currency}.`;
    }
  },

  "EscolaLms\\Payments\\Events\\PaymentFailed": (data) => {
    const errorMsg = data?.message ?? "Unknown payment error.";
    const amount = data?.payment?.amount;
    const currency = data?.payment?.currency ?? "PLN";
    const formattedAmount = amount ? (amount / 100).toFixed(2) : "unknown";

    return `Payment error for ${formattedAmount} ${currency}: ${errorMsg}`;
  },

  "EscolaLms\\Cart\\Events\\ProductAddedToCart": (data) => {
    const product = data?.product;
    const productName = product?.name ?? "product";
    const quantityChange = data?.quantity_change ?? 1;
    const quantityInCart = data?.quantity_in_cart ?? 0;

    return `Product "${productName}" was added to your cart. Quantity changed by ${quantityChange}. Current quantity in cart: ${quantityInCart}.`;
  },

  "EscolaLms\\CourseAccess\\Events\\CourseAccessEnquiryStudentCreatedEvent": (
    data
  ) => {
    const enquiry = data?.courseAccessEnquiry;
    const courseId = enquiry?.course_id ?? "unknown";
    const status = enquiry?.status ?? "unknown";
    return `Access request for course ID ${courseId} was created with status "${status}".`;
  },

  "EscolaLms\\TopicTypes\\Events\\TopicTypeChanged": (data) => {
    const topicContent = data?.topicContent;
    const value = topicContent?.value;

    let snippet = "no content";
    if (typeof value === "string") {
      snippet = value.slice(0, 100);
    } else if (value != null) {
      snippet = JSON.stringify(value).slice(0, 100);
    }

    return `Topic content updated: ${snippet}...`;
  },

  "EscolaLms\\Auth\\Events\\ForgotPassword": (data) => {
    const returnUrl = data?.returnUrl ?? "unknown";
    return `Password reset requested. Please visit: ${returnUrl}`;
  },

  "EscolaLms\\Cart\\Events\\OrderCreated": (data) => {
    const totalCents = data?.order?.total;
    const formattedTotal = totalCents
      ? (totalCents / 100).toFixed(2)
      : "unknown";
    return `New order created with total amount ${formattedTotal} PLN.`;
  },
};
