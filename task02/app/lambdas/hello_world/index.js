exports.handler = async (event) => {
    console.log("Hello from Lambda");

    // Extract path and method from the event
    const path = event.rawPath || event.path || "/";
    const method = event.requestContext?.http?.method || event.httpMethod || "GET";

    // Handle "/hello" GET request
    if (path === "/hello" && method.toUpperCase() === "GET") {
        return createSuccessResponse();
    } else {
        return createErrorResponse(`Bad request syntax or unsupported method. Request path: ${path}. HTTP method: ${method}`);
    }
};

// Function to generate a 200 response
const createSuccessResponse = () => {
    return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            statusCode: 200,
            message: "Hello from Lambda"
        })
    };
};

// Function to generate a 400 error response
const createErrorResponse = (message) => {
    return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            statusCode: 400,
            message: message
        })
    };
};
