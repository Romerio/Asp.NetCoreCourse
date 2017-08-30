using System;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using StoreOfBuild.Data;

namespace StoreOfBuild.DI
{
    public class Bootstrap
    {
        public static void Configure(IServiceCollection services, string dbConnectionString)
        {
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(dbConnectionString));
        }
    }
}
