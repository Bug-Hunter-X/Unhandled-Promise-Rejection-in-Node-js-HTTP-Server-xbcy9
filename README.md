# Unhandled Promise Rejection in Node.js HTTP Server

This repository demonstrates a common yet often overlooked error in Node.js: unhandled promise rejections.  The example uses a simple HTTP server. While the server starts correctly, an unhandled promise rejection is triggered, which needs to be addressed to prevent unexpected behavior or application crashes.

## Bug

The `bug.js` file contains a Node.js HTTP server.  Although the server starts and runs without apparent issues, it produces an unhandled promise rejection warning in the console. This can be very difficult to debug without understanding that promises are involved.  This is a common issue especially with asynchronous operations.