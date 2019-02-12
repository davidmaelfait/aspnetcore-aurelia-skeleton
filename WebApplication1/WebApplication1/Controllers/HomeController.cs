using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {
        public HomeController() { }

        /// <summary>
        /// Base hosting for the Aurelia Singe page application
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IActionResult Index()
        {
            return View("Index"); // Index.cshtml wil bootstrap aurelia
        }

        [HttpGet("hosting")]
        public IActionResult GetHosting()
        {
            var settings = new HostingDTO();
            Startup.Configuration.GetSection("hosting").Bind(settings);
            return Ok(settings) ;
        }
      
    }
}
