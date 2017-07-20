

To run : 
1. In the 1st terminal : ng serve --proxy-config proxy.config.json
2. In the 2nd terminal : dotnet watch run


To publish 
1. dotnet publish

Some hints how template was created : 
1. dotnet new sln --name DotNetAgnularTemplate
2. mkdir DotNetAgnularTemplate.Web
3. cd .\DotNetAgnularTemplate.Web\
4. dotnet new webapi
5. add Microsoft.AspNetCore.StaticFiles
6. add <TypeScriptCompileBlocked>true</TypeScriptCompileBlocked> to the csproj 
7. modify startup.cs 
8. ng new DotNetAgnularTemplate.Web
9. Move and modifige git ignore
10. add Microsoft.DotNet.Watcher.Tools
11. add ng serve --proxy-config proxy.config.json
12. remove node_modules from compilation 

--

https://medium.com/@levifuller/building-an-angular-application-with-asp-net-core-in-visual-studio-2017-visualized-f4b163830eaa
http://angularfirst.com/get-going-with-the-angular-and-asp-net-clis/

