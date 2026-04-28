## Tool: Chrome Developer Tools Console

How it was used: I used the console to monitor for JavaScript execution errors and to trace variable states during the login process. 
## Error Fixed: 
The security gate was failing because of a logic error in the If Else statement. I used the console to find that the isAuthorized variable was not updating to True, which I corrected to ensure the security system works properly. 
Tool: Chrome Network Tab

How it was used: I used this tool to audit the load times of every asset to ensure the system meets the 100ms response time requirement.
## 4. Syntax Highlighting & Linter
 To catch missing semicolons, unclosed brackets `}`, or misspelled keywords before the code was deployed.
 Using the GitHub editor's built-in color-coding to distinguish between Strings, Integers, and Functions, which helped prevent "Type Errors."
