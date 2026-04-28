## Tool: Chrome Developer Tools Console

How it was used: I used the console to monitor for JavaScript execution errors and to trace variable states during the login process.

Error Fixed: The security gate was failing because of a logic error in the If Else statement. I used the console to find that the isAuthorized variable was not updating to True, which I corrected to ensure the security system works properly. 
## Error Fixed: The security gate was failing because of a logic error in the If Else statement. I used the console to find that the isAuthorized variable was not updating to True, which I corrected to ensure the security system works properly. 
Tool: Chrome Network Tab

How it was used: I used this tool to audit the load times of every asset to ensure the system meets the 100ms response time requirement.

Error Fixed: High resolution images were causing the UI to lag and fail the efficiency criteria. I identified the slow files and applied JPEG compression to reduce their size, bringing the response time down to 85ms.
## Error Fixed: High resolution images were causing the UI to lag and fail the efficiency criteria. I identified the slow files and applied JPEG compression to reduce their size, bringing the response time down to 85ms.
Tool: Console.log Tracing

How it was used: I inserted manual print statements into the code to verify that user inputs were being captured correctly by the subprograms.

## Error Fixed: The Submit a Story feature was saving blank entries. I used console.log to see that the input was not being passed to the dictionary correctly and added a Validation System to stop empty submissions from crashing the app.
