export const notFound = (req, res, next) => {
  res.status(404).json({ message: "Route not found" });
};

export const errorHandler = (err, req, res, next) => {
  if (err?.name === "ZodError") {
    return res.status(400).json({
      message: "Validation failed",
      issues: err.issues,
    });
  }

  const statusCode = err.statusCode || 500;
  return res.status(statusCode).json({
    message: err.message || "Server error",
  });
};
