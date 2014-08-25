using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace BuildingSpaUsingKO.Web
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "{Controller}/{action}/{id}",
                defaults: new { action = "Index", id = UrlParameter.Optional }
            );

            routes.MapRoute(
                name: "CatchAll",
                url: "{*pathinfo}",
                defaults: new { Controller="Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}

