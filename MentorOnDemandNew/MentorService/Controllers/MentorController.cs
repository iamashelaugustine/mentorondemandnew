using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MentorLibrary.Models;
using MentorLibrary.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MentorService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MentorController : ControllerBase
    {
        IMentorRepository repository;
        public MentorController(IMentorRepository repository)
        {
            this.repository = repository;
        }

        // GET: api/Admin/5
        [Route("getmentor/{mentormail}")]
        [HttpGet]
        public IActionResult GetMentor(string mentormail)
        {
            var mentor = repository.GetMentor(mentormail);
            if (mentor == null)
            {
                return NotFound();
            }
            return Ok(mentor);
        }

        // POST: api/Admin/addcourse
        [Route("addcourse")]
        [HttpPost]

        public IActionResult Post([FromBody] Course course)
        {
            if (ModelState.IsValid)
            {
                bool result = repository.AddCourse(course);
                if (result)
                {
                    return Created("AddCourse", course.Id);
                }
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return BadRequest(ModelState);
        }


        [Route("courselist/{id}")]
        [HttpGet]
        public IActionResult GetCourseList(string id)
        {
            var courses = repository.GetCourseList(id);
            if (!courses.Any())
            {
                return NoContent();
            }
            return Ok(courses);
        }


        [Route("completedcourselist/{id}")]
        [HttpGet]
        public IActionResult GetCompletedCourseList(string id)
        {
            var courses = repository.GetCompletedCourseList(id);
            if (!courses.Any())
            {
                return NoContent();
            }
            return Ok(courses);
        }

        [Route("courses")]
        [HttpGet]
        public IActionResult GetCourses()
        {
            var courses = repository.GetCourses();
            if (!courses.Any())
            {
                return NoContent();
            }
            return Ok(courses);
        }


        // POST: api/Admin/addcourse
        [Route("mentorupdateprofile")]
        [HttpPost]

        public IActionResult UpdateProfile([FromBody] MentorProfile profile)
        {
            if (ModelState.IsValid)
            {
                bool result = repository.UpdateProfile(profile);
                if (result)
                {
                    return Created("UpdateProfile", profile.Id);
                }
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return BadRequest(ModelState);
        }


        
    }
}