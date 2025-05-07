class ApiResponse {
  constructor(statuscode, message = "Success", data) {
    this.success = statuscode < 400;
    this.message = message;
    this.data = data;
    this.statuscode = statuscode;
  }
}

export default ApiResponse;
