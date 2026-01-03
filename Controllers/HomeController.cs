using Microsoft.AspNetCore.Mvc;

namespace TransmacConsult.Controllers
{
    public class HomeController : Controller
    {
        // 1. About Us
        public IActionResult AboutUs()
        {
            return View();
        }

        // 2. Vision & Mission
        public IActionResult VisionMission()
        {
            return View();
        }

        // 3. Founder & Leadership
        public IActionResult Leadership()
        {
            return View();
        }

        // 4. Core Services
        public IActionResult Services()
        {
            return View();
        }

        // 5. Key Projects
        public IActionResult Projects()
        {
            return View();
        }

        // 6. Regional Presence
        public IActionResult RegionalPresence()
        {
            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
