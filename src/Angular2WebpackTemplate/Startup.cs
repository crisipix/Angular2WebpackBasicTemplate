using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.AspNet.Http;
using Microsoft.Extensions.DependencyInjection;
using System.IO;

namespace Angular2WebpackTemplate
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
          
            services.AddCors(options =>
            {
                options.AddPolicy("AllowAllOrigins", builder => {
                    builder.AllowAnyOrigin()
                           .AllowAnyMethod()
                           .AllowAnyHeader();
                });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app)
        {
            //app.UseCors(builder =>  builder.WithOrigins("http://localhost").AllowAnyHeader());
            //app.UseCors(builder => builder.WithOrigins("http://localhost:55732"));
            app.UseCors("AllowAllOrigins");
            app.UseStatusCodePages();
            app.UseIISPlatformHandler();
            app.UseDefaultFiles();
            app.UseStaticFiles();

            //If you’re using Angular 2 with ASP.NET static file serving, you’ll have no doubt run into the fact that once you’ve navigated to 
            //a different Angular route, you can’t refresh the page. You’ll get a 404 error because the new URL no longer points to a valid file.
            //Instead we want to route all requests for Angular routes to the root page, usually index.html.Angular will then go figure out which page to load based on the URL.
            app.Use(async (context, next) =>
            {
                await next();

                // If there's no available file and the request doesn't contain an extension, we're probably trying to access a page.
                // Rewrite request to use app root
                if (context.Response.StatusCode == 404 && !Path.HasExtension(context.Request.Path.Value))
                {
                    context.Request.Path = "/index.html";
                    await next();
                }
            });


            // Serve wwwroot as root
            app.UseFileServer();
        }

        // Entry point for the application.
        public static void Main(string[] args) => WebApplication.Run<Startup>(args);
    }
}
