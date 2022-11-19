export const showToast = (severity, summary, message, toast) => {
  toast.current.show({
    severity: severity,
    summary: summary,
    detail: message,
    life: 3000,
  });
};

// posibles valores de los severity: success, info, warn, error