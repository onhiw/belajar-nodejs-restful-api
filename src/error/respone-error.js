class ResponeError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

export { ResponeError };
